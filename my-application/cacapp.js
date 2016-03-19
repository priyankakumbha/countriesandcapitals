angular.module('cacApp', ['cacDataServices', 'ngRoute', 'ngAnimate'])
.config(function($locationProvider,$routeProvider) {$locationProvider
         $locationProvider.hashPrefix('!');

         $routeProvider
        .when("/", {
            templateUrl: "./home/home.html",
            controller: 'HomeCtrl'
        })
        .when("/countries", {
            templateUrl: "./countries/countries.html",
            controller: "CountriesCtrl"
        })
        .when("/countries/:countryCode", {
            templateUrl: "./countries/countrydetail.html",
            controller: 'CountrydetailCtrl'
        })
        .otherwise({
            redirectTo: "/"
        })
        .when('/error', {
            template: '<p>Error Page Not Found</p>'
        }); 
      })
      