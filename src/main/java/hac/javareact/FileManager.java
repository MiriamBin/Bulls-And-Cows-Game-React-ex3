package hac.javareact;
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

    public synchronized List<UserScore> getTopScores() {

        List<UserScore> scoreList = new ArrayList<>();

        try (FileInputStream fis = new FileInputStream(FILE_NAME);
             ObjectInputStream ois = new ObjectInputStream(fis)) {

            boolean isEndOfFile = false;
            while (!isEndOfFile) {
                try {
                    UserScore userScore = (UserScore) ois.readObject();
                    scoreList.add(0, userScore);
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

        return scoreList.subList(0, Math.min(scoreList.size(), 5));
    }

    public synchronized void addScore(UserScore newUserScore) {

        List<UserScore> scoreList = getTopScores();

        int index = scoreList.indexOf(newUserScore);
        if(index != -1) {
            UserScore userScoreToUpdate = scoreList.get(index);
            if (userScoreToUpdate.getScore() > newUserScore.getScore())
                userScoreToUpdate.setScore(newUserScore.getScore());
        } else {
            scoreList.add(newUserScore);
        }

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