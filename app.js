angular.module("flapperNews", ["ui.router"])
// creating a factory to store the posts data since
// we don't have a database to store the posts (yet)
.factory('posts', [function(){
  //create new object to store the posts
  var o = {
    posts: []
  };
  return o;
}])

.controller("MainCtrl", [
"$scope",
"posts",
function($scope, posts) {
  $scope.test = "Hello World!";

  //binding the $scope.posts to the posts array in our service
  $scope.posts = posts.posts;

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
    $scope.posts.push({
      title: $scope.title,
      link: $scope.link,
      upvotes: 0});
    $scope.title = "";
    $scope.link = "";
  };

  $scope.incrementUpvotes = function(post) {
    post.upvotes += 1;
  }
}]);
