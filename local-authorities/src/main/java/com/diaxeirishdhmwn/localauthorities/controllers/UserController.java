package com.diaxeirishdhmwn.localauthorities.controllers;

import com.diaxeirishdhmwn.localauthorities.dtos.UserDto;
import com.diaxeirishdhmwn.localauthorities.entities.User;
import com.diaxeirishdhmwn.localauthorities.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
public class UserController
{
    @Autowired
    private UserService userService;

    @GetMapping
    public Iterable<User> findAllUsers()
    {
        return userService.findAllUsers();
    }

    @GetMapping("/{userId}")
    public User findUserById(@PathVariable Long userId) {
        return userService.findUserById(userId);
    }

    @PostMapping
    public User createUser(@RequestBody UserDto userDto)
    {
        return userService.createUser(userDto);
    }
}
