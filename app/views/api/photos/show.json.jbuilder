json.extract!(@photo, :id, :title, :url, :created_at, :updated_at)
json.comments @photo.comments, :id, :body, :photo_id
