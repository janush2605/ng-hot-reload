
angular.module('hot-reload-demo')
  .controller('HelloController', ['helloService', function(helloService) {
    this.name = '';
    this.message = 'Hello ';
    this.haha = helloService.mul();
  }]);
