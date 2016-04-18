'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _directive = require('./directive.js');

var _directive2 = _interopRequireDefault(_directive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var angular = window.angular || require('angular');
exports.default = angular.module('ng-tether-tooltip', []).directive('ngTetherTooltip', _directive2.default);