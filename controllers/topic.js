var Topic = require('../models/Topic');

/**
 * GET /rest/topic
 * List all topic by Id
 */
exports.postCreate = function(req, res) {
    var topic = new Topic(); 
    topic.subject        = req.body.subject;  
    topic.content = req.body.content;
    topic.topic_by = req.body.topic_by;
    topic.topic_cat = req.body.topic_cat;
    topic.timestamp = req.body.timestamp;
    topic.save(function(err) {
        if (err)
            res.send(err);
        res.json(topic);
    });
};
exports.getAll = function(req, res) {
    var object = {};
    // return thing
    Topic.find(function(err, topics) {
      if (err)
          res.send(err)
      res.json(topics);
    });
};
// exports.getAll = function(req, res) {
//     Topic.find(function(err, topics) {
//       if (err)
//           res.send(err)
//       console.log(topics);
//       return topics
//     });
// };
exports.getOne = function(req, res) {
    Topic.find(function(err, topics) {
      if (err)
          res.send(err)
        
      res.json(topics); 
    });
};
exports.putUpdate = function(req, res) {
    Topic.find({
        _id : req.params.id
    }, function(err, category) {
        if (err)
            res.send(err);
        res.json(category);
    });
};

exports.deleteDestroy = function(req, res) {
    Topic.remove({
            _id : req.params.id
        }, function(err, topic) {
            if (err)
                res.send(err);
    });
};


exports.getByCategory = function(req, res) {
  Topic.find({ 
    topic_cat: req.params.id
  }, function(err, topics) {
      if(err)
        res.send(err);
      res.json(topics);
  })
}