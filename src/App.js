import react from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Component from './style/styles';

function App(props) {
  return (
    <Router>
      <div className={props.className}>
   <Header />

      </div>
    </Router>
  );
}

export default Component(App);
