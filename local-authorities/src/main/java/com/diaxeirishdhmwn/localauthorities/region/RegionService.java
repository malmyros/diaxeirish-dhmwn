package com.diaxeirishdhmwn.localauthorities.region;

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

    public Region findRegionById(long regionId) {
        return Optional.of(regionRepository.findById(regionId))
                .get()
                .orElseThrow(() -> new RegionNoFoundException("Region not found. ID: " + regionId));
    }
}
