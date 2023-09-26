class TranslatorsController < ApplicationController
    skip_before_action :authorize, only: [:index] 
    def index
        render json: Translator.all
    end
end
