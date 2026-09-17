const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse incoming JSON and URL-encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the current root folder
app.use(express.static('public'));

// A dedicated route to handle form submissions
app.post('/api/submit', (req, res) => {
    // Force terminal to output clearly
    console.log("\n--- New Form Submission Received ---");
    
    // Check if body is empty and print perfectly formatted JSON strings
    if (!req.body || Object.keys(req.body).length === 0) {
        console.log("⚠️ Warning: Received empty request body!");
        console.log("Check if your HTML inputs have 'name' attributes matching your data keys.");
    } else {
        // Prints beautifully formatted object directly to your local node console
        console.dir(req.body, { depth: null, colors: true });
    }
    
    console.log("-------------------------------------\n");

    // Send a success message back to whoever sent the request
    res.json({ success: true, message: "Data logged to console successfully!" });
});

// Serve your index.html file when visiting the home page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Start the server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Development server is running at http://localhost:${3000}`);
});
