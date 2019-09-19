# Galactic Age Calculator

### This program calculates the age and life expectancy of the user on other planets based on their age and the average life expectancy of people on earth.

### There is no frontend. You will have to edit the source yourself if you want the tests to return anything different. 

# Directions

* First clone the repository using Git.
* Second, make sure nodejs is installed.

* Then use the dependencies for the program using npm install 

* Finally, run the tests using npm run test
###### *accuracy of predictions may vary.

# specs
## Listed from most simple to most complex

* accepts input to create Calc object
    
* calc object accurately returns user's expectancy based on average input by user. 

    * Example: user is 27, average is 75. Program returns 48.

* converts user expectancy based on planet's year length
    * User expectancy is 48. On Venus years are 224.7 days long, so the program would return the prediction that the user has 78 years left to live.


# Dependencies

    "babel-core": "^6.26.0",
    "babel-loader": "^7.1.3",
    "babel-preset-es2015": "^6.24.1",
    "clean-webpack-plugin": "^0.1.18",
    "css-loader": "^3.2.0",
    "eslint": "^4.18.2",
    "eslint-loader": "^2.0.0",
    "html-webpack-plugin": "^3.0.6",
    "jasmine": "^3.4.0",
    "jasmine-core": "^2.99.1",
    "karma": "^4.3.0",
    "karma-chrome-launcher": "^2.2.0",
    "karma-cli": "^2.0.0",
    "karma-firefox-launcher": "^1.2.0",
    "karma-jasmine": "^1.1.2",
    "karma-jasmine-html-reporter": "^0.2.2",
    "karma-jquery": "^0.2.4",
    "karma-sourcemap-loader": "^0.3.7",
    "karma-webpack": "^2.0.13",
    "style-loader": "^0.20.2",
    "uglifyjs-webpack-plugin": "^1.2.2",
    "webpack": "^4.40.2",
    "webpack-cli": "^3.3.9",
    "webpack-dev-server": "^3.8.1"