Comment.destroy_all
Photo.destroy_all

p1 = Photo.create(title: "first photo", url: "http://allgiftsconsidered.com/wp-content/uploads/2012/09/15-success-kid-memes.jpg")
p1.comments.create(body: "first comment")
p1.comments.create(body: "second comment")
