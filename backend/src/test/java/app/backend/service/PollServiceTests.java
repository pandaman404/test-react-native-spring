package app.backend.service;

import app.backend.entity.Poll;
import app.backend.model.MusicGenre;
import app.backend.repository.PollRepository;
import app.backend.response.ResponseApiMessageEnum;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import static org.mockito.Mockito.when;

public class PollServiceTests {

    @Mock
    private PollRepository pollRepository;

    @InjectMocks
    private PollService pollService;

    AutoCloseable autoCloseable;

    @BeforeEach
    public void setUp() {
        autoCloseable = MockitoAnnotations.openMocks(this);
    }

    @AfterEach
    public void tearDown() throws Exception {
        autoCloseable.close();
    }

    @Test
    public void testGetAllPolls() {
        List<Poll> mockPolls = new ArrayList<>();

        when(pollRepository.findAll()).thenReturn(mockPolls);
        ResponseEntity<Object> responseEntity = pollService.getAllPolls();

        Assertions.assertNotNull(responseEntity);
        Assertions.assertEquals(responseEntity.getStatusCode(), HttpStatus.OK);
    }

    @Test
    public void testCreatePollOk() {
        Poll mockPoll = new Poll( 1L, "test@test.com", MusicGenre.METAL, null, null);

        when(pollRepository.save(mockPoll)).thenReturn(mockPoll);
        ResponseEntity<Object> responseEntity = pollService.createPoll(mockPoll);

        Assertions.assertNotNull(responseEntity);
        Assertions.assertEquals(HttpStatus.CREATED, responseEntity.getStatusCode());

        Map<String, Object> responseBody = (Map<String, Object>) responseEntity.getBody();
        Assertions.assertEquals(mockPoll.getId(), ((Poll) responseBody.get("data")).getId());
    }

    @Test
    public void testCreatePollErrorDuplicatedEmail() {
        Poll mockPoll = new Poll( 1L, "test@test.com", MusicGenre.METAL, null, null);

        when(pollRepository.save(mockPoll)).thenThrow(new DataIntegrityViolationException("Unique constraint violation"));
        ResponseEntity<Object> responseEntity = pollService.createPoll(mockPoll);

        Assertions.assertNotNull(responseEntity);
        Assertions.assertEquals(HttpStatus.CONFLICT, responseEntity.getStatusCode());

        Map<String, Object> responseBody = (Map<String, Object>) responseEntity.getBody();
        Assertions.assertEquals(ResponseApiMessageEnum.ERROR_CONFLICT_EMAIL.getMessage(),  responseBody.get("message"));
    }
}
