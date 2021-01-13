///<reference path="D:/Kishore/programs/5.UI Technologies/2.Angular_JS/angular.min.js"/>


var myApp = angular
    .module("myModule", ["ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "113.home.html",
                controller: "homeController", //controller:"homeController"
            })
            .when("/courses", {
                templateUrl: "113.courses.html",
                controller: "coursesController", //controller:"coursesController"
            })
            .when("/students", {
                templateUrl: "113.students.html",
                controller: "studentsController", //controller:"studentsController"
            })
            .otherwise({
                redirectTo: "/home"
            })
        //		$locationProvider.html5Mode(true);
    })
    .controller("homeController", function ($scope) { //.controller("homeController", function ($scope) {
        $scope.messsage = "Home Page"; //$scope.messsage="Home Page";
    })
    .controller("coursesController", function ($route, $scope) { // .controller("coursesController", function ($scope) {

        $scope.$on("$routeChangeStart", function (event, next, current) {
            if (!confirm("are you sure you want to navigate away from this page")) {
                event.preventDefault();
            }
        });
        $scope.courses = ["Microservices", "spring boot", "Angular2", "AWS"]; //$scope.courses=["Microservices","spring boot","Angular2","AWS"];
    })
    .controller("studentsController", function ($scope) { //	.controller("studentsController", function ($scope) {
        $scope.students = ["Kishore", "Anjali", "Ashok", "Praveen"]; //		$scope.students=["Kishore","Anjali","Ashok","Praveen"];
    })