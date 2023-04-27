package hac.javareact;
import java.io.Serializable;

public class UserScore implements Serializable {
    private static final long serialVersionUID = 1L;
    private int score;
    private int name;

    public UserScore(int score, int name) {
        this.score = score;
        this.name = name;
    }
    public int getScore() {
        return score;
    }
    public int getName() {
        return name;
    }
    public void setScore(int score) {
        this.score = score;
    }
    public void setName(int name) {
        this.name = name;
    }
}
