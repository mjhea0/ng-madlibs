angular.module('madLibs', ['ngMessages'])
    .controller('myCtrl', function($scope) {
        $scope.submit = function() {
            if ($scope.inputForm.$valid) {
                console.log('valid');
                $scope.result = 1;
                console.log($scope.result);
            }
            else {
                console.log('invalid');
            }
        };
        $scope.reset = function() {
            $scope.result = 0;
            $scope.name = null;
            $scope.job_title = null;
            $scope.tedious_task = null;
            $scope.dirty_task = null;
            $scope.celebrity = null;
            $scope.huge_number = null;
            $scope.useless_skill = null;
            $scope.obnoxious_celebrity = null;
            $scope.adjective = null;
        };

        $scope.result = 0;
    });