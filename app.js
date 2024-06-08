import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Profile from './components/Profile';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/profile/:name?" component={Profile} />
          <Route render={() => <h1>404: Page not found</h1>} />
        </Switch>
        <footer>2024</footer>
      </div>
    </Router>
  );
};

export default App;
