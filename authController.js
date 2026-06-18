const User = require('../models/User');

// Register User (Signup)
exports.registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        user = new User({ name, email, password });
        await user.save();

        res.status(201).json({ message: 'User registered successfully', userId: user._id });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Login User
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user || user.password !== password) {
            return res.status(400).json({ message: 'Invalid Credentials' });
        }

        res.json({ message: 'Login successful', username: user.name });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};