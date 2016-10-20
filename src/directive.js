let Tooltip = window.Tooltip || require('tether-tooltip');
const PROPS = {
    tooltip: 'tooltip',
    position: 'tooltipPosition',
    content: 'tooltipContent',
    classes: 'tooltipClasses'
};

const link = (scope, element, attrs) => {

    let tooltipInstance, config = {};
    const getOpt = () => {
        let opt = {
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
    }

    angular.forEach(PROPS, prop => attrs.$observe(prop, data => {
        config[prop] = data;
        if (tooltipInstance) {
            tooltipInstance.destroy();
            tooltipInstance = new Tooltip(getOpt());
        }
    }));

    scope.$watch('tooltipEnabled', enabled => {
        if (enabled === undefined || enabled) {
            tooltipInstance = new Tooltip(getOpt());
        } else if (tooltipInstance) {
            tooltipInstance.destroy();
            tooltipInstance = null;
        }
    });

    scope.$on('$destroy', function() {
        if (tooltipInstance) {
            tooltipInstance.destroy();
        }
    });

}

export default () => {
    return {
        scope: {
            tooltipEnabled: '<'
        },
        restrict: 'A',
        link
    }
};
