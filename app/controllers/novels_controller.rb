class NovelsController < ApplicationController

    def index
        novels = @current_user.novels
        render json: novels
    end
    
    def create
      novel = @current_user.novels.create!(novel_params)
      render json: novel, status: :created
    end
    
    def update
      novel = @current_user.novels.find_by(id: params[:id])
    
      if novel.nil?
        render json: { error: "Novel not found!" }, status: :not_found
      else
        if novel.update(novel_params)
          render json: novel, status: :ok
        else
          render json: {errors: novel.errors.full_messages}, status: :unprocessable_entity
        end
      end

    end
    
    
    
        
    def destroy
      novel = @current_user.novels.find_by(id: params[:id])
      
      if novel.nil?
        render json: {error: "Novel not found!"}, status: :not_found
      else
        novel.destroy
        render json: {message: 'Novel deleted successfully.'},status: :ok
      end
    end
    
      private
    
      def novel_params
        params.require(:novel).permit(
          :name,
          :description,
          :image,
          :publisher_id,
          :translator_id,
          publisher_attributes: [:id, :name, :website],
          translator_attributes: [:id, :name, :website]
        )
      end

end
