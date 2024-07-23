package app.backend.service;

import app.backend.entity.Poll;
import app.backend.repository.PollRepository;
import app.backend.response.ResponseHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class PollService {

    @Autowired
    private PollRepository pollRepository;

    public ResponseEntity<Object> getAllPolls() {
        try {
            var polls = pollRepository.findAll();
            return ResponseHandler.responseBuilder(HttpStatus.OK, polls );
        } catch (Exception e) {
            return ResponseHandler.responseBuilder(HttpStatus.INTERNAL_SERVER_ERROR, "Ups! ha ocurrido un error inesperado.");
        }
    }

    public ResponseEntity<Object> createPoll(Poll newPoll) {
        try {
            // Validación campos requeridos
            if(newPoll.getEmail() == null || newPoll.getEmail().isEmpty() || newPoll.getMusicalGenre() == null) {
                return ResponseHandler.responseBuilder(HttpStatus.BAD_REQUEST, "Los campos 'email' y 'musicalGenre' son requeridos.");
            }

            // TODO: Validación formato correo

            // TODO: Validación enum estilo musical

            // Se crea encuesta
            var savedPoll = pollRepository.save(newPoll);
            return ResponseHandler.responseBuilder(HttpStatus.CREATED, savedPoll);
        }
        // Manejo error correo registrado
        catch(DataIntegrityViolationException e) {
            return ResponseHandler.responseBuilder(HttpStatus.CONFLICT, "El correo ya se encuentra registrado. Porfavor use otro diferente.");
        }
        catch (Exception e) {
            return ResponseHandler.responseBuilder(HttpStatus.INTERNAL_SERVER_ERROR, "Ups! ha ocurrido un error inesperado.");
        }
    }


}
