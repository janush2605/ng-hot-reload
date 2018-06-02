const providerNames = [
    'service',
    'factory',
    'constant',
    'value',
    'filter',
];

function decorateProviders(angular) {

    providerNames.forEach(name => {
        const original = angular[name];
        angular[name] = ngHotReload$Provider;

        function ngHotReload$Provider() {
            return original.apply(this, arguments);
        };
    });
};

export default decorateProviders;