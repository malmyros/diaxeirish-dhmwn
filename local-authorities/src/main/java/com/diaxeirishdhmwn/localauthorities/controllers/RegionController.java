package com.diaxeirishdhmwn.localauthorities.controllers;

import com.diaxeirishdhmwn.localauthorities.entities.Region;
import com.diaxeirishdhmwn.localauthorities.services.RegionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
    public Region findRegionById(@PathVariable Long regionId) {
        return regionService.findRegionById(regionId);
    }
}
