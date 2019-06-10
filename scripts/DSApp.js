var DSApp = angular.module('DSApp', ["ezfb", "ngRoute"]);

//routing setup
DSApp.config(function (ezfbProvider, $routeProvider) {

    ezfbProvider.setInitParams({
        appId: '386469651480295',
        version: 'v2.6'
    });

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
        .when("/calendar", {
            templateUrl: "views/content/calendar.html"
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



