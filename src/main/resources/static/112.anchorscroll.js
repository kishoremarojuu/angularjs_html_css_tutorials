var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope, $location, $anchorScroll) {
        $scope.scrollTo = function (scrolllocation) {
            $location.hash(scrolllocation);
            $anchorScroll();
        }


    });

