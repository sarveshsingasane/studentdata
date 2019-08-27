import student from './views/student/index';
import database from './views/database/index';
import './css/mainpage.css';
import angular from 'angular';
import routeProvider from 'angular-route';
import common from './components/app';
import template from './components/app.html';


 angular.module('myApp', 
    [
        'ngRoute',
        'student',
        'database',
        'app.common'
    ]).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/Home', {
        templateUrl : '/src/views/student/student.html',
        controller: 'indexController'
    })
    .otherwise({
         redirectTo: '/Home'
     });
     $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
 });
 
   
}]) .component('app', {
    // templateUrl: './src/components/Views/home.html'
    template
});













