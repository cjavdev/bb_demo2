class Photo < ActiveRecord::Base
  validates :title, :url, presence: true
  has_many :comments
  has_many :likes
end
