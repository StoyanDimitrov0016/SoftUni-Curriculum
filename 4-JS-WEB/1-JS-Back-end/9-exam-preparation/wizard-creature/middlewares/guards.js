function hasUser() {
    return (req, res, next) => {
        if (req.user) {
            next();
        } else {
            res.redirect('/auth/login'); // TODO: Check assignment for correct redirect 
        }
    }
}

function isGuest() {
    return (req, res, next) => {
        if (req.user) {
            res.redirect('/'); // TODO: Check assignment for correct redirect 
        } else {
            next();
        }
    }
}

module.exports = {
    hasUser,
    isGuest
};