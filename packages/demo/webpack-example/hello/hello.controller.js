import './hello.service';

angular.module('hot-reload-demo')
  .controller('HelloController', ['helloService', 'helloFactory', function(helloService, helloFactory) {
    this.name = 'passat2331';
    this.message = 'Hello 123 ';
    this.haha = helloService.mul();
  }]);
