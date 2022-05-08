import React from 'react';
import axios from 'axios';
import {MovieCard} from  './src/components/movie-card/movie-card.jsx';
import {MovieView} from  './src/components/movie-view/movie-view.jsx';

export class MainView extends React.Component {

    constructor(){
        super();
        this.state = {
          movies: [],
          selectedMovie: null
        };
    }    

    componentDidMount(){
      axios.get('http://fabiflix.herokuapp.com/moviess')
      .then(response => { this.setState({movies: response.data}); })
    .catch(error => {console.log(error);
   });
    }

    setSelectedMovie(newSelectedMovie) {
        this.setState({
          selectedMovie: newSelectedMovie
        });
      }
    


    render() {
        const { movies, selectedMovie } = this.state;
    
    
        if (movies.length === 0) return <div className="main-view" />
    
        return (
          <div className="main-view">
            {selectedMovie
              ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
              : movies.map(movie => (
                <MovieCard key={movie._id} movie={movie} onMovieClick={(newSelectedMovie) => { this.setSelectedMovie(newSelectedMovie) }}/>
              ))
            }
          </div>
        );
      }
    
    }    
