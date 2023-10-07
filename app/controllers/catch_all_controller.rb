class CatchAllController < ActionController::Base

  def catch_all  
    render file: 'public/index.html'
  end
end
