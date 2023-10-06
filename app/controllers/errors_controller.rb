class ErrorsController < ApplicationController
  skip_before_action :authorize

  def not_found
    puts 'hello world'
    puts `#{Rails.root}`
    render file: '/opt/render/project/src/client/src/App.js', layout: false
  end

  def internal_server_error
    render status: :internal_server_error
  end
end