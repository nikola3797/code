import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login/Login';
import Registration from './Registration/Registration';
import Home from './Home/Home';
import About from './About/About';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


class App extends Component {

  render() {
    return (
     <h1>Hello LinkGraph</h1>

    );
  }
}

export default App;
