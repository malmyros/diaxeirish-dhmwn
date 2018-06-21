# Docker

Εδώ μπορείτε να βρείτε μία λίστα από χρήσιμες εντολές για το Docker.
Πρώτα θα πρέπει να σιγουρευτείται ότι είστε στον root φάκελο όπου
υπάρχει και το `docker-compose.yml` αρχείο για να ξεκινήσετε ή να 
σταματήσετε τα containers.

1). Δείτε όλα τα containers και την κατάσταση στην οποία βρίσκονται

```
docker ps -a
```

```
CONTAINER ID        IMAGE                                                   COMMAND                  CREATED                  STATUS              PORTS                               NAMES
e6344b468ea5        com.diaxeirish-dhmwn/local-authorities:0.0.1-SNAPSHOT   "java -Djava.securit…"   Less than a second ago   Up 4 seconds        0.0.0.0:3007->3007/tcp              local-authorities
b6290f2e6836        diaxeirish-dhmwn_web-service                            "npm start"              Less than a second ago   Up 5 seconds        0.0.0.0:3006->3006/tcp              web-service
44e203f09089        registry                                                "/entrypoint.sh /etc…"   Less than a second ago   Up 4 seconds        0.0.0.0:5000->5000/tcp              registry
3812b9364e44        diaxeirish-dhmwn_local-authorities-db                   "docker-entrypoint.s…"   Less than a second ago   Up 5 seconds        0.0.0.0:5433->5432/tcp              local-authorities-db
9d73f283f32e        diaxeirish-dhmwn_jenkins                                "/sbin/tini -- /usr/…"   Less than a second ago   Up 5 seconds        0.0.0.0:8080->8080/tcp, 50000/tcp   jenkins

```

2). Ξεκινήστε όλα τα containers

```
docker-compose up
```

3). Σταματήστε όλα τα containers

```
docker-compose down
```

4). Ξεκινήστε ένα μόνο container από τα services του `docker-compose.yml`

```
docker-compose up -d {service-name}
```

5). Σταματήστε καί καταργήστε όλα τα containers

```
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
```

6). Ανοίχτε ένα shell σε ένα ενεργό container

```
docker exec -it {container_id} /bin/bash
```