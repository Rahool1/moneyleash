
// Ionic MoneyLeash App, v1.0

angular.module('underscore', [])
    .factory('_', function () {
        return window._; // assumes underscore has already been loaded on the page
    });

var moneyleashapp = angular.module('moneyleash', ['ionic', 'firebase', 'angularMoment', 'moneyleash.controllers', 'moneyleash.directives', 'moneyleash.filters', 'moneyleash.services', 'moneyleash.factories', 'moneyleash.config', 'underscore', 'ngMap', 'ngResource', 'ngCordova', 'templates', 'slugifier', 'ionic.contrib.ui.tinderCards'])
var fbase = null;

moneyleashapp.run(function ($ionicPlatform, PushNotificationsService) {

    $ionicPlatform.on("deviceready", function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
        PushNotificationsService.register();
        fbase = new Firebase("https://brilliant-inferno-1044.firebaseio.com/");
    });

    $ionicPlatform.on("resume", function () {
        PushNotificationsService.register();
    });
})

moneyleashapp.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

      //INTRO
      .state('walkthrough', {
          url: "/",
          templateUrl: "templates/walkthrough.html",
          controller: 'WalkthroughCtrl'
      })
      .state('login', {
          url: "/login",
          templateUrl: "templates/login.html",
          controller: 'LoginController'
      })
      .state('signup', {
          url: "/signup",
          templateUrl: "signup.html",
          controller: 'SignupCtrl'
      })
      .state('forgot-password', {
          url: "/forgot-password",
          templateUrl: "templates/forgot-password.html",
          controller: 'ForgotPasswordCtrl'
      })
      .state('app', {
          url: "/app",
          abstract: true,
          templateUrl: "templates/side-menu.html",
          controller: 'AppCtrl'
      })

      // ACCOUNTS
      .state('app.accounts', {
          url: "/accounts",
          views: {
              'menuContent': {
                  templateUrl: "templates/accounts.html",
                  controller: 'AccountsController'
              }
          }
      })
      .state('app.singleaccount', {
          url: "/accounts/:accountId",
          views: {
              'menuContent': {
                  templateUrl: "templates/account.html",
                  controller: 'AccountCtrl'
              }
          }
      })
      .state('app.accountmaintenance', {
          url: "/accounts",
          views: {
              'menuContent': {
                  templateUrl: "templates/accountmaintenance.html",
                  controller: 'AccountCtrl'
              }
          }
      })

      // RECURRING
      .state('app.recurringlist', {
          url: "/recurringlist",
          views: {
              'menuContent': {
                  templateUrl: "templates/recurringlist.html",
                  controller: 'RecurringListCtrl'
              }
          }
      })

      // CATEGORIES
      .state('app.categories', {
          url: "/categories",
          views: {
              'menuContent': {
                  templateUrl: "templates/categories.html"
              }
          }
      })

      // PAYEES
      .state('app.payees', {
          url: "/payees",
          views: {
              'menuContent': {
                  templateUrl: "templates/payees.html"
              }
          }
      })

      // BUDGETS
      .state('app.budgets', {
          url: "/budgets",
          views: {
              'menuContent': {
                  templateUrl: "templates/budgets.html"
              }
          }
      })

      // REPORTS
      .state('app.reports', {
          url: "/reports",
          views: {
              'menuContent': {
                  templateUrl: "templates/reports.html"
              }
          }
      })

      // SETTINGS
      .state('app.settings', {
          url: "/settings",
          views: {
              'menuContent': {
                  templateUrl: "templates/settings.html",
                  controller: 'SettingsCtrl'
              }
          }
      })

      // ABOUT
      .state('app.about', {
          url: "/about",
          views: {
              'menuContent': {
                  templateUrl: "templates/about.html"
              }
          }
      })

      // PROFILE
      .state('app.profile', {
          url: "/profile",
          views: {
              'menuContent': {
                  templateUrl: "templates/profile.html",
                  controller: 'ProfileCtrl'
              }
          }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/');
});
