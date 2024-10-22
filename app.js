const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const courseRoutes = require('./routes/courses');
const videoRoutes = require('./routes/videos');

const app = express();

app.use(express.json());

const connectDB = async () => {
    await mongoose.connect('mongodb://localhost:27017/CoursesDB')
};


app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/videos', videoRoutes);

app.listen(3000);
