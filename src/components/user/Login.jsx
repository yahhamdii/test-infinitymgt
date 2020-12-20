import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const Login = () => {
  const history = useHistory();
  const successLogin = () => {
    localStorage.setItem("user", JSON.stringify(dataUser));
    history.push("/taches");
    window.location.reload(true);
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dataUser = {
    email: "test@test.com",
    password: "test",
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    {
      dataUser.email === email && dataUser.password === password
        ? successLogin()
        : console.log("Veuillez vérifier email et mot de passe");
    }
  };
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <label> Adresse e-mail</label>
        <input
          name="email"
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label> Mot de passe</label>
        <input
          name="password"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input className="btn" type="submit" value="Soumettre" />
      </form>
    </div>
  );
};
