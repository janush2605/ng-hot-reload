import template from './hello.html';
import './hello.controller.js';
import './hello.service';

angular.module('hot-reload-demo')
  .directive('hello', function() {
    return {
      template,
      scope: true,
      controller: 'HelloController as vm',
    };
});
