const express = require('express');
const router = express.Router();
const BorrowRecord = require('../models/BorrowRecord');

// Get all borrow records
router.get('/', async (req, res) => {
  try {
    const records = await BorrowRecord.find().populate('user book');
    res.json(records);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new borrow record
router.post('/', async (req, res) => {
  try {
    const record = new BorrowRecord(req.body);
    const saved = await record.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
