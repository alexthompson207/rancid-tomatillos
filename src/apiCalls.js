const getAllMovies = () => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => {
      if (!response.ok) {
        console.log(response)
        return response.error;
      }
      return response.json()
    })
}

const getMovieByID = (id) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => {
      if (!response.ok) {
        console.log(response)
        return response.error;
      }
      return response.json()
    })
}

const getTrailerByID = (id) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`)
    .then(response => {
      if (!response.ok) {
        console.log(response)
        return response.error;
      }
      return response.json()
    })
}

export { getAllMovies, getMovieByID, getTrailerByID }