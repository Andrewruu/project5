class CatchAllController < ApplicationController
  skip_before_action :authorize

  def catch_all
    file_path = "#{Rails.root}/client/src/App.js"
    puts "File Path: #{file_path}"
  
    render file: file_path, layout: false
  end
end
