package com.diaxeirishdhmwn.localauthorities.controllers;

import com.diaxeirishdhmwn.localauthorities.models.Region;
import com.diaxeirishdhmwn.localauthorities.services.RegionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
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
