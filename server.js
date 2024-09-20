const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/tasks');

const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json()); //To parse JSON bodies
// Middleware to use task routes
app.use('/tasks', taskRoutes);

//connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('mongoDB connection error: ',err));

//routes
app.get('/', (req, res) => {
    res.send('Hello MERN!');
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

