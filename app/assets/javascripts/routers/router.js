BbDemo.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.photos = new BbDemo.Collections.Photos();
    this.photos.fetch();
    this.$rootEl = options.$rootEl;
  },

  routes: {
    '': 'photosIndex',
    'photos': 'photosIndex',
    'photos/new': 'photoDetail',
    'photos/:id': 'photoDetail',
  },

  photosIndex: function () {
    var v = new BbDemo.Views.PhotosIndex({
      collection: this.photos
    });

    this._swapView(v);
  },

  photoDetail: function (id) {
    var p = this.photos.getOrFetch(id);

    var v = new BbDemo.Views.PhotoDetail({
      model: p
    });

    this._swapView(v);
  },

  _swapView: function (view) {
    if(this._currentView) {
      this._currentView.remove();
    }
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
