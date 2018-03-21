export function initialize(container /*, application */) {
  // Do not inject anythin in the router if appId is not present
  import app_config from 'ember-get-config';
  var config = app_config.googleTagManager
  var appId = config && config.appId
  if (!appId) {
    return
  }

  var router = container.lookup('router:main');
  var gtm = container.lookup('service:gtm')

  router.on('didTransition', function () {
    gtm.trackPageView(this.get('url'));
  });
}

export default {
  name: 'gtm',
  initialize: initialize
};
