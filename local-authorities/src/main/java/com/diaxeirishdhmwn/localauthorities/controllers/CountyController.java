package com.diaxeirishdhmwn.localauthorities.controllers;

import com.diaxeirishdhmwn.localauthorities.models.County;
import com.diaxeirishdhmwn.localauthorities.services.CountyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/counties")
public class CountyController {

    @Autowired
    private CountyService countyService;

    @GetMapping
    public Iterable<County> findAllCounties() {
        return countyService.findAllCounties();
    }

    @GetMapping("/{county_id}")
    public County findCountyById(@PathVariable long councilId) {
        return countyService.findCountyById(councilId);
    }
}
