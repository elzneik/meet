

import React from 'react';
import App from '../App';
import Event from '../Event';
import { mockData } from '../mock-data';
import { mount, shallow } from 'enzyme';

import { loadFeature, defineFeature } from 'jest-cucumber'; // build in functions

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => { 
    test('An event element is collapsed by default', ({ given, when, then }) => {
        let AppWrapper;
        given('user enters the main page', () => {
            AppWrapper = mount(<App />);
        });
        when('user has not yet chosen an event', () => { 
        });
        then('show/hide an event`s detail', () => {
            AppWrapper.update();
            let EventWrapper = AppWrapper.find(Event);
            EventWrapper.forEach((event) => expect(event.state("show")).toBe(false));
        });
    });

    test('User can expand an event to see its details', ({ given, when, then }) => { 
        let EventWrapper;
        given('user was clicking on event details', () => {
            EventWrapper = shallow(<Event event={mockData[0]} />);
            expect(EventWrapper.state("show")).toBe(false);
        });
        when('the user selects any collapsed event', () => { 
            EventWrapper.find(".details-btn").simulate("click");
        });
        then('after user has clicked on the event details button he can see its details', () => {
            expect(EventWrapper.state("show")).toBe(true);
        });
    });

    test('User can collapse an event to hide its details', ({ given, when, then }) => {
        let EventWrapper; 
        given('the user has openend an event', () => {  
            EventWrapper = shallow(<Event event={mockData[0]} />);
            EventWrapper.setState({show: true});
            expect(EventWrapper.state("show")).toBe(true);
        });
        when('the user clicks on the button to close the event', () => {
            EventWrapper.find(".details-btn").simulate("click");
        });
        then('he lands on the main page that shows the filter option and collapsed events', () => {
            expect(EventWrapper.state("show")).toEqual(false);
        });
    });
});


/*
 test('', ({ given, when, then }) => { 
        given('', () => {    
        });
        when('', () => { 
        });
        then('', () => {
        });
    });
*/