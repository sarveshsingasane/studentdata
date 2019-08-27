import angular from "angular";
import routeProvider from "angular-route";
import css from "./footer.css";
import template from "./footer.html";

const footerModule = angular.module("footer", [])
    .component("footer", {
        template
    }).name;

export default footerModule;
