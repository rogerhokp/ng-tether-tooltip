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
    var getOpt = function getOpt() {
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
        return opt;
    };

    angular.forEach(PROPS, function (prop) {
        return attrs.$observe(prop, function (data) {
            config[prop] = data;
            if (tooltipInstance) {
                tooltipInstance.destroy();
                tooltipInstance = new Tooltip(getOpt());
            }
        });
    });

    scope.$watch('tooltipEnabled', function (enabled) {
        if (enabled === undefined || enabled) {
            tooltipInstance = new Tooltip(getOpt());
        } else if (tooltipInstance) {
            tooltipInstance.destroy();
            tooltipInstance = null;
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