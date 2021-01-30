# Getting Started

## Tech Requirements

* [Java 1.8 JDK](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html)
* [Maven](http://maven.apache.org/install.html)

## To start the application
* Move into service directory with `cd {Name of service}` ex: `cd service-registry`
* Run: `java -jar {Name of service}-0.0.1-SNAPSHOT.jar` ex: `java -jar service-registry-0.0.1-SNAPSHOT.jar`

**__Run Services In This Order__**
1. service-registry
2. cloud-config-server
3. cloud-gateway

After all are running successfully, run department-service and user-service.

You can also run the zipkin server to view the service logs by running `java -jar zipkin-server-2.23.2-exec.jar` from the main directory.

You can access both endpoints from port 9191. **Ex: http://localhost:9191/departments/1**

***

### Endpoints

_All endpoints stem from the base url of http://localhost:9191/_

POST departments/

Creates a new department object by taking in a JSON request body as formatted below.

Ex: 
```
{
    "departmentName": "REV-Micro",
    "departmentAddress": "120 Merica Ave",
    "departmentCode": "REV-001"
} 
```

GET departments/{id}

Retrieves department by finding the object whose id matches the {id} parameter. Example of response can be seen below.

```
{
    "departmentId": 1,
    "departmentName": "REV-Micro",
    "departmentAddress": "120 Merica Ave",
    "departmentCode": "REV-001"
}
```

POST users/

Creates a new user object by taking in a JSON request body as formatted below.

```
{
    "firstName": "Toby",
    "lastName": "Boudreaux",
    "email": "tobynboudreaux@gmail.com",
    "departmentId": "1"
}
```

GET users/{id}

Retrieves user object by finding the object whose id matches the {id} parameter. Also retrieves the department the user is in. Example of response can be seen below.

```
{
    "user": {
        "userId": 1,
        "firstName": "Toby",
        "lastName": "Boudreaux",
        "email": "tobynboudreaux@gmail.com",
        "departmentId": 1
    },
    "department": {
        "departmentId": 1,
        "departmentName": "REV-Micro",
        "departmentAddress": "120 Merica Ave",
        "departmentCode": "REV-001"
    }
}
```



