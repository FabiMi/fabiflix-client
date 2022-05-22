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
    
<<<<<<< Updated upstream

=======
    onLoggedIn(user) {
      console.log(authData);
      this.setState({
        user: authData.user.Username
      });

      localStorage.setItem('token', authData.token),
      localStorage.setItem('user', authData.user.Username);
      this.getMovies(authData.token);
    }
>>>>>>> Stashed changes

    render() {
        const { movies, selectedMovie } = this.state;
    
    
        if (movies.length === 0) return <div className="main-view" />
    
        return (
        <Container>
          <div className="main-view">
            {selectedMovie
              ?(
              <Row className="justify-content-md-center"> 
                <Col md={8}>
                  <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
                </Col>
              </Row>
              )
              
              : (
                <Row className="justify-content-md-center">
              {movies.map(movie => (
                <Col md={3}>
                <MovieCard key={movie._id} movie={movie} onMovieClick={(newSelectedMovie) => { this.setSelectedMovie(newSelectedMovie) }}/>
                </Col>
              )
              )
            }
            </Row>
              )
            }
          </div>
        </Container>
        );
      }
    
    }    
