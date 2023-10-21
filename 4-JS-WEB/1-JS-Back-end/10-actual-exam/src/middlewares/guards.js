function hasUser() {
    return (req, res, next) => {
        if (req.user) {
            next();
        } else {
            res.redirect('/notfound'); 
        }
    }
}

function isGuest() {
    return (req, res, next) => {
        if (req.user) {
            res.redirect('/notfound'); 
        } else {
            next();
        }
    }
}

module.exports = {
    hasUser,
    isGuest
};