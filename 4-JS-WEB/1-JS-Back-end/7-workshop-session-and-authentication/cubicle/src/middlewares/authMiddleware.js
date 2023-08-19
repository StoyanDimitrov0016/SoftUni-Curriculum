const jwt = require("../lib/jwt");
const { SECRET } = require("../config/config");


exports.auth = (req, res, next) => {
    const token = req.cookies['auth'];

    if (token) {
        try {
            const user = jwt.verify(token, SECRET);
            req.user = user;
            next();
        } catch (err) {
            res.clearCookie('auth');
            return res.redirect('/users/login');
        }
    } else {
        next();
    }
};