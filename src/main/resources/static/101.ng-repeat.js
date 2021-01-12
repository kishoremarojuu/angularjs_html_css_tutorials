var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {
        var employees = [
            {firstname: "Kishore", lastname: "Maroju", gender: "Male", salary: 66000},
            {firstname: "Prani", lastname: "Chillara", gender: "Female", salary: 43000},
            {firstname: "Shiva", lastname: "Kunchala", gender: "Male", salary: 53500},
            {firstname: "Praveen", lastname: "Kasoju", gender: "Male", salary: 78000},
            {firstname: "Panjala", lastname: "Sandeep", gender: "Male", salary: 68500},
            {firstname: "Shruthi", lastname: "Taloju", gender: "Female", salary: 62000},
            {firstname: "Ashok", lastname: "Maroju", gender: "Male", salary: 27000}
        ];
        $scope.employees = employees;


    });


