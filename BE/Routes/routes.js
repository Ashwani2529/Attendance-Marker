const express = require('express');
const routes = express.Router();
const {
    createUser,markAttendance,getUser,resetAttendance,getAllUsers,createBulkUsers
} = require('../APIs');

//user signup
routes.route('/signup').post(createUser);
routes.route('/markAttendance').patch(markAttendance);
routes.route('/getUser/:uniqueID').get(getUser);
routes.route('/resetAttendance').patch(resetAttendance);
routes.route('/getAllUsers').get(getAllUsers);
routes.route('/createBulkUsers').post(createBulkUsers);

module.exports = routes;