import React, { Component } from "react";


class Event extends Component {
  toggleDetails = () => {
      let string = this.state.show ? 'View details' : 'Hide details';
      this.setState({ buttonText: string, show: !this.state.show });
  }

  constructor() {
      super();
      this.state = {
          show: false,
          buttonText: 'View details'
      }
  }

  render() {
      const { event } = this.props;
      const { show, buttonText } = this.state;

      return (
          <div className="event">
              <h3 className="event-title">{event.summary}</h3>
              <div className="event-info">
                  <div className="event-info_location">{event.location}</div>
              </div>
              {show && <div className="event-details">{event.description}</div>}
              <button className="details-btn" onClick={this.toggleDetails}>{buttonText}</button>
          </div>
      );
  }
}
export default Event;
