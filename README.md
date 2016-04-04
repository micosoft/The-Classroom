# The-Classroom

This is the MEAN (Mongo, Express, Angular, Nodejs) Stack application use to manage teaching classes for online teachers and students.

Basically the app will consist in the following general sections

* A lading page to present the services:

  * help to create a professional english Resume + preparation for a english bussiness interview.
  * English bussiness classes
  * Regular English classes  
  * English classes for kids


* Booking-Scheduler page for student's users booking classes and teacher's scheduler open/close their time-week availability and Accept/Reject students booking classes.

* Sing Up / Login Page

## Project Directories
For a better management of the project administration we have choosen to split the The-Classroom into the next component projects:

* [The-Classroom](https://github.com/micosoft/The-Classroom) The web site code and configuration

* [The-Classroom.](https://github.com/micosoft/The-Class-Draft) The management project repository to share documents, requiriments about the site.

* [MEAN-Stack-DevEnv](https://github.com/micosoft/MEAN-Stack-DevEnv) The MEAN-Stack dockerized as development evironment.

## The-Classroom General Architecture
![alt general-arch](https://raw.githubusercontent.com/micosoft/The-Classroom/master/public/img/The-Classroom%20General%20Architecture.png)
## The-Classroom Website Architecture
This is the picture for the Website Architecture

* app
  * models/     # the models to handle CRUD
  * routes.js   # maps API operations with HTTP requests
* config
  * db.js       # db connection and other configurations
* node_modules  #created by npm install
* public # all frontend and angular stuff
  * css
  * js
    * controllers # angular controllers
    * services #  angular services
    * app.js # angular application
    * appRoutes.js # angular routes
  * img
  * libs # created by bower install
  * views
  * index.html
* .bowerrc # tells bower where to put files (public/libs)
* bower.json # tells bower which files we need
* package.json # tells npm which packages we need
* server.js # set up our node application
