toDoList.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('homeState', {
    url: "/reminder",
    templateUrl: 'templates/home.html',
    controller: "homeCtrl"
  })

  $urlRouterProvider.otherwise('/reminder');
});