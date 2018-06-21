# Base image
FROM openjdk:8-jdk-alpine
MAINTAINER Michail Almyros <m.almyros@gmail.com>

VOLUME /tmp

# Make port 8080 available to the world outside this container
EXPOSE 3007

# Add the application's jar to the container
ADD local-authorities-0.0.1-SNAPSHOT.jar local-authorities.jar

# Run the jar file
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/local-authorities.jar"]