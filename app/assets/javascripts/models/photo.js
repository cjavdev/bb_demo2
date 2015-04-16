BbDemo.Models.Photo = Backbone.Model.extend({
  urlRoot: '/api/photos',

  like: function () {
    if(!this._like) {
      this._like = new BbDemo.Models.Like()
    }
    return this._like;
  },

  likePhoto: function () {
    this.set('likes_count', this.get('likes_count') + 1);
    this.like().save();
  },

  unLikePhoto: function () {
    this.set('likes_count', this.get('likes_count') - 1);
    this.like().destroy();
    this.like().unset('id');
  },

  liked: function () {
    return this.like().isNew();
  },

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

    if(data.like) {
      this.like().set(data.like);
      delete data.like;
    }
    this.like().set({ photo_id: data.id });
    return data;
  },
});
