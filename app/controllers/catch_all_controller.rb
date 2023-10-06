class CatchAllController < ApplicationController
  skip_before_action :authorize

  def catch_all  
    render file: 'public/index.html'
  end
end
