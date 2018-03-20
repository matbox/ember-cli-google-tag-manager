/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-google-tag-manager',
  contentFor: function(type, config){
    var app_config = Ember.getOwner(this).resolveRegistration('config:environment');
    var config = app_config['googleTagManager']
    var appId = config && config.appId

    if (!appId) {
      return ''
    }

    if (type === 'head'){
      return "<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','" + appId + "');</script>";
    } else if (type === 'body'){
      return '<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=' + appId + ' height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>';
    }
  }
};
