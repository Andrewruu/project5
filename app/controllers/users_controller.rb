class UsersController < ApplicationController
    skip_before_action :authorize, only: :create
    
    # def index
    #   render json: User.all
    # end
    
    def create
        user = User.create(user_params)
        if user.valid?
          session[:user_id] = user.id
          render json: user, status: :created
        else
          render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show

      render json: @current_user, serializer: UserSerializer

    end

    def update
        user = User.find(params[:id])
        if user.nil?
          render json: {error: "User Not Found"}, status: :not_found          
        elsif user.update(user_params)
          render json: user, status: :ok
        else
          render json: { errors: user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def destroy
      user = User.find(params[:id])
    
      if user.nil?
        render json: {error: "User Not found"}, status: :not_found
      else
        user.user_products.destroy_all
        user.destroy
        render json: {message: "User deleted"}, status: :ok
      end
    
    end

    private

    # def user_params
    #     params.permit(:display_name, :email, :password)
    # end

    def user_params
        params.require(:user).permit(:display_name, :email, :password)
    end

end
