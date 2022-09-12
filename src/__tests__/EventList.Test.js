
import React from 'react';
import { shallow } from 'enzyme';

import { mockData } from '../mock-data';

import EventList from '../EventList';
import Event from '../Event';

    /* -------------------------------------------------------------------
            FEATURE 1: FILTER EVENTS BY CITY
    ---------------------------------------------------------------------*/

    /* ----------------- SCENARIO 1 --------------------------------------: 
    By default, when a user hasn’t searched for a city, show upcoming events 
    from all locations.
    ---------------------------------------------------------------------*/

describe('<EventList /> component', () => {
  test('render correct number of events', () => {
    const EventListWrapper = shallow(<EventList events={mockData} />);
    expect(EventListWrapper.find(Event)).toHaveLength(mockData.length);
  });
});