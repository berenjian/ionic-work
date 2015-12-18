// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider){

  $stateProvider

  .state( 'tab', {
  url: '/tab',
  abstract: true,
  templateUrl:'templates/tabs.html'
  })

  .state('tab.dash', {
  url: '/dash',
    views: {
      'tab-chats': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }

  })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })

  .state('tab.test', {
    url: '/test',
    views: {
      'tab-test': {
        templateUrl: 'templates/tab-test.html',
        controller: 'TestCtrl'
      }
    }
  });

  $urlRouterProvider.otherwise('/tab/dash');

})
;

