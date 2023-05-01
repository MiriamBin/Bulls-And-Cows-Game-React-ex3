package hac.javareact;
import java.io.*;
import java.util.*;


public class FileManager {

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

    public synchronized List<UserScore> getTopScores(String path) {

        List<UserScore> scoreList = new ArrayList<>();

        try (FileInputStream fis = new FileInputStream(path);
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
            System.out.println("No such file" );
        }
        catch (IOException | ClassNotFoundException ex) {
            System.out.println("Error reading file");
        }
        // Sort the scores in descending order
        Collections.sort(scoreList);

        return scoreList.subList(0, Math.min(scoreList.size(), 5));
    }

    public synchronized void addScore(String name, int score, String path) {

        List<UserScore> scoreList = getTopScores(path);

        UserScore newUserScore =  new UserScore(score,name);
        int index = scoreList.indexOf(newUserScore);
        if(index != -1) {
            UserScore userScoreToUpdate = scoreList.get(index);
            if (userScoreToUpdate.getScore() > newUserScore.getScore())
                userScoreToUpdate.setScore(newUserScore.getScore());
        } else {
            scoreList.add(newUserScore);
        }

        try (FileOutputStream fos = new FileOutputStream(path);
             ObjectOutputStream oos = new ObjectOutputStream(fos)) {
            for (UserScore userScore : scoreList) {
                oos.writeObject(userScore);
            }
            oos.flush();
            oos.close();
        }
        catch (FileNotFoundException ex) {
            System.out.println("No such file");
        }
        catch (EOFException e) {
            // Ignore EOFException as it is expected when the file is empty.
        }
        catch (IOException e) {
            System.out.println("Error write to file" );
        }
    }
}