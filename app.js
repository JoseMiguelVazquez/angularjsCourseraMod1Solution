(function () {
    'use strict';

    angular.module('LunchCheck', [])
    .controller('lunchController', lunchController);

    lunchController.$inject = ['$scope', '$filter'];
    function lunchController ($scope, $filter) {
        $scope.message = '';
        $scope.messageClass = '';

        $scope.checkIfTooMuch = function () {
            if(!$scope.lunchList) {
                $scope.message = 'Please enter data first';
                $scope.messageClass = 'notValid';
            }
            else {
                var lunchListArray = $scope.lunchList.split(',');
                var lunchListArrayWithoutWhitespaces = $filter('filter')(lunchListArray, function (item) {
                    return item.trim() !== '';
                });
                if(lunchListArrayWithoutWhitespaces.length === 0){
                    $scope.message = 'Please enter data first';
                    $scope.messageClass = 'notValid';
                }
                else if(lunchListArrayWithoutWhitespaces.length <= 3) {
                    $scope.message = 'Enjoy!';
                    $scope.messageClass = 'valid';
                }
                else {
                    $scope.message = 'Too much!';
                    $scope.messageClass = 'valid';
                }
            }
            
        }
    };
})();