# PostgreSQL

Εδώ μπορείτε να βρείτε μία λίστα από χρήσιμες εντολές για την PostgreSQL.

1). Συνδεθείτε στην PostgreSQL

```
psql -U {username}
```

2). Δείτε όλες τις βάσης δεδομένων

```
\list
```

```
                                           List of databases
         Name         |      Owner      | Encoding |   Collate   |    Ctype    |   Access privileges   
----------------------+-----------------+----------+-------------+-------------+----------------------- 
 local_authorities_db | michail.almyros | UTF8     | en_US.UTF-8 | en_US.UTF-8 |  
```

3). Συνδεθείτε σε μια βάση δεδομένων

```
\connect local_authorities_db
```

4). Δείτε όλους τους πίνακες της βάσης δεδομένων

```
\dt
```

```
                 List of relations
 Schema |         Name          | Type  |  Owner   
--------+-----------------------+-------+----------
 public | databasechangelog     | table | postgres
 public | databasechangeloglock | table | postgres
(2 rows)

```

5). Συνδεθείτε σε μια βάση δεδομένων που τρέχει σε ένα docker container

```
docker ps -a
```

```
CONTAINER ID        IMAGE                                                   COMMAND                  CREATED                  STATUS              PORTS                               NAMES
3812b9364e44        diaxeirish-dhmwn_local-authorities-db                   "docker-entrypoint.s…"   Less than a second ago   Up 5 seconds        0.0.0.0:5433->5432/tcp              local-authorities-db
```

```
docker exec -it {container_id} /bin/bash
```

```
psql -U {username}
```