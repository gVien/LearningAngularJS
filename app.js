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
    {title: 'post 1', upvotes: 5},
    {title: 'post 2', upvotes: 2},
    {title: 'post 3', upvotes: 21},
    {title: 'post 4', upvotes: 23},
    {title: 'post 5', upvotes: 27}
  ];

  // scope is the object that refers to the application model
  $scope.addPost = function() {
    if (!$scope.title || $scope.title === "") {return;};
    $scope.posts.push({title: $scope.title, upvotes: 0});
    $scope.title = "";
  };

  $scope.incrementUpvotes = function(post) {
    post.upvotes += 1;
  }
}]);
