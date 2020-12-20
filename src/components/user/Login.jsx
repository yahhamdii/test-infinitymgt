import React from 'react';

export const Login = () => (
  <div className="login">
      <form>
          <label> Adresse e-mail</label>
        <input
          name="email"
          type="text"
          placeholder="email"
        />
        <label> Mot de passe</label>
        <input
          name="password"
          type="password"
          placeholder="password"
        />
        <button className="btn" type="submit">Connexion</button>
      </form>
  </div>
);
