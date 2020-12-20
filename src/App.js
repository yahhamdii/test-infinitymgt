import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import { Login, Task } from "./components";
import Component from "./style/styles";

function App(props) {
  return (
    <Router>
      <div className={props.className}>
        <Header />
        <Route exact path="/" component={Login}></Route>
        <Route path="/taches" component={Task}></Route>
      </div>
    </Router>
  );
}

export default Component(App);
