const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const bookRoutes = require('./routes/bookRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/librarycms')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('error in connection', err));

app.use('/api/books', bookRoutes);
app.use('/api/users', userRoutes);

app.listen(5000, () => {
  console.log('Server running...');
});