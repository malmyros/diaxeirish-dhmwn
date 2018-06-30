package com.diaxeirishdhmwn.localauthorities.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class RegionNoFoundException extends RuntimeException {
    public RegionNoFoundException(String message) {
        super(message);
    }
}
