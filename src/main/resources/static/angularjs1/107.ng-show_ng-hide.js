var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {
        var employees = [
            {name: "Kishore", gender: "male", salary: 66000, city: "London"},
            {name: "Prani", gender: "female", salary: 43000, city: "London"},
            {name: "Shiva", gender: "male", salary: 53500, city: "London"},
            {name: "Praveen", gender: "male", salary: 78000, city: "Dallas"},
            {name: "Panjala", gender: "male", salary: 68500, city: "Dallas"},
            {name: "Shruthi", gender: "female", salary: 62000, city: "Austin"},
            {name: "Scott", gender: "male", salary: 27000, city: "Houston"}
        ];
        $scope.employees = employees;


    });
