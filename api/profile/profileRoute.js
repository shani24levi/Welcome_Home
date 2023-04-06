const express = require('express');
const router = express.Router();
const passport = require('passport');
const Profile = require('../models/Profile');
const { creatProfile, deleteProfile, getAll, getByHandle, getByUserId, getCurrentUser, myApartmentAdd, myReantalAdd, myReantalDelete, updeateProfile } = require('./profileController');
const verify = passport.authenticate('jwt', { session: false });

router.route('/')
  .get(verify, getCurrentUser)
  .post(verify, creatProfile)
  .put(verify, updeateProfile)
  .delete(verify, deleteProfile)

router.route('/all').get(getAll)
router.route('/handle/:handle').get(getByHandle)
router.route('/myRentals/add').post(verify, myReantalAdd)
router.route('/myRentals/:id').delete(verify, myReantalDelete)
router.route('/:id').get(getByUserId)


module.exports = router;
