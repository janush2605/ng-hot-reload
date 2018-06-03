angular.module('hot-reload-demo').service('helloService', function () {
    console.log('helloService init');
    return {
        add: function () {
            return 4;
        },
        mul : function () {
            return 'helloServices';
        }
    }
});