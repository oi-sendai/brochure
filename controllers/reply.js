var Reply = require('../models/Reply');
  // reply: { type: String},
  // topic_id: {type: String},
  // reply_by: {type: String},
  // timestamp: {type: String},
/**
 * GET /rest/reply
 * List all reply by Id
 */
exports.create = function(req, res) {
    console.log(req.body);
    var reply = new Reply(); 
    reply.reply       = req.body.reply;  
    reply.topic_id = req.body.topic_id;
    reply.reply_by = req.body.reply_by;
    reply.timestamp = req.body.timestamp;
    reply.save(function(err) {
        if (err)
            res.send(err);
        res.json(reply);
    });
};
exports.getAllById = function(req, res) {
  console.log(req.params);
    Reply.find({
          topic_id: req.params.topic_id
    }, function(err, replies) {
      if (err)
          res.send(err)
        
      res.json(replies); 
    });
};
exports.getOne = function(req, res) {
    Reply.find(function(err, replies) {
      if (err)
          res.send(err)
        
      res.json(replies); 
    });
};
exports.update = function(req, res) {
    reply.find({
        _id : req.params.id
    }, function(err, reply) {
        if (err)
            res.send(err);
        res.json(reply);
    });
};

exports.destroy = function(req, res) {
    console.log('destroy');
    Reply.remove({
            _id : req.params.id
        }, function(err, reply) {
            if (err)
                res.send(err);
    });
};