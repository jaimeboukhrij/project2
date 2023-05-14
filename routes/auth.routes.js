const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const saltRounds = 10
const User = require('../models/User.model')
const { isLoggedOut } = require('../middlewares/route-guard')
const userApiHandler = require("../services/user-api.service")

router.get("/singUp", (req, res, next) => {
    res.render("auth/singUp")
})
router.post("/singUp", (req, res, next) => {
    // res.send(req.body)
    const data = {
        username,
        name,
        secondName,
        password,
        role,
        dni,
        email,
        phonenumber,
        cardModel,
        cardTuition,
        aptitudes
    } = req.body

    bcrypt
        .genSalt(saltRounds)
        .then(salt => bcrypt.hash(password, salt))
        .then(hashedPassword => {
            data.password = hashedPassword
            User.create(data)
        })
        .then(() => res.redirect('/'))
        .catch(err => next(err))
})

router.get(("/logIn"), (req, res, next) => {
    res.render("auth/logIn")
})

router.post(("/logIn"), (req, res, next) => {
    const { username, planePasword } = req.body
    if (username === "" || planePasword === "") {
        res.render('auth/logIn', { errorMessage: 'Los campos son obligatorios' })
        return
    }
    User
        .findOne({ username })
        .then(foundUser => {
            console.log(foundUser)

            if (!foundUser) {
                res.render('auth/logIn', { errorMessage: 'Usuario no reconocido' })
                return
            }

            if (!bcrypt.compareSync(planePasword, foundUser.password)) {
                res.render('auth/logIn', { errorMessage: 'Contraseña incorrecta' })
                return
            }

            req.session.currentUser = foundUser // login!
            res.redirect('/')
        })
})


router.get('/logOut', (req, res, next) => {
    req.session.destroy(() => res.redirect('/'))
})




module.exports = router