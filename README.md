# Timetravel Project

> This project was development on Vue.js.

> This is a SPA application.

> The CWV metrics average are ~94.

## Before run the Timetravel Project you need...

> Check if you have nodeJS installed with node -v command

> If you don't have, please check this link https://nodejs.org/en/download/

## How to run Timetravel Project

``` bash
# clone this project on github: https://github.com/jessicacintra/timetravel

# enter to timetravel folder

# open the terminal on VScode or similars

# run this command to install all project dependencies
npm install

# run this command to open dev application and the application is going to be served at localhost:8080
npm run dev

# run this command to build de application
npm run build

# to see the application running with the build files:
1. Go to server folder - cd server
2. Copy index.html file and the dist folder from time-travel folder to public folder
3. Delete the build.js.map file from server/dist folder
4. Run npm start command to open the application with builded files
5. The application is going to be serve at localhost:8081
