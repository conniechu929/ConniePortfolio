var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
            url: '/',
            templateUrl: 'index.html',
            controller: 'portfolioController'
    })
    .state('home.enter', {
      url: 'CC',
      templateUrl: '../partials/portfolio.html',
      controller: 'portfolioController'
    })
    
  });
