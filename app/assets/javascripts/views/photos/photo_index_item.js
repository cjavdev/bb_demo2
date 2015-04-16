BbDemo.Views.PhotoIndexItem = Backbone.View.extend({
  template: JST["photos/photo_index_item"],
  tagName: 'li',
  className: 'list-group-item',

  events: {
    'click .destroy': 'destroyPhoto',
    'click .like': 'likePhoto',
    'click .unlike': 'unLikePhoto',
    'click img': 'gotoImg'
  },

  gotoImg: function () {
    Backbone.history.navigate('/photos/' + this.model.id, { trigger: true });
  },

  likePhoto: function () {
    this.model.likePhoto();
  },

  unLikePhoto: function () {
    this.model.unLikePhoto();
  },

  destroyPhoto: function () {
    this.model.destroy();
    this.remove();
  },

  initialize: function () {
    this.listenTo(this.model, 'sync change:likes_count', this.render);
    this.listenTo(this.model.like(), 'sync change:id', this.render);
  },

  render: function () {
    console.log(this.model.like().attributes);
    var content = this.template({
      photo: this.model
    });
    this.$el.html(content);
    return this;
  },
});
