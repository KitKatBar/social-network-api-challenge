// Import Express.js
const express = require('express');
// Import database connection config
const db = require('./config/connection');
// Import the routers
const routes = require('./routes')

// Specify on which port the Express.js server will run
const PORT = process.env.PORT || 3001;
// Initialize our app variable by setting it to the value of express()
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Middleware to send all the requests to our routes folder
app.use(routes);

// Open a connection to the database, then turn on the server
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    });
});
