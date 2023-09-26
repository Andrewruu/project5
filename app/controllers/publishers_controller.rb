class PublishersController < ApplicationController
    def index
        render json: Publisher.all
    end
end
  