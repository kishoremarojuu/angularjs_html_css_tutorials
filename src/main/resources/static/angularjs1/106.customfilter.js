///<reference path="D:/Kishore/programs/5.UI Technologies/2.Angular_JS/programms/106.gendercustomfilter.js"/>

var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {
        var employees = [
            {name: "Kishore", gender: 1, salary: 66000, city: "London"},
            {name: "Prani", gender: 2, salary: 43000, city: "London"},
            {name: "Shiva", gender: 1, salary: 53500, city: "London"},
            {name: "Praveen", gender: 1, salary: 78000, city: "Dallas"},
            {name: "Panjala", gender: 1, salary: 68500, city: "Dallas"},
            {name: "Shruthi", gender: 2, salary: 62000, city: "Austin"},
            {name: "Scott", gender: 3, salary: 27000, city: "Houston"}
        ];
        $scope.employees = employees;


    });


 

