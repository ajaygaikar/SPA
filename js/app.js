(function(){
    var singlePageApp = angular.module('singlePageApp', ['ngRoute']);
    
    singlePageApp.config(function($routeProvider){
         $routeProvider
             .when('/', {
                templateUrl : 'partials/home.html',
                controller : 'HomeController'
            })
            .when('/quiz', {
                templateUrl : 'partials/quiz.html',
                controller : 'QuizController'
            }) 
            .when('/contact', {
                templateUrl : 'partials/contact.html',
                controller : 'ContactController'
            });
    });
    
    
    singlePageApp.controller('HomeController',function($scope){
        $scope.title = "What is Angular";
    });
    singlePageApp.controller('QuizController',function($scope){
    	$scope.title = "Using Angular routes in a single-page application";
    });
    singlePageApp.controller('ContactController',function($scope){
    	$scope.title = "Contact";
    });
})();


