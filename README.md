In the project directory, you can run:

### `mvn clean package`

Create jar
You can copy jar in any folder (INSTALL_DIRECTORY)

In INSTALL_DIRECTORY folder:  
1. Create config folder.
2. Create application.properties file and copy into config folder.
3. In application.properties file configure for h2 database:

    spring.datasource.driverClassName = org.h2.Driver
    spring.jpa.database=H2
    spring.datasource.url=jdbc:h2:mem:database_user;DB_CLOSE_ON_EXIT=FALSE
    spring.flyway.enabled=true
    spring.flyway.locations=filesystem:db/migration
4. Create folders db/migration and copy the Flyway migration scripts.
5. Execute jar file and open the url http://localhost:8080 in navigator.

### `java -jar store-0.0.1-SNAPSHOT.jar`
