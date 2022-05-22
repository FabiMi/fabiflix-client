import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { FormControl, FormLabel } from 'react-bootstrap';

export function registationView(props) {
  const [ Username, setUsername ] = useState('');
  const [ Email, setEmail ] = useState('');
  const [ Password, setPassword ] = useState('');
  const [ Fav_Movie, setFav_Movie] = useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Username, Password ,Email, Fav_Movie);
    props.onLoggedIn(Username);
  };

  return (
    <Form>
      <Form.Group controlId="formUsername">
      <Form.Label>Username:</Form.Label>
        <Form.Control type="text" onChange={e => setUsername(e.target.value)} />
        </Form.Group>

      <Form.Group controlId="formEmail">
      <Form.Label> Email:</Form.Label>
        <Form.Control type="email" value={Email} onChange={e => setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group controlId= "formPassword">
      <FormLabel> Password:</FormLabel>
      <FormControl type="password" onChange={e => setPassword(e.target.value)}/>
     </Form.Group>

     <Form.Group controlID="formFav_Movie">
      <Form.Label>FAv_Movie:</Form.Label>
        <Form.Control type="text" value={Fav_Movie} onChange={e => setFav_Movie(e.target.value)}/>
      </Form.Group>
      
      <Button variant="primary"  type="submit" onClick={handleSubmit}>Submit</Button>
    </Form>
  );
}
