<h1 align="left">Rancid Tomatillos</h1>

<p align="center">
  <a href="https://rancid-tomas.herokuapp.com/">
    <img src="./src/images/tomato.svg" alt="Image of a Green Tomato" width="80" height="80">
  </a>
    <p align="center">
    <br />
    <a href="https://rancid-tomas.herokuapp.com/"><strong>Explore the app »</strong></a>
    <br />
    <br />
    </p>
  </p>

## Table of Contents

* [About the Project](#about-the-project)
* [Installation](#installation)
* [Functionality](#functionality)
* [Learning Goals](#learning-goals)
* [Future Iterations](#future-iterations)
* [Technologies Used](#technologies-used)
* [Contributors](#contributors)
* [Contact](#contact)


## About the Project

Rancid Tomatillos is a spin-off of Rotten Tomatos, which is an application where users can view rated movies, search for a movie title, and click on a specific movie to view more details.

View the deployed site: [here](https://rancid-tomas.herokuapp.com/)

## Installation

1. Fork this repository.
2. Clone it down to your local machine with `git clone <your SSH Key>`.
3. Navigate into this directory with `cd rotten-tomatillos`.
4. Run `npm install` to compile the React application.
5. Run `npm start` to see the app running locally.
6. Run `<your text editor> .` to see the code in your text editor.
7. Run `npm run cypress` to see open Cypress and see all the tests.


## Functionality
* [Landing Page](#landing-page)
* [Single Movie View](#single-movie-view)
* [Responsive Design](#responsive-design)
* [Accessibility](#accessibility)
* [Error Handling](#error-handling)
* [Loading Screen](#loading-screen)

#### Landing Page 
  - When a user lands on the landing page they will see a full list of avaialbe movies with a search bar at the top. They will have the ability to dynamically search all movies as well as clear their search and return to all movies. 

<img src="https://media.giphy.com/media/FBGhSeMGcMPDv5RUag/giphy.gif" width="1440">

#### Single Movie View
  - When a user finds the movie they would like to find more information on they can click the movie card and will be taken to a page that displays relevant information along with a trailer of the movie. When the user is finsihed they will be able to click the home button in the nav bar to return to all the movies. 

<img src="https://media.giphy.com/media/C217E2py4sqhu8g9lD/giphy.gif" width="1440">

#### Responsive Design
 - Responsiveness was a consideration while designing this application. Our application viewed from a mobile device:
 <img src="https://media.giphy.com/media/pFIrISQgq9zHZftLnU/giphy.gif" width="1440">

#### Accessibility 

We made accessibility a priority in our application. Rancid Tomatillos recieved a 97% acecessibility audit from Chrome's Lighthouse tool. Also using the Wave extension, our application has zero errors and contrast errors. 

#### Error Handling
To maintain a better user experience, we implemented dynamic error handling, so that a user will receive a unique error message based on the type of error.

#### Loading Screen
To create a more positive user experience, we implemented a loading message that will display while information is being retrieved from the API.

## Learning Goals

- Understand the fundamentals of React; class vs. function components, props, and Fetch requests
- Understand how to manage and update state
- Creating a controled form
- Create a multi-page UX using React Router
- Testing User Stories using `Cypress`

## Future Iterations

- The user would land on a login page which would give the the ability to have a profile and favorite movies that will be stored for later viewing. 
- Trending movies section that displayed the highest rated movies.
- Expand search functionality. Search by genre or filter by rating. 

## Technologies Used


- ![JavaScript](https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

- ![React](https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB)

- ![HTML5](https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white)

- ![CSS3](https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white)

- ![Webpack](https://img.shields.io/badge/webpack%20-%238DD6F9.svg?&style=for-the-badge&logo=webpack&logoColor=black)

- ![Mocha](https://img.shields.io/badge/-mocha-%238D6748?&style=for-the-badge&logo=mocha&logoColor=white)

- ![Cypress](https://img.shields.io/badge/cypress%20-%2317202C.svg?&style=for-the-badge&logo=cypress&logoColor=white)

## Contributers
* [Alex Thompson](https://github.com/alexthompson207) - Application Creator
* [Matt McVey](https://github.com/mattmcvey) - Application Creator


## Contact

[<img src="https://img.shields.io/badge/LinkedIn-alex--thompson-informational?style=for-the-badge&labelColor=black&logo=linkedin&logoColor=0077b5&&color=0077b5"/>][linkedin]
[<img src="https://img.shields.io/badge/Github-AlexThompson207-informational?style=for-the-badge&labelColor=black&logo=github&color=8B0BD5"/>][github]

[<img src="https://img.shields.io/badge/LinkedIn-matt--mcvey-informational?style=for-the-badge&labelColor=black&logo=linkedin&logoColor=0077b5&&color=0077b5"/>][linkedin2]
[<img src="https://img.shields.io/badge/Github-mattmcvey-informational?style=for-the-badge&labelColor=black&logo=github&color=8B0BD5"/>][github2]



<!-- Personal Definitions  -->

[linkedin]: https://www.linkedin.com/in/alex-thompson-he-him/
[github]: https://github.com/alexthompson207
[linkedin2]: https://www.linkedin.com/in/matt-mcvey-810a7256/
[github2]: https://github.com/mattmcvey
