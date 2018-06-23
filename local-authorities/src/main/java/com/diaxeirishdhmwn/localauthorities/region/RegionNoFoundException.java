package com.diaxeirishdhmwn.localauthorities.region;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
class RegionNoFoundException extends RuntimeException {
    RegionNoFoundException(String message) {
        super(message);
    }
}
