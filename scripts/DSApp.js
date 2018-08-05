var DSApp = angular.module('DSApp', [

    "ngRoute"

]);

//routing setup
DSApp.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "views/content/home.html"
        })
        .when("/home", {
            templateUrl: "views/content/home.html"
        })
        .when("/about", {
            templateUrl: "views/content/about.html"
        })
        .when("/events", {
            templateUrl: "views/content/events.html"
        })
        .when("/contact", {
            templateUrl: "views/content/contact.html"
        })
        .when("/join", {
            templateUrl: "views/content/join.html"
        })
        .otherwise({
            redirectTo: '/'
        });

});



//directives for header and footer

DSApp.directive("header", function () {
    return {
        restrict: 'EA',
        templateUrl: "views/header.html"
    };
});


DSApp.directive("footer", function () {
    return {
        restrict: 'EA',
        templateUrl: "views/footer.html"
    };
});



