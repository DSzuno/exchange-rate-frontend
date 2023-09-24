# Exchange rate frontend

## Functionalities
This application is an exchange rate web widget, which has a root component called `ExchangeRate`. 
This component creates a card. It has a header which shows the actual selected symbol. 
It shows the time it was last synced and the time it will sync next.
The card content has the search input and the list of rates to the symbols. 
The search input looks up the three letter symbols.
When clicking on one row of the list, a dialog window pops up where you can choose to change the base symbol. 
When you click agree the symbol on the header will change and the list will refresh.
Currently, this feature does not work properly because the free plan of the external API only allows EUR as the base symbol.

The project has a backend part that handles the API requests.

[Backend Project](https://github.com/DSzuno/exchange-rate-backend)

## Project stack

[React js](https://react.dev/)

[Material UI](https://mui.com/material-ui/)

## Environment variables

`BACKEND_API_BASE_PATH` that defines hte backend API url, default value `localhost:7500`

`UPDATE_FREQUNCY` which defines how often should the frontend poll the backend list rates API endpoint

## Install

### `npm install`

Copy the contents of the `.env.example` to `.env`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run lint`

Get eslint static linting result 

### `npm run format`

Format code with prettier
