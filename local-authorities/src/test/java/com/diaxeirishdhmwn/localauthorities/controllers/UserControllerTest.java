package com.diaxeirishdhmwn.localauthorities.controllers;

import io.restassured.RestAssured;
import io.restassured.response.Response;
import org.apache.commons.lang3.RandomStringUtils;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.HashMap;
import java.util.Map;

import static io.restassured.RestAssured.given;

@RunWith(SpringRunner.class)
@SpringBootTest
public class UserControllerTest
{
    private static final String ROOT_URI = "http://localhost:3007";

    @Test
    public void contextLoads()
    {
    }

    @Test
    public void findAllUsers()
    {
        Response response = RestAssured.get(ROOT_URI + "/users");

        Assert.assertEquals(HttpStatus.OK.value(), response.getStatusCode());
        Assert.assertNotNull(response.getBody());
    }

    @Test
    public void findUserById()
    {
        Response response = RestAssured.get(ROOT_URI + "/users/1");

        Assert.assertEquals(HttpStatus.OK.value(), response.getStatusCode());
        Assert.assertNotNull(response.getBody());
    }

    @Test
    public void createUser()
    {
        Map<String, String> requestParams = new HashMap<>();
        String randomUser = RandomStringUtils.random(10, true, true);
        requestParams.put("firstName", randomUser);
        requestParams.put("lastName", randomUser);
        requestParams.put("email", randomUser + "@gmail.com");
        requestParams.put("password", randomUser);

        given()
                .contentType("application/json")
                .body(requestParams)
                .when().post(ROOT_URI + "/users")
                .then()
                .statusCode(HttpStatus.OK.value());

    }
}