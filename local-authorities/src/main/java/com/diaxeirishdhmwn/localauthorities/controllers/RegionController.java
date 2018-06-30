package com.diaxeirishdhmwn.localauthorities.controllers;

import com.diaxeirishdhmwn.localauthorities.models.Region;
import com.diaxeirishdhmwn.localauthorities.services.RegionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/regions")
public class RegionController {

    @Autowired
    private RegionService regionService;

    @GetMapping
    public Iterable<Region> findAllRegions() {
        return regionService.findAllRegions();
    }

    @GetMapping("/{regionId}")
    public Region findRegionById(@PathVariable long regionId) {
        return regionService.findRegionById(regionId);
    }
}
