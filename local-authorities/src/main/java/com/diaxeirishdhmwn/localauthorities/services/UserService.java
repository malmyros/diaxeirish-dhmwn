package com.diaxeirishdhmwn.localauthorities.services;

import com.diaxeirishdhmwn.localauthorities.dtos.UserDto;
import com.diaxeirishdhmwn.localauthorities.entities.User;
import com.diaxeirishdhmwn.localauthorities.exceptions.UserAlreadyExistsException;
import com.diaxeirishdhmwn.localauthorities.exceptions.UserNotFoundException;
import com.diaxeirishdhmwn.localauthorities.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional(readOnly = true)
public class UserService
{
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public Iterable<User> findAllUsers()
    {
        return userRepository.findAll();
    }

    public User findUserById(Long userId)
    {
        return Optional.of(userRepository.findById(userId))
                .get()
                .orElseThrow(() -> new UserNotFoundException("Ο χρήστης δεν βρέθηκε. ID: " + userId));
    }

    @Transactional(propagation = Propagation.REQUIRED)
    public User createUser(UserDto userDto)
    {
        if (emailExist(userDto.getEmail()))
        {
            throw new UserAlreadyExistsException("Υπάρχει ήδη ένας λογαριασμός με αυτό το email");
        }

        final User newUser = new User();
        newUser.setFirstName(userDto.getFirstName());
        newUser.setLastName(userDto.getLastName());
        newUser.setEmail(userDto.getEmail());
        newUser.setPasswordHash(passwordEncoder.encode(userDto.getPassword()));

        return userRepository.save(newUser);
    }

    private boolean emailExist(final String email)
    {
        return userRepository.findByEmail(email) != null;
    }
}
