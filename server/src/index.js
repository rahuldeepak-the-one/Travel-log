const express = require('express'); // Import express library
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const mongoose = require('mongoose');
const middlewares = require('./middlewares');
const logs = require('./api/logs');

require('dotenv').config()

// console.log('12345678901234567890');
// console.log(process.env.DATABASE_URL);

mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch(error => {
        console.error('❌ MongoDB connection error:', error.message);
        process.exit(1);
    });

const app = express(); // Create express app
const port = process.env.PORT || 1337;

app.use(morgan('common'));
app.use(helmet());
app.use(cors({
    origin: 'https://localhost:3000'
}));

app.use(express.json()); // body parsing middleware

app.get('/', (req, res) => {
    res.json({
        message:'Hello World !!',
    });
});

app.use('/api/logs', logs);

app.use(middlewares.notFound);
app.use(middlewares.errHandler);

app.listen(port, () => {
    console.log(`listening on localhost on ${port} ....`);
});