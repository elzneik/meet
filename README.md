# meet

A serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

## Features & Requirements

### Key Features
```
1. Filter events by city.
2. Show/hide event details.
3. Specify number of events.
4. Use the app when offline.
5. View a chart showing the number of upcoming events by city.
```

## User Stories

### Scenarios

### FEATURE 1: FILTER EVENTS BY CITY

As a **user**
I should be able to **"filter events by city"**
So that **user can see the list of events that take place in that city**

- **Scenario 1:** When user hasn’t searched for a city, show upcoming events from all cities.

  - **Given** user hasn't searched for any city
  - **When** the user opens the app
  - **Then** the user should see a list of all upcoming events

- **Scenario 2:** User should see a list of suggestions when they search for a city.

  - **Given** the main page is open
  - **When** user starts typing in the city textbox
  - **Then** the user should see a list of cities (suggestions) that match what they’ve typed

- **Scenario 3:** User can select a city from the suggested list.

  - **Given** the user was typing “Berlin” in the city textbox and the list of suggested cities is showing
  - **When** the user selects a city (e.g., “Berlin, Germany”) from the list
  - **Then** their city should be changed to that city (i.e., “Berlin, Germany”) and the user should receive a list of upcoming events in that city

### FEATURE 2: SHOW/HIDE AN EVENT’S DETAILS

As a **user**
I should be able to **show/hide event details**
So that **user can see more/less information about an event**

- **Scenario 1:** An event element is collapsed by default.

  - **Given** the user opens the app
  - **When** the user see a list of all upcoming events (with show details button)
  - **Then** the user should see a each list is collapsed by default

- **Scenario 2:** User can expand an event to see its details.

  - **Given** the user see an event element with show deatils button
  - **When** the user clicks on show details button
  - **Then** the user should see the expanded event element with hide details button

- **Scenario 3:** User can collapse an event to hide its details.

  - **Given** the users see a expanded event element with hide details button
  - **When** the user click on hide deatils button
  - **Then** the user should see the collaped event element with show details button

### FEATURE 3: SPECIFY NUMBER OF EVENTS

As a **user**
I should be able to **specify the number of events**
So that **user can see more or fewer events in the events list at once**

- **Scenario 1:** When user hasn’t specified a number, 32 is the default number.

  - **Given** the user did not specified a number of events being shown
  - **When** app loaded
  - **Then** the user should see a default number which is 32

- **Scenario 2:** User can change the number of events they want to see.

  - **Given** the list of elements has been loaded and the user did not specify a number of events he wants to see
  - **When** the user enters a number (for example 6) in the number of events input field
  - **Then** the user should see a 6 in the input field and user should only see a 6 events in the page

### FEATURE 4: USE THE APP WHEN OFFLINE

As a **user**
I should be able to **use the app when offline**
So that **user can see the events viewed the last time user was online**

- **Scenario 1:** Show cached data when there’s no internet connection.

  - **Given** the app has no internet connection
  - **When** the data is cached from the last time user was online
  - **Then** the user should see the events viewed the last time user was online

- **Scenario 2:** Show error when user changes the settings (city, time range).

  - **Given** the app is offline the user open the settings
  - **When** the user changes the settings (city, time range)
  - **Then** the user should see a error

### FEATURE 5: DATA VISUALIZATION

As a **user**
I should be able to **see a chart showing the upcoming events in each city**
So that **user know what events are organized in which city**

- **Scenario 1:** Show a chart with the number of upcoming events in each city.

  - **Given** the user selects a city after typing city name in the input field from the main page
  - **When** the user selects the city
  - **Then** the suer should see a chart showing the upcoming events in each city

# Getting Started

To get started with the meet App follow these steps.

## Prerequisites

Your system should have a NPM.

- npm

  `npm install npm@latest -g`

## Installation

Required installation to get started with the App, follow these steps.

Clone the repo

`git clone https://github.com/leevee6039/meet.git`

Install NPM packages

`npm install`

Start the app

`npm run start`

To push changes to github pages

`npm run deploy`

> Above steps if you get any error try to google

## Usage

1. As a user, I would like to be able to filter events by city so that I can see the list of events that take place in that city.
2. As a user, I would like to be able to show/hide event details so that I can see more/less information about an event.
3. As a user, I would like to be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.
4. As a user, I would like to be able to use the app when offline so that I can see the events I viewed the last time I was online.
5. As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.

