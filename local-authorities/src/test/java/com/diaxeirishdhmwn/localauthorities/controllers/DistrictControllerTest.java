package com.diaxeirishdhmwn.localauthorities.controllers;

import io.restassured.RestAssured;
import io.restassured.response.Response;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class DistrictControllerTest {

    private static final String ROOT_URI = "http://localhost:3007";

    @Test
    public void contextLoads() {
    }

    @Test
    public void findAllDistricts() {

        Response response = RestAssured.get(ROOT_URI + "/districts");

        Assert.assertEquals(HttpStatus.OK.value(), response.getStatusCode());
        Assert.assertNotNull(response.getBody());
    }

    @Test
    public void findDistrictById() {

        Response response = RestAssured.get(ROOT_URI + "/districts/1");

        Assert.assertEquals(HttpStatus.OK.value(), response.getStatusCode());
        Assert.assertNotNull(response.getBody());
    }
}