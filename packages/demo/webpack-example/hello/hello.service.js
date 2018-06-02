angular.module('hot-reload-demo').service('helloService', function () {
    return {
        add: function () {
            return 4;
        },
        mul : function () {
            return 'helloServicess3222';
        }
    }
});
console.log('sublja5');
angular.module('hot-reload-demo').factory('helloFactory', function () {
    return {
        sublja: function () {
            return 'sublja5';
        }
    }
});