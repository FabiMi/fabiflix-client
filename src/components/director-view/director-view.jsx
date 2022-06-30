import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
export class DirectorView extends React.Component {

  render() {
    const { movie, onBackClick } = this.props;

    return (
      <Card style = {{width: "18rem"}}>
      <Card.Img variant="top" src={movie.ImagePath} />
        <Card.Body>
       <Card.Title>{movie.Director.Name}</Card.Title>
          <Card.Text>{movie.Director.Bio}</Card.Text>
          <Link to={`movie/${movie.Title}`}>
  <Button variant="link">Movie</Button>
</Link>

<Link to={`/genres/${movie.Genre.Name}`}>
  <Button variant="link">Genre</Button>
</Link>
        </Card.Body>
      </Card>
    );
  }
}