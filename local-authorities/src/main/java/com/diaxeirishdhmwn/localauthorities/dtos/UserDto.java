package com.diaxeirishdhmwn.localauthorities.dtos;

import com.diaxeirishdhmwn.localauthorities.validators.ValidEmail;
import lombok.Data;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
public class UserDto
{
    @NotNull
    @Size(min = 3)
    private String firstName;

    @NotNull
    @Size(min = 3)
    private String lastName;

    @ValidEmail
    @NotNull
    private String email;

    @NotNull
    private String password;

    public UserDto()
    {
    }

    public UserDto(
            @NotNull String firstName,
            @NotNull String lastName,
            @NotNull String email, @NotNull String password)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
}
