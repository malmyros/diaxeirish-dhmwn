package com.diaxeirishdhmwn.localauthorities.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class DistrictNotFoundException extends RuntimeException {
    public DistrictNotFoundException(String message) {
        super(message);
    }
}
