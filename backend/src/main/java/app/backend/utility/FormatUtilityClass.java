package app.backend.utility;

public class FormatUtilityClass {
    private FormatUtilityClass(){};

    private static final String emailRegex = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$";

    public static boolean isValidEmail(String email) {
        return email.matches(emailRegex);
    }
}
