package hac.javareact;

import java.io.*;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.http.*;
import javax.servlet.annotation.*;

/* You can delete this comment before submission - it's only here to help you get started.
Your servlet should be available at "/java_react_war/api/highscores"
assuming you don't modify the application's context path (/java_react_war).
on the client side, you can send request to the servlet using:
fetch("/java_react_war/api/highscores")
*/

@WebServlet(name = "ServletApi", value = "/api/highscores")
public class ApiServlet extends HttpServlet {
    /**
     *
     * @param request
     * @param response
     * @throws IOException
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {

        // your code here

        // note: this is necessary to allow cross-origin requests from the React frontend
        // response.setHeader("Access-Control-Allow-Origin", "*");

        // remove this line ! it's only for you to browse the template
        response.getWriter().println("You are not supposed to browse this page. It will be used for API calls.");
    }

    /**
     *
     * @param request
     * @param response
     * @throws IOException
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        String path = getServletContext().getRealPath(".");
        response.setHeader("Access-Control-Allow-Origin", "*");

        String name = request.getParameter("name");
        Integer score = Integer.parseInt(request.getParameter("score"));
        System.out.println(name);
        System.out.println(score);

       // add to file FileManagement.addToFile(name, score, path);

        // your code here

        // note: this is necessary to allow cross-origin requests from the React frontend
    }

    @Override
    public void init() {
    }

    @Override
    public void destroy() {
    }
}
