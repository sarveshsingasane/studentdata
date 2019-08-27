import routeProvider from 'angular-route';
import css from './navbar.css';
import template from './navbar.html';


const navbarModule = angular.module('navbar', [])
.component('navbar', {
    template
})
.name;

export default navbarModule;