package hac.javareact;
import javax.servlet.ServletContext;
import java.io.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


public class FileManager {
    private static final String FILE_NAME = "scores.dat";
    private static FileManager instance;
    private Map<String, Integer> userScores = null;

    private FileManager() {
        userScores = new HashMap<>();
        //loadScores();
    }

    public static FileManager getInstance() {
        if (instance == null) {
            instance = new FileManager();
        }
        return instance;
    }

}
