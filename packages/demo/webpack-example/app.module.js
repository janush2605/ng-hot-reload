import elementsModule from './elements.module';
import './dist/outside.service'

angular.module('hot-reload-demo', ['ui.router', 'outside', elementsModule]);
