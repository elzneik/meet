import React from 'react';
import logo from './logo.svg';
import './App.css';
import EventList from './EventList';
// import CitySearch from './CitySearch';

function App() {
  return (
    <div className="App">
      <EventList />
    </div>
  );
}

export default App;

// Code Task 4.3
/*
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CitySearch />
        <EventList />
      </div>
    );
  }
}

export default App; */
// Delete logo in src folder
// Delete App.test.js
