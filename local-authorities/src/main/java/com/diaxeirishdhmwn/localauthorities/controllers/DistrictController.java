package com.diaxeirishdhmwn.localauthorities.controllers;

import com.diaxeirishdhmwn.localauthorities.models.District;
import com.diaxeirishdhmwn.localauthorities.services.DistrictService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/districts")
public class DistrictController {

    @Autowired
    private DistrictService districtService;

    @GetMapping
    public Iterable<District> findAllDistricts() {
        return districtService.findAllDistricts();
    }

    @GetMapping("/{districtId}")
    public District findDistrictById(@PathVariable long districtId) {
        return districtService.findDistrictById(districtId);
    }
}