
import React, { Component } from 'react';

class CitySearch extends Component {

  state = {
    query: ' ',
  }

  render() {
    return (
      <div className='CitySearch'>
        <input
        type="text"
        className="city"
        value={this.state.query}
         />
      </div>
    );
  }
}

export default CitySearch;
