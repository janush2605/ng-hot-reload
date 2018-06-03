import angularProvider from "./ng/angular";
import update from './updates';

function serviceProvider(moduleName) {
    const angular = angularProvider();
    let $injector;
    let updates;

    // const getService = name => $injector.get(name);


    function create(name, factory) {
        update(name);
        // let service = getService(name);

        // ngHotReload$Service.$inject = [
        //     '$injector'
        // ];
        angular.module(moduleName).service(name, factory);
        return this.service(name, factory);

        // return angular.module(moduleName).provider(name, factory);

        // function ngHotReload$Service(_$injector_) {
        //     $injector = _$injector_;
        //     return $injector.get(name);
        // }
    }


    return {
        create: create,
        update: create,
    };
}

export default serviceProvider;