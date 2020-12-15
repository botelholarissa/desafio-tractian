const express = require('express');
const router = express.Router();
const controller = require('../controllers/assetsController');

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/create', controller.add);
router.put('/update', controller.update);
router.delete('/delete', controller.deleteAssets);

module.exports = router;