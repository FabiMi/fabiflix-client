import axios from 'axios';
import React, { useState } from 'react';
import  Form  from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { FormControl, FormLabel } from 'react-bootstrap';


export function LoginView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  //Hook for the inputs
   const [usernameErr, setUsernameErr] = useState('');
   const [passwordErr, setPasswordErr] = useState('');

    const validate = () => { let isReq = true; 
    if(!username){setUsernameErr('Username Required');
  isReq = false;}
else if (username.length < 2){
  setUsernameErr('Username must be 2 charcters long');
  isReq = false;
}
if(!password) {setPasswordErr('Password Required');
isReq = false;}
else if(password.length < 6) {
  setPassword('Password must be 6 Characters long');
  isReq = false;
}

return isReq;}

  const handleSubmit = (e) => {
    e.preventDefault();
    const isReq = validate();
    if (isReq) {
      axios.post('http://fabiflix.herokuapp.com/login', {
        Username: username,
        Password: password
      }) .then(response =>{
        const data = response.data;
        props.onLoggedIn(data);
      })
      .catch(e => {
        console.log('no such user')
      });
    }
  };

  return (
    <Form>
      <Form.Group controlId="formUsername">
        <Form.Label>Username:</Form.Label>
        <Form.Control type="text" onChange={e => setUsername(e.target.value)} />
      </Form.Group>

      <Form.Group controlId= "formPassword">
       <FormLabel> Password:</FormLabel>
       <FormControl type="password" onChange={e => setPassword(e.target.value)} />
      </Form.Group>
      <Button variant="primary"  type="submit" onClick={handleSubmit}>Submit</Button>
      <Button  variant="registrationView">Register</Button>
    </Form>
  );
}