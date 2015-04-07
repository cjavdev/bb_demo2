BbDemo.Views.PhotosIndex = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addPhotoView);
    this._subviews = { '.photos': [], '.photo-form': [] };

    var view = new BbDemo.Views.PhotoForm({
      model: new BbDemo.Models.Photo(),
      collection: this.collection
    });
    this._subviews['.photo-form'].push(view);
  },

  template: JST["photos/photos_index"],

  events: {
    'click img': 'showUrl'
  },

  showUrl: function (event) {
    console.log($(event.currentTarget).data('id'));
  },

  remove: function () {
    for(var selector in this._subviews) {
      this._subviews[selector].forEach(function (view) {
        view.remove();
      });
    }
    Backbone.View.prototype.remove.call(this);
  },

  addPhotoFormView: function () {
    var selector = '.photo-form';
    this.$(selector).html(this._subviews[selector][0].render().$el);
    this._subviews[selector][0].delegateEvents();
  },

  addPhotoView: function (photo) {
    var view = new BbDemo.Views.PhotoIndexItem({
      model: photo
    });
    this._subviews['.photos'].push(view);
    // var $li = $('<li><img src="' + photo.get('url') + '"></li>');
    this.$('.photos').prepend(view.render().$el);
  },

  render: function () {
    console.log('rendering photos index');
    var content = this.template();
    this.$el.html(content);

    this.collection.each(function (photo) {
      this.addPhotoView(photo);
    }, this);
    this.addPhotoFormView();
    return this;
  },
});
