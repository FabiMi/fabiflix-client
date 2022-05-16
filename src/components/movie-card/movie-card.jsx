import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export class MovieCard extends React.Component {
  render() {
    const { movie, onMovieClick } = this.props;

    return (
      <Card>
      <Card.Img  variant="top" src={movie.ImagePath} />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>{movie.Description}</Card.Text>
        <Button onClick={() => onMovieClick(movie)} variant="link">Open</Button>
      </Card.Body>
      <div onClick={() => onMovieClick(movie)} className="movie-card">{movie.Title}</div>
      </Card>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Director: PropTypes.string.shape({
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

