import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
export class MovieView extends React.Component {

  render() {
    const { movie, onBackClick } = this.props;

    return (
      <Card style = {{width: "18rem"}}>
      <Card.Img variant="top" src={movie.ImagePath} />
        <Card.Body>
       <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>{movie.Description}</Card.Text>
          <Link to={`/directors/${movie.Director.Name}`}>
  <Button variant="link">Director</Button>
</Link>

<Link to={`/genres/${movie.Genre.Name}`}>
  <Button variant="link">Genre</Button>
</Link>
        </Card.Body>
      </Card>
    );
  }
}