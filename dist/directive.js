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