// routes/account.js
const express = require('express');
const router = express.Router();
const db = require('../models/db');
const accountController = require('../controller/account');
router.use(express.json());

router.post('/create-account', async (req, res) => {
  try {
    const result = await accountController.createAccount(db, req.body);
    if (result) {
      res.status(200).json({ message: "Successfully inserted" });
    } else {
      res.status(403).json({ error: "Account already exists" });
    }
  } catch (error) {
    console.error('Error creating account:', error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.put('/update-account/:id', async (req, res) => {
  try {
    req.body.id = parseInt(req.params.id);
    const result = await accountController.updateAccount(db, req.body);
    if (!result) {
      res.status(403).json({ message: 'Account does not exist' });
    } else {
      res.status(200).json({ message: 'Successfully updated' });
    }
  } catch (error) {
    console.error('Error updating account:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/list-accounts', async (req, res) => {
  try {
    const accounts = await accountController.listAccounts(db);
    res.status(200).json(accounts);
  } catch (error) {
    console.error('Error listing accounts:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.delete('/delete-account/:id', async (req, res) => {
  try {
    const result = await accountController.deleteAccount(db, req.params.id);
    if (!result) {
      res.status(403).json({ error: "Account does not exist" });
    } else {
      res.status(200).json({ message: 'Successfully deleted' });
    }
  } catch (error) {
    console.error('Error deleting account:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


module.exports = router;
