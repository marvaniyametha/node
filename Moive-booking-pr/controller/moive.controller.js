const path = require('path');
const moive = require('../model/moivemodel');
const fs = require('fs');

/* ================= VIEW ALL MOVIES ================= */
exports.viewAllMoive = async (req, res) => {
    try {
        let Moive = await moive.find();
        return res.render('index', { Moive });
    } catch (error) {
        console.log(error);
        return res.redirect('/');
    }
};

/* ================= ADD MOVIE PAGE ================= */
exports.addmoive = async (req, res) => {
    return res.render('add-moive');
};

/* ================= MOVIE PAGE ================= */
exports.moivepage = async (req, res) => {
    try {
        return res.render('moivepage');
    } catch (error) {
        console.log(error);
        return res.redirect('/');
    }
};

/* ================= TRENDING PAGE ================= */
exports.trending = async (req, res) => {
    try {
        return res.render('trending');
    } catch (error) {
        console.log(error);
        return res.redirect('/');
    }
};

/* ================= CONTACT PAGE ================= */
exports.contact = async (req, res) => {
    try {
        return res.render('contact');
    } catch (error) {
        console.log(error);
        return res.redirect('/');
    }
};

/* ================= CREATE MOVIE ================= */
exports.createMoive = async (req, res) => {
    try {
        let imagepath = "";

        if (req.file) {
            imagepath = `/uploads/${req.file.filename}`;
        }

        await moive.create({
            ...req.body,
            moiveImage: imagepath
        });

        return res.redirect('/');
    } catch (error) {
        console.log(error);
        return res.redirect('/');
    }
};

/* ================= EDIT MOVIE ================= */
exports.editmoivedata = async (req, res) => {
    try {
        let Moive = await moive.findById(req.params.id);
        return res.render('editmoive', { Moive });
    } catch (error) {
        console.log(error);
        return res.redirect('/');
    }
};

/* ================= UPDATE MOVIE ================= */
exports.updatemoivedata = async (req, res) => {
    try {
        let id = req.params.id;
        let Moive = await moive.findById(id);
        let filepath; // ✅ ONLY technical fix (logic same)

        if (req.file) {
            if (Moive.moiveImage != '') {
                let oldpath = path.join(__dirname, '..', Moive.moiveImage);
                try {
                    fs.unlinkSync(oldpath);
                } catch (error) {
                    console.log('file is missing');
                }
            }
            filepath = `/uploads/${req.file.filename}`;
        } else {
            filepath = Moive.moiveImage;
        }

        await moive.findByIdAndUpdate(
            Moive._id,
            { ...req.body, moiveImage: filepath },
            { new: true }
        );

        return res.redirect('/');
    } catch (error) {
        console.log(error);
        return res.redirect('/');
    }
};

/* ================= DELETE MOVIE ================= */
exports.deleteMoiveData = async (req, res) => {
    try {
        const id = req.params.id;
        const Moive = await moive.findById(id);

        if (!Moive) {
            console.log('Movie not found');
            return res.redirect('/');
        }

        if (Moive.moiveImage) {
            const filepath = path.join(__dirname, '..', Moive.moiveImage);

            if (fs.existsSync(filepath)) {
                fs.unlinkSync(filepath);
            } else {
                console.log('file is missing');
            }
        }

        await moive.findByIdAndDelete(id);
        return res.redirect('/');
    } catch (error) {
        console.log(error);
        return res.redirect('/');
    }
};
