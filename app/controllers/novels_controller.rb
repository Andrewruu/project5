class NovelsController < ApplicationController

    def index
        novels = @current_user.novels
        render json: novels
    end
    
    def create
      novel = @current_user.novels.new(novel_params)
    
      publisher_name = params[:novel][:publisher_attributes][:name]
      publisher_website = params[:novel][:publisher_attributes][:website]
      translator_name = params[:novel][:translator_attributes][:name]
      translator_website = params[:novel][:translator_attributes][:website]
    
      publisher = Publisher.find_or_create_by(name: publisher_name, website: publisher_website)
      translator = Translator.find_or_create_by(name: translator_name, website: translator_website)
    
      novel.publisher_id = publisher.id
      novel.translator_id = translator.id
    
      if novel.save
        render json: novel, status: :created
      else
        render json: { errors: novel.errors.full_messages }, status: :unprocessable_entity
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
          publisher_attributes: [:name, :website],
          translator_attributes: [:name, :website]
        )
      end

end
