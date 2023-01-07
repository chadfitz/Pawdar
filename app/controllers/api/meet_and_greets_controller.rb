class Api::MeetAndGreetsController < ApplicationController
  before_action :require_logged_in

  def index
    # debugger
    @meet_and_greets = current_user.meet_and_greets
    render :index
  end

  def show
    @meet_and_greet = current_user.meet_and_greets.find_by(id: params[:id])
    render :show
  end


  def update
    @meet_and_greet = current_user.meet_and_greets.find_by(id: params[:id])
    @meet_and_greet.user_id = current_user.id
    debugger
    if @meet_and_greet.update(meet_and_greet_params)
      render :show
    else
      render json: { errors: @meet_and_greet.errors.full_messages }, status: 422
    end
  end

  def destroy
    @meet_and_greet = current_user.meet_and_greets.find_by(id: params[:id])
    if @meet_and_greet&.delete
    else
      render json: { errors: ['Could not delete']}, status: 422
    end
  end
  
  def create
    @meet_and_greet = MeetAndGreet.new(meet_and_greet_params)
    @meet_and_greet.user_id = current_user.id
    if @meet_and_greet && @meet_and_greet.save!
      render :show
    else
      render json: { errors: @meet_and_greet.errors.full_messages }, status: 422
    end
  end

  private

  def meet_and_greet_params
    params.require(:meet_and_greet).permit(:start_time, :date, :animal_id)
  end
end
