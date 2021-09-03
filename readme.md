# INSTRUCTIONS


### To run the app
- clone the repo
- create a file named `.env`
- it should have the following:

 `DBHOST`
 `DBPORT`
 `DBNAME`
 `DBUSER_NAME`
 `DBPASSWORD`
 `JWTSECRET`
  `HTTPSERVER_PORT`

- all the db credentials here should be for postgres
-  in the root folder `npm i` or `yarn install`
### App documentation
- swagger documentation is present at the route `/docs` as un unauthenticated route
- for using admin apis and to make a user admin the flag `isAdmin` should be turned on for a singed up user from the database

### TODO
- refresh tokens for jwt
- test cases for api's
