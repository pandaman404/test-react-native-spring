package app.backend.controller;

import app.backend.service.PollService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.HashMap;
import java.util.Map;

@WebMvcTest(PollController.class)
@AutoConfigureMockMvc
public class PollControllerTests {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @MockBean
    private PollService pollService;

    @Test
    public void testGetAllPolls() throws Exception {
        this.mockMvc.perform(
                MockMvcRequestBuilders.get("/api/v1/polls")
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON)
        ).andExpect(MockMvcResultMatchers.status().isOk());
    }

    @Test
    public void testCreatePollBadRequest() throws Exception {
        Map<String, Object> newPoll = new HashMap<>();
        newPoll.put("email", "test@test.com");
        newPoll.put("musicGenre", "invalid musicGenre");

        this.mockMvc.perform(
                MockMvcRequestBuilders.post("/api/v1/poll")
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(newPoll))
        ).andExpect(MockMvcResultMatchers.status().isBadRequest());
    }

}
