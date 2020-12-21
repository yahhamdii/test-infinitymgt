/* eslint-disable no-unused-expressions */
/* eslint-disable no-lone-blocks */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export const Login = () => {
  const history = useHistory();
  const successLogin = () => {
    localStorage.setItem('user', JSON.stringify(dataUser));
    history.push('/taches');
    window.location.reload(true);
  };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dataUser = {
    email: 'test@test.com',
    password: 'test',
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    {
      dataUser.email === email && dataUser.password === password
        ? successLogin()
        : setError('Veuillez vérifier email et mot de passe');
    }
  };
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Adresse e-mail
          <input
            name="email"
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          Mot de passe
          <input
            name="password"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <input className="btn" type="submit" value="Soumettre" />
        <p>{error}</p>
      </form>
    </div>
  );
};
