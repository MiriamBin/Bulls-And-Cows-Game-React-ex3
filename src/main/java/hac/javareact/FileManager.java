package hac.javareact;
import java.io.*;
import java.util.*;
import java.io.*;
import java.util.*;

public class FileManager {
    private static final String FILE_NAME = "scores.dat";
    private static final FileManager instance = new FileManager();
    //private final String filePath;

    private FileManager() {
       // filePath = path;
    }

    public static FileManager getInstance() {
        return instance;
    }

    public synchronized List<UserScore> getTopScores() throws IOException, ClassNotFoundException {
        List<UserScore> scoreList = new ArrayList<>();
        File scoresFile = new File(FILE_NAME);
        if (!scoresFile.exists() && !scoresFile.createNewFile()) {
            System.out.println("Unable to create the scores file.");
            throw new IOException("Unable to create the scores file.");
        }

        try (FileInputStream fis = new FileInputStream(scoresFile);
             ObjectInputStream ois = new ObjectInputStream(fis)) {
            while (true) {
                try {
                    Object obj = ois.readObject();
                    if (obj instanceof UserScore) {
                        scoreList.add((UserScore) obj);
                    }
                } catch (EOFException e) {
                    // Break the loop when EOFException occurs
                    break;
                }
            }
        } catch (EOFException e) {
            // Ignore EOFException as it is expected when the file is empty.
        }

        Collections.sort(scoreList);
        return scoreList;
    }

    public synchronized void addScore(String name, int score) throws IOException, ClassNotFoundException {
        List<UserScore> scoreList = getTopScores();
        scoreList.removeIf(entry -> entry.getName().equals(name));
        scoreList.add(new UserScore(name, score));

        try (FileOutputStream fos = new FileOutputStream(FILE_NAME);
             ObjectOutputStream oos = new ObjectOutputStream(fos)) {
            oos.writeObject(scoreList);
        }
    }
}

