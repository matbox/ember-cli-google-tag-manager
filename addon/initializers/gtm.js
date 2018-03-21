export function initialize(app /*, application */) {
  // Do not inject anythin in the router if appId is not present

  var appId = 'GTM-TQM3XTF'

  var router = app.lookup('router:main');
  var gtm = app.lookup('service:gtm')

  router.on('didTransition', function () {
    gtm.trackPageView(this.get('url'));
  });
}

export default {
  name: 'gtm',
  initialize: initialize
};
