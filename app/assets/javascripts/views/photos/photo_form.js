BbDemo.Views.PhotoForm = Backbone.View.extend({
  template: JST['photos/form'],
  tagName: 'form',

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  events: {
    'submit': 'submit'
  },

  submit: function (event) {
    event.preventDefault();
    var data = this.$el.serializeJSON();
    this.model.set(data);
    this.model.save().then(function (lilly) {
      this.collection.add(lilly);
    }.bind(this));
    this.model = new BbDemo.Models.Photo();
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  },
});
