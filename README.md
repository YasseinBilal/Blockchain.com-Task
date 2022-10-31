## Available Scripts

In the project directory, you can run:

### `yarn install`

To install project dependencies

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:8081](http://localhost:8081) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn lint`

To lint application source code using ESLint

### `yarn test`

To run application tests

## User Experience (UX)

The app has 3 views as following:

### Pokemons list Page

- The app is opening on the pokemons list page.

- The page fetches the first 50 pokemons and render it for user

- Infinite scrolling is implemented to fetch more pokemons as user scroll the page

- The page handle different page states (Loading - Error - Data Loaded) with proper UI components.

- When user clicks on any pokemon from the list, App will open details page of that pokemon.

### Pokemon details Page

- The page fetches the pokemon details data and render it for the user.

- The page handle different page states (Loading - Error - Data Loaded) with proper UI components.

### Add Pokemon Page

- Click on the add new Pokemon button from top nav bar to open the Add pokemon page

- The page show a small form to enter the Pokemon name.

- User can't subimt the form if the name is not entered.

- when user enters name and click add pokemon, the app will respond with a mocked data since no endpoint is implemented for add new pokemon. and user will be redirected to home screen with a toastr showing a success message.

## Code Style and quality

- Typescript is used to define all the app types

- ESlint and Prettier are used to force a specific style rules

## Test Coverage

React testing library is used for testing (Pokemnons list page and Pokemon details page) of the app.

## Code Structure

The project structure is implemented around Domain Driven Design principles.
<br />

Benefits of that structure are:
<br />

- Promote strongly typed domains models to make imposible state imposible (https://www.youtube.com/watch?v=IcgmSRJHu_8).
- Enforce code & domain ownership.
- Simplify code discoverability to reduce code duplication.
  <br />

What is a domain? <br />

- 'Domain' is a TypeScript type that represents business domain. For example: Pokemon.
- Each domain contains all code that relative to the domain this includes api, components, hooks, features etc
- Sometimes we need to create a UI component that doesn't not belong to any specific type, in such case we put this component to ui-kit folder.

## General notes

- The Add new pokemon screen should have more pokemon fields but I kept it simple since I assume that focus should be on how to mock Backend endpoint in order to unblock frontend development in case backend endopoints are not ready.

- The Layout is quite simple using bootstrap for UI components. Giving the focus more on the functionality and code structure.

Thanks a lot :)
