package hac.javareact;
import java.io.Serializable;

/**
 * This class represents a user score.
 * It is used to save the user's name and score.
 * It implements the Comparable interface so that it can be compared to other UserScores.
 * It implements the Serializable interface so that it can be saved to a file.
 */
class UserScore implements Serializable, Comparable<UserScore>{
    /**
     * The serial version UID
     */
    private static final long serialVersionUID = 1L;
    /**
     * The name of the user
     */
    private String name;
    /**
     * The score of the user
     */
    private int score;

    /**
     * Default constructor for UserScore
     */
    public UserScore() {
    }

    /**
     * Constructor for UserScore
     * @param score The score of the user
     * @param name The name of the user
     */
    public UserScore(int score, String name) {
        this.name = name;
        this.score = score;
    }

    /**
     * @return The name of the user
     */
    public String getName() {
        return name;
    }

    /**
     * @return The score of the user
     */
    public int getScore() {
        return score;
    }

    /**
     * Sets the name of the user
     * @param score The name of the user
     */
    public void setScore(int score) { this.score = score; }

    /**
     * Sets the score of the user
     * @param other The score of the user to compare to
     */
    @Override
    public int compareTo(UserScore other) {
        return Integer.compare(this.score, other.score);
    }

    /**
     * Checks if this UserScore is equal to another object
     * @param other The object to compare to
     */
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
