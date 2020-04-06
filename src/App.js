import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Dataset from "./components/dataset"
import Homepage from "./components/homepage"

import data from "./data"; 

import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/dataset/:name" component={Dataset}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
