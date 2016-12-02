# Bring the Band
This is a website to help music venues bring bands to their venue. Members vote on bands that they would like to come to the venue.

## Live Site
 - http://bring-the-band-tiy.surge.sh/#/

## Build Tools with NPM scripts
  - JavaScript
  - React.js
  - Backbone.js
  - Underscore.js
  - SCSS (Sass)
  - Babeljs.io (compiler)
  - jQuery (ajax calls)

## APIs
  - [Spotify](https://developer.spotify.com/web-api/)
  - Backendless

## Cloud Backend
  [Backendless](https://backendless.com/) (MBaaS)
- Mobile backend as a service (MBaaS), also known as "backend as a service" (BaaS),is a model for providing web app and mobile app developers with a way to link their applications to backend cloud storage and APIs exposed by back end applications while also providing features such as user management, push notifications, and integration with social networking services.

## Testing
[Mocha.js](https://mochajs.org/)
  - Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases.

[Chai.js](http://chaijs.com/)
  - Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.

[Enzyme.js](http://airbnb.io/enzyme/docs/api/index.html)
  - Enzyme is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components' output. Enzyme's API is meant to be intuitive and flexible by mimicking jQuery's API for DOM manipulation and traversal.

## Features
  - **Searching**:
    - Search field queries Spotify's API for bands/artists
    - Results of the Spotify search are displayed as a list of bands.
    - User can click on individual band vote button for who they want to see
  - **Voting**:
    - If user votes on band, the vote is store and the band can no longer be voted for 
    - Keeping track of votes in a separate collection on Backendless
  - **Login/signup functionality**:
    - User is able to login and access voting features
    - Users can sign up, and are registered on the backend, via Backendless


## Installation
- Clone this repo (or fork then clone, if you prefer)
- Remove the git history by running `rm -rf .git`
- Set up a new git repo
- Run `npm install`
- if you get permission errors you may need to run `sudo npm install` to install a couple global dependencies
- Additional Installations:
  - `npm install --save velocity-react`

## Use
- `npm install` will scaffold your project AND start the dev server
- `npm start` will start the dev server and watch for changes
- `npm test` will run any test files included in the test folder
- `npm run deploy` will push the content of `dist/` to gh-pages
- When the server is running, your site will be live on [http://localhost:8080/](http://localhost:8080/)

## Dependencies
- `sass` [install guide here](http://sass-lang.com/install)
