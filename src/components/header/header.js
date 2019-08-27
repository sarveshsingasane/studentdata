import angular from 'angular';
import template from './header.html';

const headerModule = angular.module('header', [])
    .component('header', {
        template
    })
    .name;

export default headerModule;