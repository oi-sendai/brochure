var Topic = require('../models/Topic');
var Category = require('../models/Category');

exports.renderRoom = function(req, res) {
    Topic.find({ 
        topic_cat: req.params.id 
    }, function(err, topics) {
        console.log(topics)
        if (err)
            res.send(err)
        res.render('forum/room', {
            title: 'Forum',
            topics: topics,
            category: req.params.id
        });
    });
};

exports.renderTopic = function(req, res) {
    Topic.find({ 
        _id: req.params.topic_id 
    }, function(err, topic) {
        console.log(topic)
        if (err)
            res.send(err)
        res.render('forum/topic', {
            title: 'Forum',
            topic: topic,
            category: req.params.cat_id
        });
    });
};
