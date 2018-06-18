console.log("Hi there");
var app = angular.module('queueApp', []);

app.controller('MainController', function($scope, $location, $window) {
  console.log("Hello there");
  var ctrl = this;
  ctrl.searchInput = undefined;
  ctrl.searchResults = undefined;

  var init = function($scope) {
    console.log("Hello");
    var hash = $location.hash();
    if (hash === "") {
      //if the hash is empty we will need to authenticate
      authURL = "https://accounts.spotify.com/authorize" +
        "?client_id=" + "insert_client_id_here" +
        "&response_type=" + "token" +
        "&redirect_uri=" + "http://orion.local:8080/app";
      $window.location.href = authURL;
    }
    else {
      console.log(hash);
    }
  }
  init();
});
