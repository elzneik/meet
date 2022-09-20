import './nprogress.css';
import React, { Component } from 'react';
import './App.css';

import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import EventGenre from "./EventGenre";

import { getEvents, extractLocations } from "./api";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

class App extends Component {

  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    locationSelected: "all"
  }

  getData = () => {
    const {locations, events} = this.state;
    const data = locations.map((location)=>{
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return {city, number};
    })
    return data;
  };

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

        <h1 className="headline"> Welcome to the Meet App </h1>
        <h3 className="subtitle"> Search for your city and see upcoming events </h3>

        <CitySearch 
          updateEvents={this.updateEvents} 
          locations={locations} />
        <NumberOfEvents 
          numberOfEvents={numberOfEvents} 
          updateEvents={this.updateEvents} />

        
        <h4>Events in each city</h4>
        <div className="data-vis-wrapper"> 
        <EventGenre events={events} />
        <ResponsiveContainer height={400} >
          
          <ScatterChart
            margin={{
              top: 20, right: 20, bottom: 20, left: 20,
            }}
          >
            <CartesianGrid />
            <XAxis type="category" dataKey="city" name="city"  />
            <YAxis type="number" dataKey="number" name="number of events"  />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter data={this.getData()} fill="#8884d8" />
          </ScatterChart> 
        </ResponsiveContainer>
        </div>
        <EventList 
          events={this.state.events}/>
      </div>
    );
  }
}

/*
<CitySearch locations={this.state.locations}/>
<NumberOfEvents updateEvents={this.state.updateEvents}/>
*/

export default App;