# GameStore

This project aims to recreate a 'game store' type site using Angular. I drew a lot of inspiration from the Steam site. In the site created you are able to select your favorite games, you can view details of each game and you can customize your search to find the games you want to find. 

The features from the project are detailed in the 'features' folder using Gherkin. Futhermore tests were created to properly ensure the features are working as intended. 

This project uses an API to get the data from the games listed on the page. The API documentations can be found in https://www.freetogame.com/api-doc.

# How to Run

Requisites to run the project!

0. Having both Node.js and Angular installed

1. In order to run the applications you should first run 'npm install' on the 'proxy' folder. After that, you should run 'node ./server.js' on the 'proxy' directory again. After that,  run 'ng serve' on another terminal. The app should then be available on http://localhost:4200

2. In order to run the tests you will need Selenium (pip install selenium should work) and the Chrome web browser 

3. To run the automated tests be sure to have Python installed ( you may call pyhton on the terminal as 'py' or 'python3' if any error occurs while running the tests you should try changing the the way python is called on 'package.json' in the line ""test-selenium": "py test-acceptance/home_tests.py""). After that, you can run the command 'npm run test-selenium'. The test are taking about 90 seconds to run and are performed in a random fashion.
