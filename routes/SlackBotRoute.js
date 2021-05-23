const express = require('express');
const router = express.Router();
const SlackBotService = require('../services/SlackBotService');

router.post('/running', async function(req, res, next) {
    try {
        //Validate integer
        const value = req.body.text;
        if(! /^\d+$/.test(value)) { // not a digit
            res.send('Please enter integer value!');
            return;
        }
        // Get data from service
        res.json(await SlackBotService.running(req.body));
    } catch (err) {
        next(err);
    }
});

router.post('/leaderboard', async function(req, res, next) {
    try { 
        // Get data from service
        res.json(await SlackBotService.leaderBoard());
    } catch (err) {
        next(err);
    }
});

module.exports = router;