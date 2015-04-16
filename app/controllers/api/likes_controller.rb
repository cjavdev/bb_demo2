class Api::LikesController < ApplicationController
  def create
    @like = current_user.likes.new(like_params)

    if @like.save
      render json: @like
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = current_user.likes.find(params[:id])
    @like.destroy
    render json: { message: 'destroyed!' }
  end

  private

  def like_params
    params.require(:like).permit(:photo_id)
  end
end
