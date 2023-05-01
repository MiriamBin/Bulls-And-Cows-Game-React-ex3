package hac.javareact;
import java.io.*;
import java.util.*;

/**
 * This class is responsible for reading and writing the scores to a file.
 * It is implemented as a singleton.
 * The file is saved in the server's file system.
 */
public class FileManager {

    /**
     * The instance of the singleton
     */
    private static FileManager instance;

    /**
     * Private constructor - to prevent instantiation from outside the class.
     */
    private FileManager() {
    }

    /**
     * @return The instance of the singleton
     */
    public static FileManager getInstance() {
        if (instance == null) {
            instance = new FileManager();
        }
        return instance;
    }

    /**
     * Reads the top 5 scores from the file.
     * @param path The path of the file
     * @return The top 5 scores
     */
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

    /**
     * Adds a new score to the file.
     * If the user already exists in the file, the score is updated only if it is lower than the existing score.
     * @param name The name of the user
     * @param score The score of the user
     * @param path The path of the file
     */
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