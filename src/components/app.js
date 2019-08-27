import angular from 'angular';
import Navbar from './navbar/navbar';
import Footer from './footer/footer';
import Header from './header/header';
import right from './right/right';

const commonModule = angular.module('app.common', [
  Navbar,
  Footer,
  Header,   
  right
])
  
.name;

export default commonModule;