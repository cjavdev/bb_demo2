BbDemo.Views.PhotoDetail = Backbone.View.extend({
  template: JST['photos/photo_detail'],

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
