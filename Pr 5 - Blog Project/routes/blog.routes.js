const express = require('express');
const { addblogpage, addblog, viewblogpage, deleteblog, editblog, updateblog, viewblog } = require('../controller/blog.controller');
const uploadImage = require('../middleware/uploadImage');


const routes = express.Router();


routes.get('/add-blog', addblogpage)
routes.post('/add-blog', uploadImage.fields([{ name: 'blogImage', maxCount: 1 }, { name: 'authorImage', maxCount: 1 }]), addblog);
routes.get('/view-blog', viewblogpage);
routes.get('/delete-blog/:id', uploadImage.fields([{ name: 'blogImage', maxCount: 1 }, { name: 'authorImage', maxCount: 1 }]), deleteblog);
routes.get('/edit-blog/:id', editblog);
routes.post('/update-blog/:id', uploadImage.fields([{ name: 'blogImage', maxCount: 1 }, { name: 'authorImage', maxCount: 1 }]), updateblog);
routes.get('/view-blog/:id', uploadImage.fields([{ name: 'blogImage', maxCount: 1 }, { name: 'authorImage', maxCount: 1 }]), viewblog);


module.exports = routes;