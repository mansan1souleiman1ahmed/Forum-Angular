# Forum-Angular

src =>https://material.angular.io/guide/theming
Forum-Angular-Websocket

1.Install
=> npm i --save @angular/material @angular/cdk @angular/anlimations

2 Import theme, In scss && html Material icon
=> @import '@angular/material/prebuilt-themes/indigo-pink.css
=> <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

3 Create a service for one user

4 Material user components => https://material.angular.io/components/categories
=> add to html (user)<mat-toolbar>

5 Create a special module for material(import all Mat mod and import and export needed modules : toolbar) && import that module in the global module.

6 Ng serve

7 Push

8 Create form in the service //user && import user from service.

9 Import service(form) inside .ts file then inside component html.

10 Import reactiveform in Am.ts
=> in html import form
=>.ts file import class from service store it in a private class called service
=> in html import formgroup and the form from service.form (from private class UserService)

11 Import mat-grid, ...-input,...tile => module in created Mat.

12 Import Browser animation in A.mod and and put it in import array

13 Git push

# Server-side

# ChatBox

## Authentification

Set up Express Server

Set up MongoDB

Create Restful Apis

- Register new user

- Login user

- Fetch regular events

- Fetch special events

Test using Postman

Angular app using Angular CLI

Authentification the angular application

1 => Create a folder for back-end called server

2 => Run in server :

npm init

npm install express body-parser --save

express for the web server & the body parser is middleware for the authentification

## Create a MLab

- used account => gto.gto.gto.1994.1@gmail.com

Mlab is where the database is deployed.

Documentation

https://docs.mongodb.com/manual/core/security-users/

https://docs.atlas.mongodb.com/security-vpc-peering/

https://docs.atlas.mongodb.com/getting-started/

https://www.mongodb.com/cloud/atlas/migrate?utm_source=atlas-landing&utm_campaign=20-docs-in-20-days-migrations&utm_medium=docs

https://docs.mongodb.com/compass/master/connect/

https://docs.mongodb.com/manual/reference/limits/

Use mongo compass to use to see your databadse => here it is called

angular-forum-auth, collection users.

## Mongoose

Whenever the user makes a request to the server (CREATE,GET, post, DELETE) the server needs to interact

with mongodb to perform the required operation and for this interaction we use mongoose.

Mongoose = a npm pacage that provides a mongodb object mapping. It translates the data in the database

to a javascrpit object for use in our application. (Alternative , Native MongoCLient, Mongojs)

npm install --save mongoose

A data or a document in MongoDB is represented as Javascript object. You will need to have a blueprint

or schema of that object.

In the server's folder create a folder model/users-model.js.

## Create a mongoose model that can be used to create upd del read data in the database

server/model/user

## Connect tot the database that has been created

All database request are going to be managed in the api route.

The database connection happens the api.js, server/routes/api.js.

## Registeration's API

In server/routes/api.

- You import the model, store it in a const, with post method you run a function that get the request, put that parse inside the model object, than save this

oject inside the database with method save.

## Install nodemon Optionnal

Each time you make changes it will automatically restart the server.

### Testing with Postman

It is a tools that allows backend dev without having to rely on an UI to send the data.

Download Postmann on ubuntu : http://ubuntuhandbook.org/index.php/2018/09/install-postman-app-easily-via-snap-in-ubuntu-18-04/ .
