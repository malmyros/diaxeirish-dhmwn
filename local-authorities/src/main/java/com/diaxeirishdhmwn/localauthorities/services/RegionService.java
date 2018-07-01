package com.diaxeirishdhmwn.localauthorities.services;

import com.diaxeirishdhmwn.localauthorities.exceptions.RegionNoFoundException;
import com.diaxeirishdhmwn.localauthorities.models.Region;
import com.diaxeirishdhmwn.localauthorities.repositories.RegionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional(readOnly = true)
public class RegionService {

    @Autowired
    private RegionRepository regionRepository;

    public Iterable<Region> findAllRegions() {
        return regionRepository.findAll();
    }

    public Region findRegionById(Long regionId) {
        return Optional.of(regionRepository.findById(regionId))
                .get()
                .orElseThrow(() -> new RegionNoFoundException("Region not found. ID: " + regionId));
    }
}
