import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {MovieCard} from  '../movie-card/movie-card.jsx';
import {MovieView} from  '../movie-view/movie-view.jsx';
import { LoginView } from '../login-view/login-view';
import { RegistrationView } from '../registration-view/registration-view';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



class MainView extends React.Component {

    constructor(){
        super();
        this.state = {
          user: null,
          movies: [],
          selectedMovie: null
        };
    }    

    

    // src/components/main-view/main-view.jsx
getMovies(token) {
  axios.get('https://fabiflix.herokuapp.com/movies', {
    headers: { Authorization: `Bearer ${token}`}
  })
  .then(response => {
    // Assign the result to the state
    this.setState({
      movies: response.data
    });
  })
  .catch(function (error) {
    console.log(error);
  });
}

    


    componentDidMount() {
      let accessToken = localStorage.getItem('token');
      if (accessToken !== null) {
        this.setState({
          user: localStorage.getItem('user')
        });
        this.getMovies(accessToken);
      }
    }

    setSelectedMovie(newSelectedMovie) {
        this.setState({
          selectedMovie: newSelectedMovie
        });
      }
      onLoggedIn(authData) {
        console.log(authData);
        this.setState({
          user: authData.user.Username
        });
      
        localStorage.setItem('token', authData.token);
        localStorage.setItem('user', authData.user.Username);
        this.getMovies(authData.token);
      }

    render() {
        const { user, movies, selectedMovie } = this.state;
    
          if (!user) {
            return (
              <Row><Col>
          <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
          </Col></Row>
            )
          } 
          
          if (movies.length === 0) return <div className="main-view" />;
    
        return (

      <Router>
        <Row className="main-view justify-content-md-center">
         <Route path="/movies/:title" render={({ match }) => {
  if (movies.length === 0) return <div className="main-view" />;
  return <Col md={8}>
    <MovieView director={movies.find(m => m.Director.Name === match.params.name).Director} />
  </Col>
         }}/>

         <Route path="/directors/:name" render={({ match }) => {
  if (movies.length === 0) return <div className="main-view" />;
  return <Col md={8}>
    <DirectorView director={movies.find(m => m.Director.Name === match.params.name).Director} />
  </Col>}
}

 />
//Probably different for me because i stored the Genres and Director in different libaries
<Route path="/genres/:name" render={({ match }) => {
  if (movies.length === 0) return <div className="main-view" />;
  return <Col md={8}>
    <GenreView genre={movies.find(m => m.Genre.Name === match.params.name).Genre} />
  </Col>}
}

 />
 

   </Row>   </Router>
    );
  }

    
    }
    
    export default MainView;
