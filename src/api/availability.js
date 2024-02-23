'use strict';

const Controller = require('../controller/Controller');
const express = require('express');
const router = express.Router();

/**
 * Handles all post requests to /availability, takes json object {person_id, from_date, to_date}
 * Takes apart the object into separate values that it sends to the controller
 * On successful registration send an ok status
 * @returns boolean value true with 201 status if call was successful. otherwise false with 500 status.
 */
router.post('/availability', async (req, res) => {
    const contr = await new Controller();
    try {
        const { person_id, from_date, to_date } = req.body;
        const result = await contr.setAvailability(person_id, from_date, to_date);
        res.status(201).send('Availability insertion successful');
        console.log("Inserted availability for user: "+ person_id);
        //return true;
    } catch (error) {
        console.error('Insertion error:', error);
        res.status(500).send('Inserting availability failed');
    }
});

module.exports = router;
