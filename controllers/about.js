/**
 * GET /
 * Home page.
 */

exports.index = function(req, res) {
      console.log(req.user);
  res.render('about', {
    title: 'About',
  });
};
