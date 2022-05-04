import React from 'react';
import { render } from 'react-dom/cjs/react-dom.production.min';

export class MovieCard extends React.Components {
   render() {
    const {movie, onMovieClick} = this.props;
    return <div className='movie-card' onClick={()=>{onMovieClick(movie);}}>{movie.Title}</div>

   /* if (movies.lentgh === 0) return <div className= "main-view">
        {movies.map(movie => <MovieCard key={movie._id} movie={movie} onMovieclick={newSelectedMovie => {this.setState({selectedMovie: newSelectedMovie});}} />)}
    </div>*/
}}

