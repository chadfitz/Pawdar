class Api::MeetAndGreetsController < ApplicationController
  before_action :require_logged_in

  def index
    @meet_and_greets = MeetAndGreet.all
    render :index
  end

  def show
    @user = current_user
    @meet_and_greet = current_user.meet_and_greets.find_by(id: params[:id])
    # render 'api/users/meet_and_greets/show'
    render :show
  end

  def create
    @meet_and_greet = MeetAndGreet.new(meet_and_greet_params)
    if @meet_and_greet&.save
      # where do I want to go if they create a meet and greet?
      render :show
    else
      render json: { errors: @meet_and_greet.errors.full_messages }, status: 422
    end
  end

  def update
    @meet_and_greet = current_user.meet_and_greets.find_by(id: params[:id])
    if @meet_and_greet.update(meet_and_greet_params)
      render :show
    else
      render json: { errors: @meet_and_greet.errors.full_messages }, status: 422
    end
  end

  def destroy
    @meet_and_greet = current_user.meet_and_greets.find_by(id: params[:id])
    if @meet_and_greet&.delete
      render :index
    else
      render json: { errors: ['Could not delete']}, status: 422
    end
  end

  private

  def meet_and_greet_params
    params.require(:meet_and_greet).permit(:start_time, :date, :user_id, :animal_id)
  end
end
