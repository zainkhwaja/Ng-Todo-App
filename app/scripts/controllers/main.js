'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoApp
 */
angular.module('todoApp').
controller('todoController',['$scope', function($scope){

  $scope.todos = [

  ];

  // Code for showing clear completed button
  $scope.IsVisible = false;
  $scope.ShowHide = function (todo) {
    $scope.IsVisible = todo.done;

  };

//Adding a new task in the list
  $scope.addtodo = function () {
    console.log($scope.newtodo);
    var data = {'title':$scope.newtodo,'done': false};
    console.log(data);
    console.log($scope.todos);
    $scope.todos.push(data);
    $scope.newtodo = ''
  };


// Clear completed function
  $scope.clearCompleted = function () {

    $scope.IsVisible = false;

    $scope.todos = $scope.todos.filter(function(item)
    {
      return !item.done;
    });
  };


  // Delete Task manually
    $scope.deleteTask = function (index) {
      console.log(index);
      $scope.todos.splice(index, 1);
    }





}]);

