import React from 'react';
import { render } from 'react-dom/cjs/react-dom.production.min';

export class MovieCard extends React.Components {
   render() {
    const {movie, onMovieClick} = this.props;
   

    return (
      <Card>
      <Card.Img  variant="top" src={movie.ImagePath} />
      <Card.Body>
        <Card.Title onClick={() => onMovieClick(movie)}variant="link">{movie.Title}</Card.Title>
        <Card.Text>{movie.Description}</Card.Text>
        <Button onClick={() => onMovieClick(movie)} variant="link">Open</Button>
      </Card.Body>
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


