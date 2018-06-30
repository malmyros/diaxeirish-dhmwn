package com.diaxeirishdhmwn.localauthorities.services;

import com.diaxeirishdhmwn.localauthorities.exceptions.CouncilNotFoundException;
import com.diaxeirishdhmwn.localauthorities.models.Council;
import com.diaxeirishdhmwn.localauthorities.repositories.CouncilRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional(readOnly = true)
public class CouncilService {

    @Autowired
    private CouncilRepository councilRepository;

    public Iterable<Council> findAllCouncils()
    {
        return councilRepository.findAll();
    }

    public Council findCouncilById(long councilId) {
        return Optional.of(councilRepository.findById(councilId))
                .get()
                .orElseThrow(() -> new CouncilNotFoundException("Council not found. ID: " + councilId));
    }
}
