BbDemo.Collections.Photos = Backbone.Collection.extend({
  url: '/api/photos',
  model: BbDemo.Models.Photo,

  getOrFetch: function (id) {
    var model = this.get(id);
    if(model) {
      model.fetch();
    } else {
      model = new BbDemo.Models.Photo({ id: id });
      model.fetch({
        success: function () {
          this.add(model);
        }.bind(this),
      });
    }
    return model;
  },
});
