BbDemo.Views.PhotoIndexItem = Backbone.View.extend({
  template: JST["photos/photo_index_item"],
  tagName: 'li',
  className: 'list-group-item',

  events: {
    'click button': 'destroyPhoto',
    'click img': 'gotoImg'
  },

  gotoImg: function () {
    Backbone.history.navigate('/photos/' + this.model.id, { trigger: true });
  },

  destroyPhoto: function () {
    this.model.destroy();
    this.remove();
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var content = this.template({
      photo: this.model
    });
    this.$el.html(content);
    return this;
  },
});
