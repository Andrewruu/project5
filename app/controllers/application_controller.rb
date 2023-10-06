class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  
    before_action :authorize
  
    private
  
    def authorize
  
      @current_user = current_user
      return render json: { errors: ["Not authorized"] }, status: :unauthorized unless session.include? :user_id
      
    end
  
    def render_unprocessable_entity_response(exception)
      render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end
  
    def current_user
      @current_user ||= User.find_by(id: session[:user_id])
    end
    private

    def record_not_found
      redirect_to not_found_path
    end
end
