var mongoose = require('mongoose');

var replySchema = new mongoose.Schema({
  reply: { type: String},
  topic_id: {type: String},
  reply_by: {type: String},
  timestamp: {type: String},
});

module.exports = mongoose.model('Reply', replySchema);