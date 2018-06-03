import './hello.service';
import './../dist/outside.service';

angular.module('hot-reload-demo')
    .controller('HelloController', ['$scope', 'helloService', 'outsideService', function ($scope, helloService, outsideService) {
        this.name = 'passat1';
        this.message = 'Hello';
        this.haha = helloService.mul();
        this.fromOutside = outsideService.test();

        $scope.click = () => {
            alert(helloService.mul());
        }
    }]);
