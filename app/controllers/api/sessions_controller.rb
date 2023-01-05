class Api::SessionsController < ApplicationController
  
  def show
    if current_user
      @user = current_user
      render 'api/users/show'
    else
      render json: { user: nil }
    end
  end

  def create
    @user = User.find_by_credentials(params[:credential], params[:password])
    if @user 
      login!(@user)
      render 'api/users/show'
    else
      render json: { errors: ['The provided credentials were invalid']}, status: 422 #:unauthorized
    end
  end

  def destroy
    logout!
    render json: { message: 'success' }
  end

  private
  def user_params
    params.require(:user).permit(:credential, :password)
  end
  
end
