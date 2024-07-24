package app.backend.service;

import app.backend.entity.Poll;
import app.backend.model.MusicGenre;
import app.backend.repository.PollRepository;
import app.backend.response.ResponseApiMessageEnum;
import app.backend.response.ResponseHandler;
import app.backend.utility.FormatUtilityClass;
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
            return ResponseHandler.responseBuilder(HttpStatus.OK, null, polls );
        } catch (Exception e) {
            return ResponseHandler.responseBuilder(HttpStatus.INTERNAL_SERVER_ERROR, ResponseApiMessageEnum.INTERNAL_SERVER_ERROR.getMessage(), null);
        }
    }

    public ResponseEntity<Object> createPoll(Poll newPoll) {
        try {
            // Validación campos requeridos
            if(newPoll.getEmail() == null || newPoll.getEmail().isEmpty() || newPoll.getMusicGenre() == null) {
                return ResponseHandler.responseBuilder(HttpStatus.BAD_REQUEST, ResponseApiMessageEnum.ERROR_POLL_REQUIRED_FIELDS.getMessage(), null);
            }

            // normalizamos campos
            String normalizedEmail = newPoll.getEmail().trim().toLowerCase();
            String normalizedMusicGenre = newPoll.getMusicGenre().toString().trim().toUpperCase();

            // Validación formato correo
            if(!FormatUtilityClass.isValidEmail(newPoll.getEmail())) {
                String invalidEmailMessage = String.format(ResponseApiMessageEnum.ERROR_FORMAT_EMAIL.getMessage(), newPoll.getEmail());
                return ResponseHandler.responseBuilder(HttpStatus.BAD_REQUEST, invalidEmailMessage, null);
            }

            // Actualizamos los campos con los valores normalizados
            newPoll.setEmail(normalizedEmail);
            newPoll.setMusicGenre(MusicGenre.valueOf(normalizedMusicGenre));

            // Se crea encuesta
            var savedPoll = pollRepository.save(newPoll);
            return ResponseHandler.responseBuilder(HttpStatus.CREATED, null, savedPoll );
        }
        // Manejo error correo registrado
        catch(DataIntegrityViolationException e) {
            return ResponseHandler.responseBuilder(HttpStatus.CONFLICT, ResponseApiMessageEnum.ERROR_CONFLICT_EMAIL.getMessage(), null);
        }
        catch (Exception e) {
            return ResponseHandler.responseBuilder(HttpStatus.INTERNAL_SERVER_ERROR, ResponseApiMessageEnum.INTERNAL_SERVER_ERROR.getMessage(), null);
        }
    }

}
