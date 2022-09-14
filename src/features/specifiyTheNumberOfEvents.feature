Feature: SPECIFY NUMBER OF EVENTS

Scenario: When user hasn’t specified a number, 32 is the default number
Given app is not open
When User enters the main page
Then User enters the main page 32 events will be shown

Scenario: User can change the number of events they want to see
Given main page is open
When the user enters the number of events (e.g. 10)
Then number of events should be shown
