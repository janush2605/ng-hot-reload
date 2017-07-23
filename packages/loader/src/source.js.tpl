/* ng-hot-reload-loader */
(function(__ngHotReloadLoaderAngularGlobal) {
  var angular = module.hot ? (function() {
    var loader = require(<%= corePath %>);
    return loader.decorateAngular({
      angular: __ngHotReloadLoaderAngularGlobal
    });
  })() : __ngHotReloadLoaderAngularGlobal;

  try {
    (function() {/* ng-hot-reload-loader end*/

      <%= source %>

    })();/* ng-hot-reload-loader */
  } finally {
    (function() {
      module.hot.accept(function(err) {
        console.log('accept');
        if (err) {
          console.error(err);
        }
      });
    })();
  }
})(<%= requireAngular %>);
/* ng-hot-reload-loader end */
