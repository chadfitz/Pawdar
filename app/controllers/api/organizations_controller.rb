class Api::OrganizationsController < ApplicationController
  def index
    @organizations = Organization.all
    render :index
  end

  def show
    @organization = Organization.find_by(id: params[:id]) 
  end
end
