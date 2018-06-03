import './hello.service';

angular.module('hot-reload-demo')
  .controller('HelloController', ['$scope', 'helloService', function($scope, helloService) {
    this.name = 'passat';
    this.message = 'Hello';
    this.haha = helloService.mul();

    $scope.click = () => {
        alert(helloService.mul());
    }
  }]);
