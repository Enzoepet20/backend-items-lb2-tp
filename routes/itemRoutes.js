const express = require('express');
const { getItems, createItem, updateItem, deleteItem } = require('../controllers/itemController');
const router = express.Router();

router.get('/items', getItems);
router.post('/items', createItem);
router.put('/items/:id', updateItem);
router.delete('/items/:id', deleteItem);

module.exports = router;
