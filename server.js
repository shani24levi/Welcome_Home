const express = require('express');
const fileUpload = require('express-fileupload');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
const morgan = require('morgan');

const dotenv = require('dotenv');
dotenv.config();
const app = express();

//Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(fileUpload());


//Connect to DB
const dbConnect = require('./config/dbConnect');
dbConnect();


// Passport middleware
app.use(passport.initialize());
require('./config/passport')(passport);

//Routs Middlewares
const Users = require('./api/users/usersRoutes');
const Apartments = require('./api/apartments/apartmentsRoute');
const Requests = require('./api/requests/requestsRoute');
const Posts = require('./api/posts/postsRoute');
const Profile = require('./api/profile/profileRoute');
app.use('/api/users', Users);
app.use('/api/profile', Profile);
app.use('/api/apartments', Apartments);
app.use('/api/requsts', Requests);
app.use('/api/posts', Posts);

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, './client', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
