import React from 'react';
import { render } from 'react-dom/cjs/react-dom.production.min';
import PropTypes from 'prop-types';

export class MovieCard extends React.Component {
   render() {
    const {movie, onMovieClick} = this.props;
   

    return (
      <Card>
      <Card.Img  variant="top" src={movie.ImagePath} />
      <Card.Body>
        <Card.Title onClick={() => onMovieClick(movie)}variant="link">{movie.Title}</Card.Title>
        <Card.Text>{movie.Description}</Card.Text>
        <Link to={`/movies/${movie._id}`}>
            <Button variant="link">Open</Button>
          </Link>
      </Card.Body>
      </Card>
    );
  }
}

MovieCard.PropTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Director: PropTypes.shape({
      Name: {},
      Bio: {},
      Birth: {}
    }),
    Genre: PropTypes.shape({
      Name: {},
      Description: {}
    }),
    ImagePath: PropTypes.string.isRequired,
   
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};


