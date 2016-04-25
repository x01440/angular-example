//*** Setup Services.
var noteService = angular.module('noteService', []);

/**
 * The camera service provides convenience functions and storage for camera information.
 */
noteService.factory('noteService', ['$http', '$q', function($http, $q) {
  return new Example.NoteService($http, $q);
}]);

//*** Setup the main module.
var app = angular.module('Example', ['ngMaterial', 'ngRoute', 'noteService']);

//*** Setup application controllers.
app.controller('ListCtrl',
    ['$q', '$scope', '$location', '$mdToast', 'noteService', Example.ListController]);
app.controller('DetailCtrl',
    ['$location', '$routeParams', 'noteService', Example.DetailController]);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'js/components/note-list/list.html',
    controller: 'ListCtrl',
    controllerAs: 'ctrl'
  })
  .when('/detail/:id', {
    templateUrl: 'js/components/note-detail/detail.html',
    controller: 'DetailCtrl',
    controllerAs: 'ctrl'
  });
});
