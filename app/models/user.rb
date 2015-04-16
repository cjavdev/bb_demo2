class User < ActiveRecord::Base
  has_many :likes
  has_many :liked_photos, through: :likes, source: :photo

  def likes?(photo)
    liked_photos.include?(photo)
  end
end
