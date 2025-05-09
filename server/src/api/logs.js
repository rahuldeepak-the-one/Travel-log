const { Router, json } = require('express');
const LogEntry = require('../models/LogEntry');
const logEntry = require('../models/LogEntry');

const router = Router();

router.get('/', async (req, res, next)=>{
    try {
        const entries = await logEntry.find();
        res.json(entries);
    } catch (error) {
        next(error);
    }

});

router.post('/', async (req, res, next) => {

    try {
        const logEntry = await LogEntry.create(req.body);
        res.json(logEntry);
    } catch (error) {
        console.log(error.name);
        if (error.name === 'validationError') {
            res.status(422);
        }
        next(error);
    }

});

module.exports = router;