const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const saltRounds = 10
const User = require('../models/User.model')
const { isLoggedOut } = require('../middlewares/route-guard')
const userApiHandler = require("../services/user-api.service")












module.exports = router