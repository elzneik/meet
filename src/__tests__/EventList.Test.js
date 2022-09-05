
import React from 'react';
import { shallow } from 'enzyme';
import EventList from '../EventList';
import Event from '../Event';

describe('<EventList /> component', () => {
  test('render correct number of events', () => {
    const EventListWrapper = shallow(<EventList events={[{}, {}, {}, {}]} />);
    expect(EventListWrapper.find(Event)).toHaveLength(4);
  });
});