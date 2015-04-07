BbDemo.Models.Photo = Backbone.Model.extend({
  urlRoot: '/api/photos',

  comments: function () {
    if(!this._comments) {
      this._comments = new BbDemo.Collections.Comments([], { photo: this });
    }
    return this._comments;
  },

  parse: function (data) {
    if(data.comments) {
      this.comments().set(data.comments, { parse: true });
      delete data.comments;
    }
    return data;
  },
});
