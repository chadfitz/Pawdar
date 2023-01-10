class Api::FavoritesController < ApplicationController
  before_action :require_logged_in

  def index
    @favorites = current_user.favorites
  end

  def show
    @favorite = Favorite.new(favorite_params)
    @favorite.user_id = current_user.id
    if @favorite&.save!
      render :show
    else
      render json: { errors: @favorite.errors.full_messages }, status: 422
    end
  end

  def destroy
    @favorite = current_user.favorites.find_by(id: params[:id])
    unless @favorite&.delete
      render json: { errors: ['Could not delete'] }, status: 422
    end
  end

  private

  def favorite_params
    params.require(:favorite).permit(:animal_id)
  end
end
