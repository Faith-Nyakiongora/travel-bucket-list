# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Travel Bucket List

## Description

"Travel Bucket List" is a go-to application for wanderlust travelers seeking inspiration and organizing their dream destinations. The efficient use of advanced hooks and integration of a UI framework will elevate the user experience, while the use of Bootstrap grid and external API integration will make it a standout project for both developers and users. Whether users are planning their next vacation or daydreaming about future adventures, "Travel Bucket List" will be the perfect companion to explore the world from the comfort of their screens.

## Table of Contents

- [User Stories](#user-stories)
- [Tech Stack](#tech-stack)
- [Installation and Configuration Instructions]          (#installation-and-configuration-instructions)
- [Deployment](#deployment)
- [API Documentation](#api-documentation)
- [Ownership](#ownership)

### User Stories

- As a user, I want to explore a collection of dream destinations to add to my travel bucket list.
- As a user, I want to organize and prioritize my travel destinations in the bucket list.
- As a user, I want to see detailed information and images for each destination.
- As a user, I want to be inspired by beautiful images and descriptions of the destinations.
- As a user, I want to search for specific destinations in the bucket list.
- As a user, I want to mark a destination as visited and track my progress.
- As a user, I want to remove destinations from my bucket list.

### Tech Stack

"Travel Bucket List" is built using the following technologies:

- HTML
- CSS
- JavaScript
- Bootstrap (for UI framework)
- Local API (to store bucket list data)
- Public API (to fetch detailed destination information and images)

### Installation and Configuration Instructions

To run "Travel Bucket List" locally on your machine, follow these steps:

1. Clone the repository from GitHub:

```bash
git clone <repository-url>
cd travel-bucket-list
```

2. Install dependencies using npm:

```bash
npm install
```

3.Install JSON Server globally on your machine:
```bash
npm install -g json-server
```
4. Start the JSON Server:
```bash
json-server --watch db.json
```
This will start the JSON Server and provide a fake RESTful API

5. Start the development server:

```bash
npm start
```
The json-server will 
The app will be accessible at http://localhost:3001 in your web browser.



### Deployment

"Travel Bucket List" app is deployed on [Netlify](https://your-travel-bucket-list.netlify.app). You can access the live app and start exploring dream destinations from around the world.

To deploy the app on your own Netlify account, follow these steps:

1. Sign up for a Netlify account at [https://www.netlify.com](https://www.netlify.com) if you don't have one.

2. Install the Netlify CLI globally on your machine (if not already installed):

```bash
npm install -g netlify-cli
```
Build the app for production:
```bash
Copy code
npm run build
```
Deploy the app to Netlify:
```bash
Copy code
netlify deploy --prod
```
The Netlify CLI will guide you through the deployment process. Once the deployment is successful, you will receive a URL for your deployed app.

Now, your "Travel Bucket List" app is live and accessible to users from the provided URL. Any updates made to the master branch of your repository will trigger automatic deployments to Netlify, ensuring your app stays up-to-date with the latest changes.

### API Documentation

The "Travel Bucket List" app uses both a local API and a public API for fetching destination information and images.

##### Local API

The local API is built into the backend of the app and provides the following endpoints:

- `GET /bucketlist`: Get a list of all destinations in the bucket list.
- `POST /bucketlist`: Add a new destination to the bucket list.
- `PUT /bucketlist/:id`: Update the details of a specific destination in the bucket list.
- `DELETE /bucketlist/:id`: Remove a destination from the bucket list.

##### Data Structure

Each destination in the bucket list has the following structure:

```json
{
  "id": 1,
  "name": "Destination Name",
  "description": "Destination description...",
  "visited": false
}
```

#### Public API

The app also fetches detailed destination information and images from a public API. The public API provides the following endpoints:

- `GET /destinations`: Get a list of all destinations with detailed information.
- `GET /destinations/:id`: Get detailed information for a specific destination.

##### Data Structure

Each destination fetched from the public API has the following structure:

```json
{
  "id": 1,
  "name": "Destination Name",
  "description": "Detailed destination description...",
  "image_url": "https://example.com/image.jpg"
}
```

##### Usage

The app uses the public API to fetch destination details and images when a user views a specific destination in the bucket list. The data is then displayed to the user to provide more information about each destination.



## Ownership

"Travel Bucket List" is developed and maintained by [Your Name]. If you have any questions or suggestions related to the app, please feel free to reach out to me.

