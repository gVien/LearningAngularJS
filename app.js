angular.module("flapperNews", [])
.controller("MainCtrl", [
"$scope",
function($scope) {
  $scope.test = "Hello World!";

// displaying Lists
// $scope variable serves as the bridge between Angular controllers
// and Angular templates
// if we want something to be accessible in the template (fxn or variable) then bind it to $scope
// ng-repeat has to be used in index.html
$scope.posts = [
  'post 1',
  'post 2',
  'post 3',
  'post 4',
  'post 5'
];
}]);
