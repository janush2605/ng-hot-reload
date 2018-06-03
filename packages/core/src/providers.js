import angularProvider from './ng/angular';

const providerNames = [
    'service',
    'factory',
    'constant',
    'value',
    'filter',
];

export function decorateProviders() {
    const angular = angularProvider();
    providerNames.forEach(name => {
        const original = angular[name];
        angular[name] = ngHotReload$Provider;

        function ngHotReload$Provider() {
            return original.apply(this, arguments);
        };
    });
};