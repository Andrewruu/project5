class ErrorsController < ApplicationController
  skip_before_action :authorize

  def not_found
    render file: "#{Rails.root}/client/index.js", layout: false
  end

  def internal_server_error
    render status: :internal_server_error
  end
end