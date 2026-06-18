const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

// Local Connection String
mongoose.connect("mongodb://127.0.0.1:27017/taskmanager")
    .then(() => console.log("MongoDB Database Connected Successfully... 🎉"))
    .catch(err => console.error("Database connection failed:", err.message));

// Define Routes
app.use('/api/auth', require('./routes/auth'));

app.get('/', (req, res) => res.send('API Running Successfully...'));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));