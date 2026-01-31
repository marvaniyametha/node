const express = require('express');
const { viewAllMoive, moivepage, trending,contact, createMoive, deleteMoiveData, addmoive, editmoivedata, updatemoivedata } = require('../controller/moive.controller');
const imageUpload = require('../middleware/imageupload');
const routes = express.Router();

routes.use('/uploads', express.static('uploads'))


routes.get('/', viewAllMoive);
routes.get('/add-moive', addmoive)
routes.get('/moivepage',moivepage)
routes.get('/trending',trending)
routes.get('/contact',contact)

routes.post('/create-movie', imageUpload.single('moiveImage'), createMoive)

routes.get('/edit-moive/:id', editmoivedata)
routes.post('/update-moive/:id', imageUpload.single('moiveImage'), updatemoivedata)

routes.get('/delete-moive/:id', deleteMoiveData)



module.exports = routes;