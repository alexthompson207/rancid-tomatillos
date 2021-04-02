describe('Movies Info View', () => {
  beforeEach(() => {
    cy.fixture('movie-video').then((testVideo) => {
      cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919/videos', testVideo)
    })
    cy.fixture('movie-info').then((testMovie) => {
      cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', testMovie)
    })
    cy.visit('http://localhost:3000/movies/694919').wait(1000)
  })

  it('should have a nav bar that conatins a title and home button', () => {
    cy.get('.nav').contains('Rancid Tomatillos').next().contains('Home')
  })

  it('should be able to click the home button and have the url update', () => {
    cy.fixture('movies').then((testMovies) => {
      cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', testMovies)
    })
    cy.visit('http://localhost:3000/movies/694919').wait(1000)
    cy.get('button').click().url()
  })

  it('should have a movie title', () => {
    cy.get('h1').contains('Money Plane')
  })

  it('should have a movie info box', () => {
    cy.get('.movie-info').contains('Movie Info')
  })

  it('should have a movie info containing genre, release date, runtim, budget and revenue', () => {
    cy.get('.movie-info-list').contains('Genres')
    cy.get('.movie-info-list').contains('Release Date')
    cy.get('.movie-info-list').contains('Runtime')
    cy.get('.movie-info-list').contains('Budget')
    cy.get('.movie-info-list').contains('Revenue')
  })

  it('should have a rating', () => {
    cy.get('h3').contains('Rating: 61%')
  })

  it('should contain a description of the movie', () => {
    cy.get('p').contains("A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.")
  })

  it('should conatin a poster of the movie', () => {
    cy.get('img').should('have.class', 'backdrop-image')
  })

  it('should contain a trailer of the movie', () => {
    cy.get('iframe').should('have.class', 'trailer')
  })
})

describe('Trailer load error', () => {
  beforeEach(() => {
    cy.fixture('movie-info').then((testMovie) => {
      cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', testMovie)
    })
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919/videos', {
      statusCode: 500
    })
    cy.visit('http://localhost:3000/movies/694919').wait(1000)
  })

  it('should display error message', () => {
    cy.get('.error-box').contains('Opps! This video isn\'t working, please refresh and try again')
  })

  it('should contain an error image', () =>{
    cy.get('.error-box').children().first().should('have.class', 'error-trailer')
  })
})

describe('Movie info load error', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', {
      statusCode: 500
    })
    cy.visit('http://localhost:3000/movies/694919').wait(1000)
  })
  it('should display error message', () => {
    cy.get('.error-message').contains('Something went wrong, please refresh and try again.')
  })

  it('should contain an error image', () => {
    cy.get('img').should('have.class', 'error-icon')
  })
})
