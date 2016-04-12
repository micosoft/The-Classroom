# GETTING STARTED
This is the way how the site was initiated

* Init the project with package.json file
```
npm init
```
* install node https://nodejs.org/en/download/package-manager/#osx

* include an .gitignore similar like https://github.com/github/gitignore/blob/master/Node.gitignore

* install the express framework to manage the application
```
npm install express --save
```
* install express generator to generate the project
```
sudo npm install express-generator -g
```
* Generate the project
```
express your-appname
```

* change to your-appname folder and requiriments
```
sudo npm install
```
* Finally run the site in debug model
```
DEBUG=The-Classroom:* npm start
```

## The-Classroom General Architecture
![alt general-arch](https://github.com/micosoft/The-Class-Draft/blob/master/The-Classroom%20General%20Architecture.png)
## The-Classroom Website Architecture
This is the whole picture for the Website Architecture
```
├── app.js
├── bin
│   └── www
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes
│   ├── index.js
│   └── users.js
└── views
    ├── error.jade
    ├── index.jade
    └── layout.jade
```
