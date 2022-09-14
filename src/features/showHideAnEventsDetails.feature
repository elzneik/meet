Feature: SHOW/HIDE AN EVENT’S DETAILS

Scenario: An event element is collapsed by default
Given user enters the main page
When user has not yet chosen an event
Then show/hide an event`s detail

Scenario: User can expand an event to see its details
Given user was clicking on event details
When the user selects any collapsed event
Then after user has clicked on the event details button he can see its details

Scenario: User can collapse an event to hide its details
Given the user has openend an event
When the user clicks on the button to close the event
Then he lands on the main page that shows the filter option and collapsed events
