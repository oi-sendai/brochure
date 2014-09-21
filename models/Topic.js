var mongoose = require('mongoose');

var topicSchema = new mongoose.Schema({
  subject: { type: String},
  content: { type: String },
  topic_cat: {type: String},
  topic_by: {type: String},
  timestamp: {type: String},
});

module.exports = mongoose.model('Topic', topicSchema);