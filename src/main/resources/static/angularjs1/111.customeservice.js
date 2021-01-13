///<reference path="D:/Kishore/programs/5.UI Technologies/2.Angular_JS/programms/111.customeservice.html"/>
///<reference path="D:/Kishore/programs/5.UI Technologies/2.Angular_JS/programms/111.Stringcustomeservice.js"/>

var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope, stringService) {
        $scope.transformString = function (input) {
            $scope.output = stringService.processString(input)

        }


    });

