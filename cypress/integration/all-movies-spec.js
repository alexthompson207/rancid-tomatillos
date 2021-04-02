describe('All Movies View', () => {
  beforeEach(() => {
    cy.fixture('movie-video').then((testVideo) => {
      cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919/videos', testVideo)
    })
    cy.fixture('movie-info').then((testMovie) => {
      cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', testMovie)
    })
    cy.fixture('movies').then((testMovies) => {
      cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', testMovies)
    })
    cy.visit('http://localhost:3000');

  })

  it('should have a title', () => {
    cy.get('h1').contains('Rancid Tomatillos')
  });

  it('should have a loading message before movie posters display', () => {
    cy.get('h1').contains('Loading')
  });

  it('should not have a home button in the nav', () => {
    cy.get('.nav').contains('Home').should('not.exist')
  });

  it('should display a section containing all the movie posters', () => {
    cy.get('.movies-view a').should('have.length', '3')
  });

  it('should display a movies image, title, and rating', () => {
    cy.get('.movie-card').contains('Money Plane')
    cy.get('.movie-card').contains('49%')
    cy.get('.movie-card').children('img').should('have.class', 'movie-image')
  });

  it('should be able to click a movie poster and url will update', () => {
    cy.get('.movies-view a').first().click()
    cy.url().should('include', 'movies/694919')
  });

  it('should have a loading message after a movie is clicked', () => {

    cy.visit('http://localhost:3000/movies/694919').get('h1').contains('Loading')

  });
});

describe('All Movies View Client-Side Error', () => {
  beforeEach(() => {

    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 404
    })

    cy.visit('http://localhost:3000');
  })

  it('should display an error message when a data request is broken', () => {
    cy.get('.error-message').contains('Something went wrong, please refresh and try again.')
  });

  it('should contain an error image', () => {
    cy.get('img').should('have.class', 'error-icon')
  });
})

describe('All Movies View Errors Server-Side Error', () => {
  beforeEach(() => {

    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 500
    })

    cy.visit('http://localhost:3000');
  })

  it('should display an error message when a data request is broken', () => {
    cy.get('.error-message').contains('Something went wrong, please refresh and try again.')
  });

  it('should contain an error image', () => {
    cy.get('img').should('have.class', 'error-icon')
  });
})
