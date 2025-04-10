const express = require('express');  // Import Express.js
const app = express();  // Create an Express app
const PORT = 3000;  // Define the port number

// Middleware to parse JSON requests
app.use(express.json());

// Home Route
app.get('/', (req, res) => {
    res.send('Welcome to the Home Page!');
});

// About Route
app.get('/about', (req, res) => {
    res.send('This is the About Page.');
});

// API Route Example
app.get('/api/data', (req, res) => {
    const sampleData = {
        message: "Hello from API!",
        status: "success"
    };
    res.json(sampleData);
});

// 404 Route (For unmatched paths)
app.use((req, res) => {
    res.status(404).send('404 - Page Not Found');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
