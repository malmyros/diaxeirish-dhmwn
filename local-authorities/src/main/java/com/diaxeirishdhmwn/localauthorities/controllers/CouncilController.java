package com.diaxeirishdhmwn.localauthorities.controllers;

import com.diaxeirishdhmwn.localauthorities.models.Council;
import com.diaxeirishdhmwn.localauthorities.services.CouncilService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/councils")
public class CouncilController {

    @Autowired
    private CouncilService councilService;

    @GetMapping
    public Iterable<Council> findAllCouncils() {
        return councilService.findAllCouncils();
    }

    @GetMapping("/{council_id")
    public Council findCouncilById(@PathVariable long councilId) {
        return councilService.findCouncilById(councilId);
    }
}
