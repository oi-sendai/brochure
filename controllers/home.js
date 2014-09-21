var Category = require('../models/Category');
/**
 * GET /
 * Home page.
 */

exports.index = function(req, res) {
    Category.find(function(err, data) {
        if (err)
            res.send(err)
        res.render('home', {
            title: 'Home',
            categories:  data
        });
    });
};
