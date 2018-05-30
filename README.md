# Jasmine-Test-FeedReader
- Build testing suites with Jasmine to check main functionalities of a FeedReader step-by-step (Project 5).
- Created for the Udacity __Front End Web Developer Nanodegree (Full Google Scholarship)__.

## Table of Contents:
* [Instructions](#instructions)
* [Installation](#installation)
* [Mockup](#mockup)
* [FeedReader Functionality](#functionality)
* [Requirements](#requirements)
* [Code Dependencies](#dependencies)
* [Contribution](#contribution)
* [Licence](#licence)
* [Acknowledgements](#acknowledgements)

## Instructions:
- Students are given the `RSS feedreader as Udacity startercode`,features included.
- __Goal__ is to __test the RSS feedreader with Jasmine "test-driven development"__ by modifying the Feedreader.js file. Testing is an important part of the development process, to make sure future feature development doesn't break existing features.

- The Feedreader consists of the following:
- 1) You can select 4 different feed sources in a menu. 
- 2) Each time a new source is selected, a new news feed is loaded.
- 2) hidden menu (by default).
- 3) The menu displays when click on menu icon with CSS/HTML class.

## Installation:
- __Clone__ this repository or __download__ it as a .zip file.
- Open the `index.html` file in the browser, to open the RSS reader.
- Check the test results on the page bottom.

## Mockup:
See [Jasmine FeedReader Test results](https://dianavile.github.io/Jasmine-Test-FeedReader/#).

## FeedReader Functionality: (Test suites and tests)
I have created 4 different __test suites__, with 8 separated Jasmine tests:
- 1: `RSS feeds` definition
- 2: `Menu` behaviour
- 3: `Initial Entries` loaded on the page
- 4: `New Feed selection` load asynchronously, once another source is selected. 

- 1) Testsuite 1 __`RSS Feeds`__checks, if:
- RSS sources `are defined`, 
- RSS `contain a valid URL`, 
- RSS have `a valid name` (not be empty or undefined)

- 2) Testsuite 2 __`The menu`__checks, if:
- The Menu `is hidden by default` 
- The Menu `change visibility if icon is clicked`. 
- The Menu is hidden, if the body has the 'menu-hidden' class.  
- The Menu displays if click on menu icon.
- Body's class is available at page load
- Body class is hidden en displayed if the icon is clicked.

- 3) Testsuite 3 __`Initial Entries`__ checks, if:
- First feed collection (`allFeeds`array) loads within feed container (in HTML). 
- Test starts _AFTER_ this content feed is loaded. 
- The `loadFeed` function is asynchronously called by the `beforeEach` function.
- Test store the feed elements in an array.
- Array elements need to contain at least 1 array element (>0).

- 4)Testsuite 3 __`New Feed Selection`__ checks, if: 
- The `newFeed` contents a user selects, loads within feed container (in HTML) to replace the `oldFeed`. 
- The content is asynchronously called by the `beforeEach` function to load correctly.
- Both `newFeed` and `oldFeed` contents are stored in a variable.
- Both variables are compared. If their content differ, the HTML content(= Feeds) will be different as well.

## Requirements:
The FeedReader testing need to fullfill the following code criteria [Project Rubric Link](https://review.udacity.com/#!/rubrics/18/view).

## Code Dependencies:
- This project is created based on the `Udacity starterscode` from the original [Udacity's Project](https://github.com/udacity/frontend-nanodegree-feedreader).

__Starterscode included:__
- [jQuery](https://jquery.com/)
- [Google Roboto Font](https://fonts.google.com/specimen/Roboto)
- [Icomoon](https://icomoon.io/)
- [Google's JavaScript Loader API](https://www.google.com/jsapi)
- [Handlebars](https://handlebarsjs.com/)

I used the following __Javascript Code resources:__
- [Jasmine](https://jasmine.github.io/)
- [VanillaJS](http://vanilla-js.com/)

## Contribution:
No pull requests are accepted.

## License:
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgements:
* Thanks to Udacity, fellow scholarships & coding friends. 
