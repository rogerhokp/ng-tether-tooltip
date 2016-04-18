(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Tooltip = window.Tooltip || require('tether-tooltip');
var PROPS = {
    tooltip: 'tooltip',
    position: 'tooltipPosition',
    content: 'tooltipContent',
    classes: 'tooltipClasses'
};

var link = function link(scope, element, attrs) {

    var opt = {
        target: element[0],
        content: attrs[PROPS.tooltip] || attrs[PROPS.content]
    };
    if (attrs[PROPS.classes]) {
        opt.classes = attrs[PROPS.classes];
    }
    if (attrs[PROPS.position]) {
        opt.position = attrs[PROPS.position];
    }

    var tooltipInstance = new Tooltip(opt);

    scope.$on('$destroy', function () {
        tooltipInstance.destroy();
    });
};

exports.default = function () {
    return {
        restrict: 'A',
        link: link
    };
};

},{"tether-tooltip":"tether-tooltip"}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _directive = require('./directive.js');

var _directive2 = _interopRequireDefault(_directive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var angular = window.angular || require('angular');
exports.default = angular.module('ng-tether-tooltip', []).directive('ngTetherTooltip', _directive2.default);

},{"./directive.js":1,"angular":"angular"}]},{},[2]);