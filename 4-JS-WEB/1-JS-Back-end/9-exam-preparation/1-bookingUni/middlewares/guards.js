function hasUser() {
    return (req, res, next) => {
        if (req.user) {
            next();
        } else {
            //TODO redirect to the path from the actual assignment
            res.redirect('auth/login');
        }
    }
}

function isGuest() {
    return (req, res, next) => {
        if (req.user) {
            //TODO redirect to the path from the actual assignment
            res.redirect('/');
        } else {
            next();
        }
    }
}

module.exports = {
    hasUser,
    isGuest
};