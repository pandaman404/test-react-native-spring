package app.backend.controller;

import app.backend.entity.Poll;
import app.backend.service.PollService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("api/v1")
@RestController
public class PollController {
    @Autowired
    private PollService pollService;

    @GetMapping(value = "/polls", produces = {"application/json"})
    public ResponseEntity<Object> getPolls() {
        return pollService.getAllPolls();
    }

    @PostMapping(value = "/poll", consumes = {"application/json"}, produces = {"application/json"})
    public ResponseEntity<Object> addPoll(@RequestBody Poll poll) {

        return pollService.createPoll(poll);
    }
}
