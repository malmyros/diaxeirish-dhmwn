package com.diaxeirishdhmwn.localauthorities.repositories;

import com.diaxeirishdhmwn.localauthorities.models.Council;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CouncilRepository extends CrudRepository<Council, Long> {
}
