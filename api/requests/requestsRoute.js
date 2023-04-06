const express = require('express');
const router = express.Router();
const passport = require('passport');
const { craeteRequst, deleteAllRequsts, deleteOneRequsts, getAllRequsts, getMyRequsts, getRequstsByApartment, getRequstsById, getRequstsByOwner, getRequstsByUserId, updetOneRequsts } = require('./requestsController');
const verify = passport.authenticate('jwt', { session: false });

router.route('/')
    .get(verify, getMyRequsts)
    .post(verify, craeteRequst)
    .delete(verify, deleteAllRequsts)

router.route('/:requestId')
    .delete(verify, deleteOneRequsts)
    .put(verify, updetOneRequsts)
    .get(verify, getRequstsById)

router.route('/all').get(getAllRequsts)
router.route('/user/:userId').get(getRequstsByUserId)
router.route('/apartment/:apartmntId').get(getRequstsByApartment)
router.route('/owner/:ownerId').get(verify, getRequstsByOwner)


module.exports = router