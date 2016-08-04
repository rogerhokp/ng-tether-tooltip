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

    var tooltipInstance = void 0,
        config = {};
    angular.forEach(PROPS, function (prop) {
        return attrs.$observe(prop, function (data) {
            return config[prop] = data;
        });
    });

    scope.$watch('tooltipEnabled', function (enabled) {
        if (enabled === undefined || enabled) {
            var opt = {
                target: element[0],
                content: config[PROPS.tooltip] || config[PROPS.content]
            };
            if (config[PROPS.classes]) {
                opt.classes = config[PROPS.classes];
            }
            if (config[PROPS.position]) {
                opt.position = config[PROPS.position];
            }
            tooltipInstance = new Tooltip(opt);
        } else if (tooltipInstance) {
            tooltipInstance.destroy();
        }
    });

    scope.$on('$destroy', function () {
        tooltipInstance.destroy();
    });
};

exports.default = function () {
    return {
        scope: {
            tooltipEnabled: '<'
        },
        restrict: 'A',
        link: link
    };
};