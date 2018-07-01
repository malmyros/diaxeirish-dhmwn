package com.diaxeirishdhmwn.localauthorities.controllers;

import com.diaxeirishdhmwn.localauthorities.models.County;
import com.diaxeirishdhmwn.localauthorities.services.CountyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/counties")
public class CountyController {

    @Autowired
    private CountyService countyService;

    @GetMapping
    public Iterable<County> findAllCounties() {
        return countyService.findAllCounties();
    }

    @GetMapping("/{countyId}")
    public County findCountyById(@PathVariable Long countyId) {
        return countyService.findCountyById(countyId);
    }
}
