var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {
        var employees = [
            {name: "Kishore", dateOfBirth: new Date("October 29,1990"), gender: "Male", salary: 66000},
            {name: "Prani", dateOfBirth: new Date("November 10,1993"), gender: "Female", salary: 43000},
            {name: "Shiva", dateOfBirth: new Date("September 19,1991"), gender: "Male", salary: 53500},
            {name: "Praveen", dateOfBirth: new Date("June 3,1991"), gender: "Male", salary: 78000},
            {name: "Panjala", dateOfBirth: new Date("December 3,1991"), gender: "Male", salary: 68500},
            {name: "Shruthi", dateOfBirth: new Date("September 28,1991"), gender: "Female", salary: 62000},
            {name: "Ashok", dateOfBirth: new Date("February 19,1993"), gender: "Male", salary: 27000}
        ];
        $scope.employees = employees;
        $scope.sortColumn = "name";
        $scope.reverseSort = false;

        $scope.sortData = function (column) {
            $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
            $scope.sortColumn = column;

        }


        $scope.getSortClass = function (column) {
            if ($scope.sortColumn == column) {
                return $scope.reverseSort ? 'down' : 'up'
            }
        }

        return '';

    });
