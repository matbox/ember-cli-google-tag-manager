export function initialize(container /*, application */) {
  // Do not inject anythin in the router if appId is not present

  var appId = 'GTM-TQM3XTF'

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
