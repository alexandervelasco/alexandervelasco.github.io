'use strict';

angular.module('personalSite')
  .controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
      $http.get('/assets/content.json').then(function(response){
          $scope.content = response.data;
      });
  }]);
