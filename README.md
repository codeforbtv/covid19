# covid19
COVID-19 inspired response efforts.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Description

You'll need [nodejs](https://nodejs.org/en/) on your machine.  

After cloning run `npm install` and your browser should open to the app.

Data is stored and read from Firebase using [react-firestore](https://www.npmjs.com/package/react-firestore).  
This library offers pre-built React components that wrap Firebase accessibility.  

## We left off...
Currently filtering different views of the data (e.g. health topics) is done by creating separate components for each subset of the data we want because `react-firebase` offers a `FirestoreCollection` component that has the ability to filter easily. Probably not the most efficient way to do this because now our components are tied to what the datafields are which makes developing tricky. Should revisit...

Possible options are:
- Create a more general component that can filter the firestore request it makes and takes the filter as a property/argument
- Create a more general component that always retrieves *all* the data, but then filters on the client-side while rendering using javascript

