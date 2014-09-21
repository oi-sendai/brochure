'use strict'; 

var ngTopic = angular.module('ngTopic', [
    // 'ngCookies', 
    'ui.router',
    'ngResource',
    'ngAnimate',
    'pageController',
    // 'textAngular',
    'commentControl',
    'userControl',
    // 'UserFactory'
    'categoryAdminControl',
    'topicAdminControl'
]);

var userControl = angular.module('userControl', []);
userControl.controller('userControl', function($scope){
    $scope.debug = 'userControl';
    $scope.endpoint = "rest/user";
    $scope.formData = {};
    // $scope.categoryList = [];

    $scope.init = function(){
        // RestFactory.getAll($scope.endpoint).then(function(response) {
        //     console.log(response.user);
        //     $scope.categoryList = response.data;
        // });
    }; 
    $scope.init();

    $scope.test = function(input) {
        var foo = input;
        foo = input+'works yass';
        return foo
    }
});

var commentControl = angular.module('commentControl', []);
commentControl.controller('commentControl', function($scope, CommentFactory){
    $scope.debug = 'commentControl';
    $scope.endpoint = "rest/user";
    $scope.formData = {};
    $scope.comments = [];
    $scope.topic_id = '';


    $scope.init = function(topic_id){
        $scope.topic_id = topic_id;
        $scope.showComments();
        console.log('fires');
        console.log($scope.topic_id);
        console.log($scope.comments);
    }; 
    // $scope.init();

    $scope.test = function(input) {
        var foo = input;
        foo = input+'works yass';
        return foo
    }
    $scope.addComment = function(){
        console.log('post_id');
        console.log($scope.post_id);
        console.log('formData');
        console.log($scope.formData);
        CommentFactory.addComment($scope.formData).success(function(response) {
            console.log(response)
            console.log('works now');
            $scope.formData = {};
            $scope.showComments();
            // $scope.refresh(); //refreshPosts();
        });
    };
    $scope.showComments = function(){
        console.log('showComments');
        CommentFactory.getTopicComments($scope.topic_id).success(function(response) {
            console.log(response);
            console.log('works now still');
            $scope.comments = response;
            // $scope.comments = response.data;
            // $scope.refresh(); //refreshPosts();
        });
    };
});

ngTopic.factory("CommentFactory", function($http,$resource) {
    var factory = {};

    factory.addComment = function(formData){
        return $http.post('/rest/reply', formData);
    };
    factory.getTopicComments = function(topic_id){
        console.log('getTopicComments');
        console.log(topic_id);
        // return 'a thing'
        return $http.get('/rest/reply/' + topic_id);
    };

    return factory
});

// app.js

// define our application and pull in ngRoute and ngAnimate
var pageController = angular.module('pageController', ['ui.router', 'ngAnimate']);

pageController.controller('pageController', 
    function($resource,$scope, $http) { 
    console.log('pageCon');
    // $scope.pageClass = 'digital factory';
    $scope.pageClass = 'production line';
    $scope.rainingPhrase = $(".raining-text");
    // $scope.tl = new TimelineLite();
    // $scope.tl.add(TweenLite.set($scope.rainingPhrase, {bottom: 250}));
    // $scope.do = function(){
    //     console.log('doing');
    // }
    var tl = new TimelineLite();

    $scope.dostuff = function() {
        console.log('this');
        var logo = $(".home-logo");
        var binary = $('.binary');
        var geometry = $('.geometry');
        var tall = $('.tall');
        var steve = $('.steve');
        var bamford = $('.bamford');
        var again = $('.again');
        var app = $('.app');
        // logo.hide();
        // TweenLite.to(logo, 2, {left:"342px"});
        $scope.intro = function(){
            tl.set([tall,bamford,steve, again, app], {scale:0});
            tl.to([logo], 3, {scale:0.6, opacity:1});
            tl.to(logo, 0.5, {skewX:90, skewY:45, scale:0.5, opacity:0});
            tl.to(tall, 0.4, {scale:1});
            tl.to(tall, 0.4, {scale:0, delay:3});
            // tall.hide();
            tl.to(bamford, 0.4, {scale:1});
            tl.to(bamford, 0.4, {scale:0, delay:3});
            // bamford.hide();
            tl.to(steve, 0.4, {scale:1});
            tl.to(steve, 0.4, {scale:0, delay:3});
            // steve.hide();
            tl.to(app, 0.4, {scale:1});
            // tl.to(app, 0.4, {scale:0, delay:8});
            // tl.to([logo], 3, {scale:0.6, opacity:1});
            // tl.to(again, 1, {opacity:1});
        }
        $scope.intro();
        // $scope.tl.add(TweenLite.set($scope.rainingPhrase, {bottom: 250}));
        // $scope.tl.add(TweenLite.to($scope.rainingPhrase, 2, {bottom:5, ease: Bounce.easeOut}));
        // var splitPhrase = new SplitText("#raining-text", {type: "chars"});
        // var tl = new TimelineLite({delay:0.5});
        // tl.set(splitPhrase.chars, {bottom: 250});
        // tl.staggerTo(splitPhrase.chars, 2, {bottom: 5, ease: Bounce.easeOut}, 0.02);
    }
    // dostuff();
    $scope.domorestuff = function() {
        console.log('this');
     
      // $scope.tl.add(TweenLite.set($scope.rainingPhrase, {bottom: 250}));
      // $scope.tl.add(TweenLite.to($scope.rainingPhrase, 2, {bottom:5, ease: Bounce.easeOut}));
      // var splitPhrase = new SplitText("#raining-text", {type: "chars"});
      // var tl = new TimelineLite({delay:0.5});
      // tl.set(splitPhrase.chars, {bottom: 250});
      // tl.staggerTo(splitPhrase.chars, 2, {bottom: 5, ease: Bounce.easeOut}, 0.02);      
    }

});

// // about page controller
// pageController.controller('aboutController', function($scope) {
//     $scope.pageClass = 'page-about';
// });

// // contact page controller
// pageController.controller('contactController', function($scope) {
//     $scope.pageClass = 'page-contact';
// });
