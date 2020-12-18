const express = require('express');
const router = express.Router();
const controller = require('../controllers/companyController');

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/create', controller.add);
router.put('/update', controller.update);
router.delete('/delete', controller.deleteCompany);
router.get('/overview/:id', controller.getAllInfosById)

module.exports = router;