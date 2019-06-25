import React, { Component } from 'react'; // This gives us access to all the methods available to us in react
import MovieCard from './card-components/MovieCard.js' // this gives us access to the movieCards
// we want to use to display information about each movie
import movieData from './data.js'
// this allows you to have access to the hash of movies in the
// data file './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {

    return movieData.map((movie, i) => <MovieCard key={i} title={movie.title} genres={movie.genres} poster={movie.poster} IMDBRating={movie.IMDBRating}/>);
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
