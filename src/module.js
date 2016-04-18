let angular = window.angular || require('angular');
import directive from './directive.js';

export default angular.module('ng-tether-tooltip', [])
    .directive('ngTetherTooltip', directive);
