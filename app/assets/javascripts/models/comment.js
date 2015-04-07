BbDemo.Models.Comment = Backbone.Model.extend({
  urlRoot: '/api/comments',

  parse: function (data) {
    return data;
  },

});
