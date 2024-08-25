const express = require('express');
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// POST Endpoint
app.post('/bfhl', (req, res) => {
    const data = req.body.data;
    
    // Separate numbers and alphabets
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    
    // Find highest lowercase alphabet
    const lowercaseAlphabets = alphabets.filter(char => char === char.toLowerCase());
    const highestLowercaseAlphabet = lowercaseAlphabets.length ? [lowercaseAlphabets.sort().pop()] : [];
    
    // Response object
    res.json({
        is_success: true,
        user_id: "your_name_ddmmyyyy",
        email: "your_email@college.com",
        roll_number: "your_roll_number",
        numbers,
        alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet
    });
});

// GET Endpoint
app.get('/bfhl', (req, res) => {
    res.json({
        operation_code: 1
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
