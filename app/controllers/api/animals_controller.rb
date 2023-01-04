class Api::AnimalsController < ApplicationController
  def index
    @animals = Animal.all
    render :index
  end

  def show
    @animal = Animal.find_by(id: params[:id])
  end

  private

  def animal_params
    params.require(:user).permit(:species, :breed, :size, :gender, :age, :color, :coat, :status, :name, :description, :organization_id)
  end
end
