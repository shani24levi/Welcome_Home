const express = require('express');
const apartments = express.Router();
const passport = require('passport');
const vertify = passport.authenticate('jwt', { session: false });
const control = require('../controllers/Apartments')

apartments.get('/', vertify, (req, res) => {
    control.getCurrentApartment(req, res);
}
);

apartments.post('/upload', (req, res) => {
    if (req.files === null) {
        return res.status(400).json({ msg: 'No file uploaded' });
    }

    const file = req.files.file;

    file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
        if (err) {
            console.error(err);
            return res.status(500).send(err);
        }

        res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
    });
});

apartments.post('/', vertify, (req, res) => {
    control.craeteApartment(req, res);
});


apartments.put('/:apartmentId', vertify, (req, res) => {
    control.editeApartment2(req, res);
});


apartments.post('/invated/:apartmentId/:userId', vertify, (req, res) => {
    control.invated(req, res);
});


apartments.get('/comming/:apartmentId', vertify, (req, res) => {
    control.comming(req, res);
});

apartments.delete('/:apartmentId', (req, res) => {
    control.deleteApartment(req, res);
});

apartments.get('/all', (req, res) => {
    control.getAllApartments(req, res);
});

apartments.get('/:apartmentId', (req, res) => {
    control.getApartmentsById(req, res);
});

apartments.get('/user/:userId', (req, res) => {
    control.getApartmentByuser(req, res);
});

apartments.get('/user', vertify, (req, res) => {
    control.getApartmentByuserLogdIn(req, res);
});

apartments.post('/search', (req, res) => {
    control.search(req, res);
});

module.exports = apartments