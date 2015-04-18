angular.module('madLibs', [])
    .controller('myCtrl', function($scope) {
        $scope.template = [{
            name: 'name',
            job_title: 'job title',
            tedious_task: 'tedious task',
            dirty_task: 'dirty task',
            celebrity: 'celebrity',
            useless_skill: 'useless skill',
            obnoxious_celebrity: 'obnoxious celebrity',
            huge_number: 'huge number',
            adjective: 'adjective'
        }];
    });