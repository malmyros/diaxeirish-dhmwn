package com.diaxeirishdhmwn.localauthorities.services;

import com.diaxeirishdhmwn.localauthorities.exceptions.CountyNotFoundException;
import com.diaxeirishdhmwn.localauthorities.repositories.CountyRepository;
import com.diaxeirishdhmwn.localauthorities.entities.County;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional(readOnly = true)
public class CountyService {

    @Autowired
    private CountyRepository countyRepository;

    public Iterable<County> findAllCounties() {
        return countyRepository.findAll();
    }

    public County findCountyById(Long countyId) {
        return Optional.of(countyRepository.findById(countyId))
                .get()
                .orElseThrow(() -> new CountyNotFoundException("Ο Νομός δεν βρέθηκε. ID: " + countyId));
    }
}