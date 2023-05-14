const isLoggedIn = (req, res, next) => {
    req.session.currentUser ? next() : res.redirect('/logIn')
}
const isLoggedOut = (req, res, next) => {
    !req.session.currentUser ? next() : res.redirect('/')
}

module.exports = { isLoggedIn, isLoggedOut }