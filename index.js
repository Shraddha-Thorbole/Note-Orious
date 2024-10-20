const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db'); // Import MongoDB connection
const notesRoutes = require('./routes/notes'); // Ensure this is correct

const app = express();
const PORT = process.env.PORT || 3000; // Default to 3000 if PORT is not set

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// Routes
app.use('/notes', notesRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running fine on port: ${PORT}`);
});
