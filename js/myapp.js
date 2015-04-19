$(document).ready(function () {
    console.log("dom is ready!");
    
});

angular.module('madLibs', [])
    .controller('myCtrl', function($scope) {
        $scope.submit = function() {
            if ($scope.inputForm.$valid) {
                console.log("valid");
                $scope.result = 1;
                console.log($scope.result);
                $scope.template = {
                    name: 'name',
                    job_title: 'job title',
                    tedious_task: 'tedious task',
                    dirty_task: 'dirty task',
                    celebrity: 'celebrity',
                    useless_skill: 'useless skill',
                    obnoxious_celebrity: 'obnoxious celebrity',
                    huge_number: 'huge number',
                    adjective: 'adjective'
                };
            }
        };
    });