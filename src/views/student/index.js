import angular from 'angular';
import template from './student.html';

const studentModule = angular.module('student', []);

studentModule.controller('indexController', function($scope, $http){
    $scope.message = 'hello index';
    // //  $http.get("http://localhost:3022/")
    // $http.get("/api/student")
    // .then(function(response){
    //  console.log(response.data.json);
    // })
    })
    .component('student', {
        template
    })
    .name;

export default studentModule;