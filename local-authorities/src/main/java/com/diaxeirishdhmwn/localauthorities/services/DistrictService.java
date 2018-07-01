package com.diaxeirishdhmwn.localauthorities.services;

import com.diaxeirishdhmwn.localauthorities.exceptions.DistrictNotFoundException;
import com.diaxeirishdhmwn.localauthorities.models.District;
import com.diaxeirishdhmwn.localauthorities.repositories.DistrictRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional(readOnly = true)
public class DistrictService {

    @Autowired
    private DistrictRepository districtRepository;

    public Iterable<District> findAllDistricts() {
        return districtRepository.findAll();
    }

    public District findDistrictById(Long districtId) {
        return Optional.of(districtRepository.findById(districtId))
                .get()
                .orElseThrow(() -> new DistrictNotFoundException("District not found. Id: " + districtId));
    }
}
