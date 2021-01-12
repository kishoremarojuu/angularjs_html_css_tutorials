///<reference path="D:/Kishore/programs/5.UI Technologies/2.Angular_JS/angular.min.js"/>


var myApp = angular
    .module("myModule", ["ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "113.home.html",
                controller: "homeController", //controller:"homeController"
                controllerAs: "homeCtrl"
            })
            .when("/courses", {
                templateUrl: "113.courses.html",
                controller: "coursesController", //controller:"coursesController"
                controllerAs: "coursesCtrl",
                caseInsensitiveMatch: true
            })
            .when("/students", {
                templateUrl: "113.students.html",
                controller: "studentsController", //controller:"studentsController"
                controllerAs: "studentsCtrl",
                caseInsensitiveMatch: true
            })
            .otherwise({
                redirectTo: "/home"
            })
        //		$locationProvider.html5Mode(true);
    })
    .controller("homeController", function () { //.controller("homeController", function ($scope) {
        this.messsage = "Home Page"; //$scope.messsage="Home Page";
    })
    .controller("coursesController", function () { // .controller("coursesController", function ($scope) {
        this.courses = ["Microservices", "spring boot", "Angular2", "AWS"]; //$scope.courses=["Microservices","spring boot","Angular2","AWS"];
    })
    .controller("studentsController", function () { //	.controller("studentsController", function ($scope) {
        this.students = ["Kishore", "Anjali", "Ashok", "Praveen"]; //		$scope.students=["Kishore","Anjali","Ashok","Praveen"];
    })