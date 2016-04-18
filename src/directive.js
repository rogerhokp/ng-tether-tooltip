let Tooltip = window.Tooltip || require('tether-tooltip');
const PROPS = {
    tooltip: 'tooltip',
    position: 'tooltipPosition',
    content: 'tooltipContent',
    classes: 'tooltipClasses'
};

const link = (scope, element, attrs) => {

    let opt = {
        target: element[0],
        content: attrs[PROPS.tooltip] || attrs[PROPS.content]
    }
    if (attrs[PROPS.classes]) {
        opt.classes = attrs[PROPS.classes];
    }
    if (attrs[PROPS.position]) {
        opt.position = attrs[PROPS.position];
    }

    let tooltipInstance = new Tooltip(opt);

    scope.$on('$destroy', function() {
        tooltipInstance.destroy();
    });

}

export default () => {
    return {
        restrict: 'A',
        link
    }
};
