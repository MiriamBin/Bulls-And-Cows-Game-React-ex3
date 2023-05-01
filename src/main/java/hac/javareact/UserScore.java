package hac.javareact;
import java.io.Serializable;

class UserScore implements Serializable, Comparable<UserScore>{
    private final String name;
    private int score;

    public UserScore(int score, String name) {
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

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }

        if (!(other instanceof UserScore)) {
            return false;
        }

        UserScore otherScore = (UserScore) other;
        return this.name.equals(otherScore.name);
    }
}
