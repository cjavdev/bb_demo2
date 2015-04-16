json.array!(@photos) do |photo|
  json.extract! photo, :id, :title, :url, :created_at, :updated_at, :likes_count
  if current_user.likes?(photo)
    json.like do
      json.id Like.find_by(user_id: current_user.id, photo_id: photo.id).id
    end
  end
end

