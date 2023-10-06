class CatchAllController < ApplicationController
  def catch_all
    render file: "#{Rails.root}/client/src/App.js", layout: false
  end
end
