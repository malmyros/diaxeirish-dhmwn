package com.diaxeirishdhmwn.localauthorities.controllers;

import com.diaxeirishdhmwn.localauthorities.entities.District;
import com.diaxeirishdhmwn.localauthorities.services.DistrictService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
    public District findDistrictById(@PathVariable Long districtId) {
        return districtService.findDistrictById(districtId);
    }
}
