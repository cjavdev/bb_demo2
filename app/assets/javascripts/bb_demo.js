window.BbDemo = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    // var photos = window.photos = new BbDemo.Collections.Photos();
    // photos.fetch();
    new BbDemo.Routers.Router({
      $rootEl: $('#main')
    });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  BbDemo.initialize();
});


// https://fbstatic.facebook.com:9000/me/photos?id=7#fun/fun
//
// protocol/scheme
// subdomain
// domain
// tld
// port
// path
// query string
