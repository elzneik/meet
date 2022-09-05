import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
// import CitySearch from '../CitySearch';

// Describe function; new group "scope" '<App /> component'
describe('<App /> component', () => {
    test('render list of events', () => {
        const AppWrapper = shallow(<App />);
        expect(AppWrapper.find(EventList)).toHaveLength(1);
      });
});
/*

    let AppWrapper;
    beforeAll(() => {
        AppWrapper = shallow(<App />);
    });

    test('render list of events', () => {
        expect(AppWrapper.find(EventList)).toHaveLength(1);
    });

// Feature 1 - Scenario 2
    test('render CitySearch', () => {
        expect(AppWrapper.find(CitySearch)).toHaveLength(1);
    });
}); */