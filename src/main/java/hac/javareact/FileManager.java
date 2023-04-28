package hac.javareact;
import java.io.*;
import java.util.*;
import java.io.*;
import java.util.*;

public class FileManager {
    private static final String FILE_NAME = "scores.dat";
    private static FileManager instance;
    //private final String filePath;

    private FileManager() {
       // filePath = path;
    }

    public static FileManager getInstance() {
        if (instance == null) {
            instance = new FileManager();
        }
        return instance;
    }

    public synchronized List<UserScore> getTopScores() throws IOException, ClassNotFoundException {

        List<UserScore> scoreList = new ArrayList<>();

//        File scoresFile = new File(FILE_NAME);
//        if (!scoresFile.exists() && !scoresFile.createNewFile()) {
//            System.out.println("Unable to create the scores file.");
//            throw new IOException("Unable to create the scores file.");
//        }
//        else {
//            System.out.println("File exists and has " + scoresFile.length() + " bytes.");
//        }

        try (FileInputStream fis = new FileInputStream(FILE_NAME);
             ObjectInputStream ois = new ObjectInputStream(fis)) {

            boolean isEndOfFile = false;
            while (!isEndOfFile) {
                try {
                    UserScore userScore = (UserScore) ois.readObject();
                    scoreList.add(userScore);
                }
                catch (EOFException e) {
                    isEndOfFile = true; // EOFException as it is expected when the file is empty.
                }
            }
        }
        catch (FileNotFoundException ex) {
            System.out.println("No such file " + FILE_NAME);
        }
        catch (IOException | ClassNotFoundException ex) {
            System.out.println("Error reading file " + FILE_NAME);
        }
        // Sort the scores in descending order
        Collections.sort(scoreList);
        return scoreList;
    }

    public synchronized void addScore(String name, int score) throws IOException, ClassNotFoundException {

        List<UserScore> scoreList = getTopScores();

        // TODO: is not working
//        Optional<UserScore> existingScore = scoreList.stream()
//                .filter(entry -> entry.getName().equals(name))
//                .findFirst();
//
//        if (existingScore.isPresent()) {
//            UserScore score1  = existingScore.get();
//            if (score1.getScore() > score) {
//                scoreList.remove(score);
//                scoreList.add(new UserScore(name, score));
//            }
//        } else {
//            scoreList.add(new UserScore(name, score));
//        }

        scoreList.removeIf(entry -> entry.getName().equals(name) && entry.getScore() >= score);
        scoreList.add(new UserScore(name, score));

        try (FileOutputStream fos = new FileOutputStream(FILE_NAME);
             ObjectOutputStream oos = new ObjectOutputStream(fos)) {
            for (UserScore userScore : scoreList) {
                oos.writeObject(userScore);
            }
            oos.flush();
            oos.close();
        }
        catch (FileNotFoundException ex) {
            System.out.println("No such file " + FILE_NAME);
        }
        catch (EOFException e) {
            // Ignore EOFException as it is expected when the file is empty.
        }
        catch (IOException e) {
            System.out.println("Error write to file " + FILE_NAME);
        }
    }
}


