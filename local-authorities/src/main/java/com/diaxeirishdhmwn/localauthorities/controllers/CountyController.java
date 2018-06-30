package com.diaxeirishdhmwn.localauthorities.controllers;

import com.diaxeirishdhmwn.localauthorities.models.County;
import com.diaxeirishdhmwn.localauthorities.services.CountyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
    public County findCountyById(@PathVariable long county_id) {
        return countyService.findCountyById(county_id);
    }
}
