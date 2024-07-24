package app.backend.response;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.HashMap;
import java.util.Map;

public class ResponseHandler {

    public static ResponseEntity<Object> responseBuilder(
            HttpStatus status,
            String message,
            Object data
    ){
        Map<String, Object> response = new HashMap<>();

        response.put("code", status.value());
        if(message != null) response.put("message", message);
        if(data != null) response.put("data", data);

        return new ResponseEntity<>(response, status);
    }
}
