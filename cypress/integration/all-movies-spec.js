describe('All Movies View', () => {
  beforeEach(() => {
    cy.fixture('movies').then((testMovies) => {
      cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', testMovies)
    })
    cy.visit('http://localhost:3000');
  })

  it('should have a title', () => {
    cy.get('h1').contains('Rancid Tomatillos')
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
  })
})