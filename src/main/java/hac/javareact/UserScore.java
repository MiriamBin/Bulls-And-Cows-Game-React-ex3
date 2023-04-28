package hac.javareact;
import java.io.Serializable;

class UserScore implements Serializable, Comparable<UserScore>{
    private final String name;
    private int score;

    public UserScore(String name, int score) {
        this.name = name;
        this.score = score;
    }

    public String getName() {
        return name;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) { this.score = score; }

    @Override
    public int compareTo(UserScore other) {
        return Integer.compare(this.score, other.score);
    }
}
