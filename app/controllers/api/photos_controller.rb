class Api::PhotosController < ApplicationController
  def index
    @photos = Photo.all
    render :index
  end

  def show
    @photo = Photo.find(params[:id])
    render :show
  end

  def edit
    render text: "i didnt make it here"
  end

  def update
    @photo = Photo.find(params[:id])

    if @photo.update(photo_params)
      render json: @photo
    else
      render json: @photo.errors.full_messages, status: :unprocessable_entity
    end
  end

  def create
    @photo = Photo.new(photo_params)

    if @photo.save
      render :show
    else
      render json: @photo.errors.full_messages, status: :unprocessable_entity
    end
  end

  private

  def photo_params
    params.require(:photo).permit(:title, :url)
  end
end
