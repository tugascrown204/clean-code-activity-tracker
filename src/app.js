const express = require('express');
const mongoose = require('mongoose');
const activityRoutes = require('./routes/activity');
const userRoutes = require('./routes/user');

const app = express();
app.use(express.json());
app.use('/api/activities', activityRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/activitytracker', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    })
    .catch(err => console.error(err));
