var myApp = angular.module("myModule", []);
myApp.controller("myController", function ($scope, $http, $log) {

    $scope.postdata = function (id, name, country) {
        var data = {
            id: id,
            name: name,
            country: country
        };

        $http.post('http://localhost:8686/restspringhibernatejersey1/webapi/personresource/', JSON.stringify(data))
            .then(function (response) {
                $scope.persons = response.data;
                $log.info = response;

            });
    };
});

