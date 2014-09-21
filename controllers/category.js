var Category = require('../models/Category');

/**
 * GET /rest/category
 * List all category by Id
 */
exports.create = function(req, res) {
    var category = new Category(); 
    category.name        = req.body.name;  
    category.description = req.body.description;
    category.save(function(err) {
        if (err)
            res.send(err);
        res.json(category);
    });
};
exports.readAll = function(req, res) {
    Category.find(function(err, categories) {
      if (err)
          res.send(err)
        
      res.json(categories); 
    });
};
exports.readOne = function(req, res) {
    Category.find(function(err, categories) {
      if (err)
          res.send(err)
        
      res.json(categories); 
    });
};
// exports.update = function(req, res) {
//     Category.find({
//         _id : req.params.id
//     }, function(err, category) {
//         if (err)
//             res.send(err);
//         res.json(category);
//     });
// };

exports.destroy = function(req, res) {
    console.log('destroy');
    Category.remove({
            _id : req.params.id
        }, function(err, category) {
            if (err)
                res.send(err);
    });
};