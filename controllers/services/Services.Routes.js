const express = require('express');
const router = express.Router();

const multer = require("multer");
const upload = multer();

const { addService, getAllServices, updateService, deleteService, getServiceById } = require('./Services.Controller.js');

const { uploadServiceImage } = require('../../config/multerConfig.js');
const { verifyTokenAdmin } = require('../../middleware/verifyToken.js');


router.post('/', uploadServiceImage, addService);

router.get('/', getAllServices)
router.get('/:id', getServiceById)

router.put('/:id', uploadServiceImage, updateService);

router.delete('/:id', deleteService)

module.exports = router;


