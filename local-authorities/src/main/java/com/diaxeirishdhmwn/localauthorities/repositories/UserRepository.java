package com.diaxeirishdhmwn.localauthorities.repositories;

import com.diaxeirishdhmwn.localauthorities.entities.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Long>
{
    User findByEmail(final String email);
}
