BbDemo.Collections.Comments = Backbone.Collection.extend({
  model: BbDemo.Models.Comment,
  url: '/api/comments',

  initialize: function (models, options) {
    this.photo = options.photo;
  },
});
