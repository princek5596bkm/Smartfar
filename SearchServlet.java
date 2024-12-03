import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;

public class SearchServlet extends HttpServlet {
    
    // This method will be called when the user performs a search
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Retrieve search query from the request
        String query = request.getParameter("query");

        // If no query, default message
        String resultMessage = "Search results will appear here.";

        // In a real application, you could perform database search logic here
        if (query != null && !query.isEmpty()) {
            // For demonstration purposes, we simulate search results
            resultMessage = "Showing results for: " + query;
        }

        // Set the result as an attribute to pass to the JSP
        request.setAttribute("searchResults", resultMessage);

        // Forward the request to a JSP page to display the results
        RequestDispatcher dispatcher = request.getRequestDispatcher("/searchResults.jsp");
        dispatcher.forward(request, response);
    }
    
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }
}
