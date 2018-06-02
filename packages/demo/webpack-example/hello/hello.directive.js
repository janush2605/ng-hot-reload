import template from './hello.html';
import './hello.controller.js';
import './hello.service';

angular.module('hot-reload-demo')
    .directive('hello', ['helloService', function (helloService) {
        console.log(helloService.mul());
        return {
            template,
            scope: true,
            controller: 'HelloController as vm',
        };
    }]);
