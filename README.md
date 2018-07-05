# ConcertConnect:
Made using React.js and Node.js, complete with basic testing of main components.
Node.js backend repo found here: [ConcertConnect Github](https://github.com/kttm-development/kttm-server)

## Table of Contents:
-Description
-Link to Deployed Version
-Screenshots
-Features
-Brief Overview of Components
-Instructions

### Description:
ConcertConnect is a web app created to help those who want to plan their entire concert experience.  The app allows users to look for concerts based on their interests and location while also allowing the user to find tickets to and places to stay around a specific concert of their choosing.  The user also has the ability to view YouTube videos of the main artist for a specific concert and to invite their friends with the click of a button.

CC is a password-protected site with certain protected endpoints so that user is able to keep track of his/her contacts and favorited concerts.  However, an unregistered user is still able to find concerts, tickets, and places to stay so that they can get a feel for the site as well.  If an unregistered user would like to add a favorite or invite their friends, they are prompted to login or signup.

### Link to Deployed Version:
[ConcertConnect](https://concertconnect-client.herokuapp.com/)
-Demo Account: username: demo password: demo123456

### Screenshots:

![cc-onboard](https://user-images.githubusercontent.com/35779012/42348718-1b25491e-8070-11e8-9c79-aeafb830e1b4.png)

![cc-loggedin](https://user-images.githubusercontent.com/35779012/42348719-1c3d1f52-8070-11e8-953c-a0be923e18a2.png)

![cc-concertsearch](https://user-images.githubusercontent.com/35779012/42348721-1d560ac0-8070-11e8-8f91-9b313dd66b11.png)

![cc-concertabout1](https://user-images.githubusercontent.com/35779012/42348723-1e59f0c6-8070-11e8-8313-0692753ccac7.png)

![cc-concertabout2](https://user-images.githubusercontent.com/35779012/42348735-24c2672c-8070-11e8-9aa0-b911d760760c.png)

![cc-contact](https://user-images.githubusercontent.com/35779012/42348736-25d4c6c8-8070-11e8-802c-7669069bf516.png)

### Features:
  -Lookup concerts based on genre and location
  -Specific Concerts:
    -View details
    -Find tickets
    -Find housing nearby
    -View YouTube videos of top billed artist
    -Invite contacts/friends via pre-populated email with concert specific details/links that is pre-addressed with all user contacts( BCC for privacy)
  -Add/Delete contacts
  -Add/Delete favorite concerts

### Brief Overview of Components:

#### Main Component: src/components/app.js

##### High Level Pages: src/components/Pages

#### Onboarding Components (Route='/'):
    -src/components/Onboarding

#### Registration Components (Route='/register'):
    -src/components/Registration

      ##### Actions:
        -src/actions/users.js

#### Login Components (Route='/login'):
    -src/components/Login

      ##### Actions:
        -src/actions/auth.js

      #### Reducers:
        -src/reducers/auth.js

#### Navigation Bar Components:
    -src/components/NavBar

      ##### Actions:
        -src/actions/side-drawer-actions.js

      #### Reducers:
        -src/reducers/side-drawer-reducer.js

#### Concert Search Page Components:
    -src/components/ConcertSearch

      ##### Actions:
        -src/actions/location-actions.js
        -src/actions/genre-actions.js
        -src/actions/show-concerts.js
        -src/actions/ticketmaster-actions.js

      #### Reducers:
        -src/reducers/location-reducer.js
        -src/reducers/genre-reducer.js
        -src/reducers/ticketmaster-reducer.js

#### Concert About Components (Specific Concert Page):
    -src/components/Pages/ConcertAboutPage

      ##### Actions:
        -src/actions/youtube-actions.js
        -src/actions/favorite-actions.js

      #### Reducers:
        -src/reducers/youtube-reducer.js
        -src/reducers/favorite-reducer.js

#### Account Page Components:
    -src/components/Account

      ##### Actions:
        -src/actions/contacts-actions.js
        -src/action/favorite-actions.js

      #### Reducers:
        -src/reducers/contacts-reducer.js
        -src/reducers/favorite-reducer.js

### Instructions:
    -[Clone Server Repo](https://github.com/kttm-development/kttm-server) and follow the README.md instructions
    -Clone/Open this repo
    -run "npm install"
    -**Double Check package.json for the following:**
             "dependencies": {
                "create-react-class": "^15.6.3",
                "dotenv": "^6.0.0",
                "enzyme": "^3.3.0",
                "enzyme-adapter-react-16": "^1.1.1",
                "formik": "^0.11.11",
                "jquery": "^3.3.1",
                "jwt-decode": "^2.2.0",
                "prop-types": "^15.6.2",
                "react": "^16.2.0",
                "react-dom": "^16.2.0",
                "react-google-maps": "^9.4.5",
                "react-meta-tags": "^0.4.1",
                "react-popup": "^0.9.3",
                "react-redux": "^5.0.4",
                "react-router-dom": "^4.1.1",
                "react-scrollable-anchor": "^0.6.1",
                "react-select": "^1.2.1",
                "react-spinners": "^0.3.2",
                "react-toastify": "^4.1.0",
                "reactjs-popup": "^1.1.1",
                "recompose": "^0.27.1",
                "redux": "^3.6.0",
                "redux-devtools-extension": "^2.13.2",
                "redux-form": "^7.3.0",
                "redux-thunk": "^2.2.0",
                "yup": "^0.25.1"
              },
              "scripts": {
                "start": "react-scripts start",
                "build": "react-scripts build",
                "test": "react-scripts test --env=jsdom",
                "eject": "react-scripts eject"
              }
            }
    -run "npm start" to start dev client (default: localhost:3000)
    
