import React from 'react';
import {MovieCard} from  './src/components/movie-card/movie-card.jsx';
import {MovieView} from  './src/components/movie-view/movie-view.jsx';

export class MainView extends React.Component {


    constructor(){
        super();
        this.state = {
          movies: [
            { _id: 1, Title: 'Inception', Description: 'desc1...', Genre:'blabla', Director:'John Doe', ImagePath: '...'},
            { _id: 2, Title: 'The Shawshank Redemption', Description: 'desc2...', Genre:'blabla', Director:'John Doe', ImagePath: '...'},
            { _id: 3, Title: 'Gladiator', Description: 'desc3...', Genre:'blabla', Director:'John Doe', ImagePath: '...'}
          ],
          selectedMovie: null
        };
    }    
    setSelectedMovie(newSelectedMovie) {
        this.setState({
          selectedMovie: newSelectedMovie
        });
      }
    
      

    render() {
        const { movies, selectedMovie } = this.state;
    
    
        if (movies.length === 0) return <div className="main-view">The list is empty!</div>;
    
        return (
          <div className="main-view">
            {selectedMovie
              ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
              : movies.map(movie => (
                <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }}/>
              ))
            }
          </div>
        );
      }
    
    }    
