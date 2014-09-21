// 'use strict';
var topicControl = angular.module('topicControl', []);

topicControl.controller('topicControl', function(
    // $resource,
    $scope, 
    $http,
    // $stateParams,
    ) { 

    $scope.topics = [
        {
            "_id": "12345",
            "name": "Some Topic",
            "creator": "user@forum.com",
        },
    ]
});
