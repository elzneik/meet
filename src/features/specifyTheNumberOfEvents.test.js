import React from 'react';
import App from '../App';
import NumberOfEvents from '../NumberOfEvents';
import { mount } from 'enzyme';

import { loadFeature, defineFeature } from 'jest-cucumber'; // build in functions

const feature = loadFeature('./src/features/specifiyTheNumberOfEvents.feature');

defineFeature(feature, test => { 
    test('When user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => { 
        
        given('app is not open', () => {         
        });
        let AppWrapper;
        when('User enters the main page', () => { 
            AppWrapper = mount(<App />);
        });
        then('User enters the main page 32 events will be shown', () => {
            AppWrapper.update();
            expect(AppWrapper.state("numberOfEvents")).toEqual(32);
        });
    });

    test('User can change the number of events they want to see', ({ given, when, then }) => { 
        let AppWrapper;
        given('main page is open', () => {  
            AppWrapper = mount(<App />);  
        });
        let NumberOfEventsWrapper;
        when('the user enters the number of events (e.g. 10)', () => { 
            AppWrapper.update();
            NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
            const eventObject = { target: { value: 10 }};
            NumberOfEventsWrapper.find(".render-number").simulate("change", eventObject);
        });
        then('number of events should be shown', () => {
            expect(AppWrapper.state("numberOfEvents")).toBe(10);
        });
    });
});