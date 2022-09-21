import React, { Component } from 'react';
import { ErrorAlert } from './Alert';
class NumberOfEvents extends Component {

    handleInputChanged = (event) => {
        if (event.target.value <= 0 || event.target.value > 32) {
            this.setState({
                renderNumber: event.target.value,
                errorText: 'Please enter a number between 1 and 32'
            })
        } else {
            this.props.updateEvents(undefined, event.target.value);
            this.setState({
                renderNumber: event.target.value,
                errorText: ''
            });
        }
    }

    constructor() {
        super();
        this.state = {
            renderNumber: 32,
            errorText: ''
        }
    }

    render() {
        const { renderNumber } = this.state;

        return (
            <div className="number-of-events">
                <p className="input-label">Number of Events:</p>
                <ErrorAlert text={this.state.errorText} />
                <input id="render-number" type="number" className="render-number" value={renderNumber} onChange={this.handleInputChanged}></input>
            </div>
        );
    }
}

export default NumberOfEvents;

/*
class NumberOfEvents extends Component {

    state = {
        numberOfEvents: 32,
    };

    handleInputChanged = (event) => {
    const value = event.target.value;
    this.props.updateEvents (null, value);
    this.setState({numberOfEvents: value});

    if ( value < 1) {
        this.setState({
            infoText: "Select number from 1 to 32",
        });
    } else {
        this.setState({
            infoText: " ",
        });
    }
}

render () {
  return (
    <div className="numberOfEvents">
        <label> Number of Events: </label>
        <input 
            type="text"
            id="numberOfEvents__input"
            value={numberOfEvents}
            onChange={this.handleInputChanged}
            />
        <ErrorAlert text={this.state.infoText} />
    </div>
    );
  }
}
*/