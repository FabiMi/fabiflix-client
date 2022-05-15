import React, { useState } from 'react';

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
    <form>
      <label>
        Username:
        <input type="text" value={Username} onChange={e => setUsername(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={Email} onChange={e => setEmail(e.target.value)} />
      </label>
      <label>
      Password:
        <input type="password" value={Password} onChange={e => setPassword(e.target.value)} />
      </label>
      <label>
      FAv_Movie:
        <input type="text" value={Fav_Movie} onChange={e => setFav_Movie(e.target.value)} />
      </label>
      <button type="submit" onClick={handleSubmit}>Register</button>
    </form>
  );
}