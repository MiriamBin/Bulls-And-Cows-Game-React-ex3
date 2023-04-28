package hac.javareact;

import com.google.gson.Gson;

import java.io.*;

import java.util.List;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.http.*;
import javax.servlet.annotation.*;


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
            System.out.println("top5Scores" + top5Scores.get(0).getName());
            // Serialize the top 5 scores to JSON using Gson
            Gson gson = new Gson();
            String json = gson.toJson(top5Scores);

            response.setStatus(HttpServletResponse.SC_OK);
            response.getWriter().write(json);
        } catch (Exception e) {
            System.out.println(e.getMessage() + "43");
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            response.getWriter().write("Error: " + e.getMessage());
        }
    }

    /**
     *
     * @param request
     * @param response
     * @throws IOException
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/plain");
        String path = getServletContext().getRealPath(".");
        System.out.println(path);
        response.setHeader("Access-Control-Allow-Origin", "*");

        String name = request.getParameter("name");
        int score = Integer.parseInt(request.getParameter("score"));
        System.out.println(name);
        System.out.println(score);

        try {
            fileManager.addScore(name, score);
            response.setStatus(HttpServletResponse.SC_OK);
            response.getWriter().write("AAA");
            //doGet(request, response);
        } catch (Exception e) {
            System.out.println(e.getMessage() + "69");
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            response.getWriter().write("Error: " + e.getMessage() + "71");
        }
    }

    @Override
    public void init() {
    }

    @Override
    public void destroy() {
    }
}
