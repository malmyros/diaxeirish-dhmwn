package com.diaxeirishdhmwn.localauthorities.repositories;

import com.diaxeirishdhmwn.localauthorities.entities.Region;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegionRepository extends CrudRepository<Region, Long> {
}
