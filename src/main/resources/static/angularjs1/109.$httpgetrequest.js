var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope, $http, $log) {
        $http({
            method: 'GET',
            url: 'http://localhost:8686/restspringhibernatejersey1/webapi/personresource/'
        })
            .then(function (response) {
                $scope.persons = response.data;
                $log.info(response);

                $scope.sortColumn = "name";
                $scope.reverseSort = false;

                $scope.sortData = function (column) {
                    $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
                    $scope.sortColumn = column;

                }
            });


    });

