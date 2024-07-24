package app.backend.response;

import com.fasterxml.jackson.databind.exc.InvalidFormatException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ErrorHandler {

    @ExceptionHandler(HttpMessageNotReadableException.class)
    public ResponseEntity<Object> handleValidationException(HttpMessageNotReadableException exception) {
        if (exception.getCause() instanceof InvalidFormatException) {
            InvalidFormatException ifx = (InvalidFormatException) exception.getCause();
            // Verificamos si es tipo enum
            if (ifx.getTargetType() != null && ifx.getTargetType().isEnum()) {
                return ResponseHandler.responseBuilder(HttpStatus.BAD_REQUEST, ResponseApiMessageEnum.ERROR_MALFORMED_REQUEST.getMessage(), null);
            }
        }
        return ResponseHandler.responseBuilder(HttpStatus.BAD_REQUEST, ResponseApiMessageEnum.ERROR_MALFORMED_REQUEST.getMessage(), null);
    }
}