# Just Tech News
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Description
An interactive tech blog website where users can view, create, comment, and vote on posts. Users that are logged in can use the full range of website features, and have access to a dashboard where they can even edit and delete their own posts. Non logged in users are able to view the main page, but must log in to interact with others.

## Built With
* MySQL
* JavaScript
* Node.js
* Express.js
* Sequelize
* dotenv
* Handlebars.js
* bcrypt

## Installation
If the application is going to be installed locally, MySQL must be installed and setup. With all the files downloaded, run 'npm install' to install all the required packages. In MySQL terminal, run 'source db/schema.sql' to setup the database, and optionally run 'npm run seed' in the bash terminal to populate sample seed data.
If the application is going to be accessed via Heroku, no installation is necessary, simply visit the link below.

## Usage
If the application is hosted locally, it can be started with 'npm start' and accessed on a web browser at http://localhost:3000/. Alternatively the app can be accessed on Heroku. Once the webpage is up and running, users can navigate to the "login" button to create an account. When the user is logged in they will be directed to their dashboard where they can create posts as well as edit and delete them.

![Application Screenshot](./assets/screenshot.jpg?raw=tru "Application Screenshot")

Heroku Link: https://thawing-hollows-45389.herokuapp.com/


## Credits
Made by Stefan Oddsson.

## License
Copyright &copy; 2022

Licensed under the Apache License, Version 2.0 (the "License"). You may obtain a copy of the License at

https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
