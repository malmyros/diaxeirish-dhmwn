# Base image
FROM openjdk:8-jdk-alpine
MAINTAINER Michail Almyros <m.almyros@gmail.com>

RUN apk add --no-cache bash

ADD build/libs/local-authorities-0.0.1-SNAPSHOT.jar app.jar

RUN bash -c 'touch /app.jar'

ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]