import './nprogress.css';
import React, { Component } from 'react';
import './App.css';

import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';

import { getEvents, extractLocations } from "./api";



class App extends Component {

  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    locationSelected: "all"
  }

  updateEvents = (location, eventCount) => {
    if (eventCount === undefined) {
        eventCount = this.state.numberOfEvents;
    } else (
      this.setState({numberOfEvents: eventCount})
    )
    if (location === undefined) {
        location = this.state.locationSelected;
    }
    getEvents().then((events) => {
      const locationEvents = (location === 'all') 
        ? events :
        events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents.slice(0, eventCount),
        numberOfEvents: eventCount,
        locationSelected: location,
      });
    });
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ 
          events: events.slice(0, this.state.numberOfEvents), 
          locations: extractLocations(events) 
        });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  render() {
    let { locations, numberOfEvents, events } = this.state;
    return (
      <div className="App">
        <CitySearch updateEvents={this.updateEvents} locations={locations} />
        <NumberOfEvents numberOfEvents={numberOfEvents} updateEvents={this.updateEvents} />
        <EventList events={this.state.events}/>
      </div>
    );
  }
}

/*
<CitySearch locations={this.state.locations}/>
<NumberOfEvents updateEvents={this.state.updateEvents}/>
*/

export default App;