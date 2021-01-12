var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {
        var employees = [
            {name: "Kishore", gender: "Male", salary: 66000, city: "London"},
            {name: "Prani", gender: "Female", salary: 43000, city: "London"},
            {name: "Shiva", gender: "Male", salary: 53500, city: "London"},
            {name: "Praveen", gender: "Male", salary: 78000, city: "Dallas"},
            {name: "Panjala", gender: "Male", salary: 68500, city: "Dallas"},
            {name: "Shruthi", gender: "Female", salary: 62000, city: "Austin"},
            {name: "Ashok", gender: "Male", salary: 27000, city: "Houston"}
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
