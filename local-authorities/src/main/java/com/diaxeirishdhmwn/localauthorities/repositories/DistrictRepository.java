package com.diaxeirishdhmwn.localauthorities.repositories;

import com.diaxeirishdhmwn.localauthorities.entities.District;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DistrictRepository extends CrudRepository<District, Long> {
}
