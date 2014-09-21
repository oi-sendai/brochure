'use strict'; 

// var ngAdmin = angular.module('ngAdmin', [
//     // 'ngCookies', 
//     'ui.router',
//     'ngResource',
//     // 'ngAnimate',
//     // 'textAngular',

// ]);

var categoryAdminControl = angular.module('categoryAdminControl', []);
categoryAdminControl.controller('categoryAdminControl', function($scope, RestFactory){
    $scope.debug = 'categoryAdminControl';
    $scope.endpoint = "rest/category";
    $scope.formData = {};
    $scope.categoryList = [];


    $scope.init = function(){
        RestFactory.getAll($scope.endpoint).then(function(response) {
            console.log(response.user);
            $scope.categoryList = response.data;
        });
    }; 
    $scope.init();

    $scope.addCategory = function(){
        // I have no idea why this didn't work with .then but 
        RestFactory.create($scope.endpoint, $scope.formData).success(function(response) {
            $scope.formData = {}; // clear the form so our user is ready to enter another
            $scope.init();

        });
    }; 
    $scope.deleteCategory = function(id){
        // I have no idea why this didn't work with .then but 
        console.log('clik');
        RestFactory.destroy($scope.endpoint, id).success(function(response) {
            console.log('delete');
            $scope.init();
        });
    }; 
});

var forumTopicControl = angular.module('forumTopicControl', []);
forumTopicControl.controller('forumTopicControl', function($scope, TopicFactory){
    $scope.debug = 'forumTopicControl';
    // $scope.endpoint = "rest/topic/category";
    $scope.formData = {};
    $scope.categoryList = [];


    $scope.init = function(){
        TopicFactory.getAll($scope.endpoint, $scope.category).then(function(response) {
            console.log(response);
            $scope.topics = response.data;
        });
    }; 
    $scope.init();
});

var topicAdminControl = angular.module('topicAdminControl', []);
topicAdminControl.controller('topicAdminControl', function($scope, RestFactory){
    $scope.debug = 'topicAdminControl';
    $scope.endpoint = "rest/topic";
    $scope.formData = {};
    $scope.topicList = [];
    $scope.categoryList = [];
    $scope.userid = '';


    $scope.init = function(){
        RestFactory.getAll($scope.endpoint).then(function(response) {
            console.log(response);
            $scope.topicList = response.data;
        });
        RestFactory.getAll("/rest/category").then(function(response) {
            console.log(response);
            $scope.categoryList = response.data;
        });
        RestFactory.userid().then(function(response) {
            console.log(response);
            $scope.userid = response.data;
        });
    }; 
    $scope.init();

    $scope.addTopic = function(){
        console.log($scope.formData);
        $scope.formData.topic_by = $scope.userid;
        console.log($scope.formData);
        RestFactory.create($scope.endpoint, $scope.formData).success(function(response) {
            $scope.formData = {}; // clear the form so our user is ready to enter another
            $scope.init();

        });
    }; 
    $scope.deleteTopic = function(id){
        // I have no idea why this didn't work with .then but 
        console.log('clik');
        RestFactory.destroy($scope.endpoint, id).success(function(response) {
            console.log('delete');
            $scope.init();
        });
    }; 
});


ngTopic.factory("TopicFactory", function($http,$resource) {
    var factory = {};

    factory.getByCat = function(id){
        return $http.get('rest/topic/category/' + id);
    };

    return factory
});

ngTopic.factory("RestFactory", function($http,$resource) {
  var factory = {};

  factory.getAll = function (endpoint) {
    return $http.get(endpoint);
  };
  factory.create = function (endpoint, dataObject) {
    // why doesn't this work with then
    return $http.post(endpoint, dataObject);
  };
  factory.getOne = function (endpoint, id) {
    return $http.get(endpoint + '/' + id);
  };
  factory.update = function (id, dataObject) {
    return $http.put(endpoint + '/' + cust.ID, cust)
  };
  factory.destroy = function (endpoint, id) {
    console.log(endpoint + '/' + id);
        return $http.delete(endpoint + '/' + id);
  };
  factory.userid = function () {
    return $http.get('/rest/currentuser');
  }
  return factory
});

// ngAdmin.config(['$httpProvider', function($httpProvider) {
//     $httpProvider.defaults.xsrfHeaderName="x-csrf-token";
//     $httpProvider.defaults.xsrfCookieName="x-csrf-token";

// }]);

// ngTopic.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', 
//     function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

//     // Anonymous routes
//     $stateProvider
//         .state('admin', {
//             abstract: true,
//             // template: '<ui-view autoscroll="false"/>',
//             templateUrl: 'public',
//         })
//         // // Home
//         .state('admin.home', {
//             url: '/toast/',
//             template: 'this is an angular app'
//             // views:{
//             //     'main':{
//             //         templateUrl:'blog/public/list',
//             //         controller: 'publicBlogController'
//             //     },
//             //     'sidebar': {
//             //         templateUrl: 'blog/public/sidebar',
//             //         controller: 'publicBlogController'
//             //     }
//             // }
//         });
// }]);