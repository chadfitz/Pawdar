class Api::ReviewsController < ApplicationController
  before_action :require_logged_in, only: [:create, :update, :destroy]

  def index
    @reviews = Review.where(organization_id: params[:organization_id])
    render :index
  end

  def show
    @review = Review.find_by(id: params[:id])
    render :show
  end

  def create
    @review = Review.new(review_params)
    @review.user_id = current_user.id
    if @review&.save!
      render :show
    else
      render json: { errors: @review.errors.full_messages }, status: 422
    end
  end

  def update
    @review = current_user.reviews.find_by(id: params[:id])
    @review.user_id = current_user.id
    if @review.update(review_params)
      render :show  
    else
      render json: { errors: @review.errors.full_messages }, status: 422
    end
  end

  def destroy
    @review = current_user.reviews.find_by(id: params[:id])
    unless @review&.delete
      render json: { errors: ['Could not delete'] }, status: 422
    end
  end

  private

  def review_params
    params.require(:review).permit(:rating, :body, :organization_id)
  end
end
