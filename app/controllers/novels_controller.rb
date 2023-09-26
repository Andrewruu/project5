class NovelsController < ApplicationController

    def index
        novels = @current_user.novels
        render json: novels
    end
    
    def create
        @novel = Novel.new(novel_params)
    
        if @novel.save
          render json: @novel, status: :created
        else
          render json: @novel.errors, status: :unprocessable_entity
        end
      end
    
      private
    
      def novel_params
        params.require(:novel).permit(
          :name,
          :description,
          :image,
          publisher_attributes: [:name, :website],
          translator_attributes: [:name, :website]
        )
      end

end
