package hac.javareact;

import com.google.gson.Gson;
import java.io.*;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.http.*;
import javax.servlet.annotation.*;

import static java.lang.System.out;


@WebServlet(name = "ServletApi", value = "/api/highscores")
public class ApiServlet extends HttpServlet {
    private final FileManager fileManager = FileManager.getInstance();

    /**
     * @param request
     * @param response
     * @throws IOException
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("application/json");
        response.setHeader("Access-Control-Allow-Origin", "*");
        //String path = getServletContext().getRealPath(".");
        try {
            List<UserScore> topScores = fileManager.getTopScores();
            // Limit the list to the top 5 scores
            List<UserScore> top5Scores = topScores.subList(0, Math.min(topScores.size(), 5));
            // Serialize the top 5 scores to JSON using Gson
            Gson gson = new Gson();
            String json = gson.toJson(top5Scores);
            out.println(top5Scores); //TODO: remove
            response.setStatus(HttpServletResponse.SC_OK);
            response.getWriter().write(json);

        } catch (Exception e) {
            out.println(e.getMessage() + "43");
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            String json = new Gson().toJson(e.getMessage());
            response.getWriter().write(json);
        }
    }

    /**
     *
     * @param request The request from the client
     * @param response The response to the client
     * @throws IOException
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter out = response.getWriter();
        response.setContentType("application/json");
        String path = getServletContext().getRealPath(".");
        response.setCharacterEncoding("UTF-8");
        //out.println(path);
        response.setHeader("Access-Control-Allow-Origin", "*");

        try {
//          String name = request.getParameter("name"); //TODO: don't need this
//          int score = Integer.parseInt(request.getParameter("score"));  //TODO: don't need this
            BufferedReader reader = request.getReader();
            UserScore newUserScore = new Gson().fromJson(reader, UserScore.class);

            validateRequest(newUserScore.getName(), newUserScore.getScore());
            fileManager.addScore(newUserScore);
            doGet(request, response);

        } catch (Exception e) {
            System.out.println(e.getMessage() + "69");
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            String json = new Gson().toJson(e.getMessage());
            response.getWriter().write(json);
        }
    }
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
        if ( value <= 0 || Math.floor(value) != value || value > Integer.MAX_VALUE) {
            return false;
        }
        return true;
    }

    @Override
    public void init() {
    }

    @Override
    public void destroy() {
    }
}
