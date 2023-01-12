class Api::AnimalsController < ApplicationController
  def index
    @animals = Animal.all
    render :index
  end

  def show
    @animal = Animal.find_by(id: params[:id])
  end

  def search
    # debugger
    query = params[:query]
    @animals = Animal.where('name ILIKE ? OR species ILIKE ? OR breed ILIKE ? OR size ILIKE ? OR gender ILIKE ? OR age ILIKE ? OR color ILIKE ? OR coat ILIKE ? OR status ILIKE ?', 
                            "%#{query}%", "%#{query}%", "%#{query}%", "%#{query}%", "%#{query}%", "%#{query}%", "%#{query}%", "%#{query}%", "%#{query}%"
                          )
    if @animals.length > 0
      render :index
    else
      render json: ["Sorry, we did not find any results for #{query}, try a different search"], status: 404
    end
  end

  private

  def animal_params
    params.require(:user).permit(:species, :breed, :size, :gender, :age, :color, :coat, :status, :name, :description, :organization_id)
  end
end
