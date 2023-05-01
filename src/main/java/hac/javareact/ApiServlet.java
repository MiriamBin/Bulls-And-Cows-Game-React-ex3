package hac.javareact;

import com.google.gson.Gson;
import java.io.*;
import java.util.List;
import javax.servlet.http.*;
import javax.servlet.annotation.*;

import static java.lang.System.out;

/**
 * This API endpoint (an endpoint is a function exposed by an API) receives score and name - saves them to a file
 * the server and returns the top 5 scores.
 */

@WebServlet(name = "ServletApi", value = "/api/highscores")
public class ApiServlet extends HttpServlet {
    private final FileManager fileManager = FileManager.getInstance();
    private String FILE_PATH;
    private static final String FILE_NAME = "scores.dat";


    /**
     * @param request The request from the client
     * @param response The response to the client
     * @throws IOException If an input or output exception occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("application/json");
        response.setHeader("Access-Control-Allow-Origin", "*");
        //String path = getServletContext().getRealPath(".");
        try {
            List<UserScore> topScores = fileManager.getTopScores(FILE_PATH);
            // Limit the list to the top 5 scores
            List<UserScore> top5Scores = topScores.subList(0, Math.min(topScores.size(), 5));
            // Serialize the top 5 scores to JSON using Gson
            Gson gson = new Gson();
            String json = gson.toJson(top5Scores);
            out.println(top5Scores); //TODO: remove
            response.setStatus(HttpServletResponse.SC_OK);
            response.getWriter().write(json);

        } catch (Exception e) {
            out.println(e.getMessage());
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            String json = new Gson().toJson(e.getMessage());
            response.getWriter().write(json);
        }
    }

    /**
     *
     * @param request The request from the client - contains the name and score of the user
     * @param response The response to the client - contains the top 5 scores
     * @throws IOException If an input or output exception occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        response.setHeader("Access-Control-Allow-Origin", "*");

        try {
            String name = request.getParameter("name");
            String scoreStr = request.getParameter("score");
            int score = Integer.parseInt(scoreStr);

            validateRequest(name, score);

            fileManager.addScore(name, score, FILE_PATH);

            doGet(request, response);

        } catch (Exception e) {
            System.out.println(e.getMessage());
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            String json = new Gson().toJson(e.getMessage());
            response.getWriter().write(json);
        }
    }

    /**
     * Validates the request
     * @param name The name of the user - must contain only letters
     * @param score The score of the user - must be a positive integer
     * @throws IOException If an input or output exception occurs
     */
    private void validateRequest(String name, int score) throws IOException {
        if(!validateName(name) || !validateScore(score)) {
            throw new IOException("Invalid name or score");
        }
    }

    private boolean validateName(String name) {
        return name.matches("[a-z A-Z]+");
    }
    private boolean validateScore(Object score) {
        if (!(score instanceof Number)) {
            // score is not a number
            return false;
        }
        double value = ((Number) score).doubleValue();
        // score is not a positive integer or is larger than MAX_INT
        return !(value <= 0) && !(value > Integer.MAX_VALUE) && value == Math.floor(value);
    }

    @Override
    public void init() {
        String PATH = getServletContext().getRealPath(".");
        FILE_PATH = PATH + File.separator + FILE_NAME;
    }

    @Override
    public void destroy() {
    }
}
