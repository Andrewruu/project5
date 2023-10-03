class UserSerializer < ActiveModel::Serializer
  attributes :id, :display_name, :email, :novels
  
  def novels
    object.novels.map {|novel|{
      id: novel.id,
      image: novel.image,
      name: novel.name,
      publisher_id: novel.publisher_id,
      translator_id: novel.translator_id,
      user_id: novel.user_id,
      publisher: {
        id: novel.publisher.id,
        name: novel.publisher.name,
        website: novel.publisher.website
      },
      translator: {
        id: novel.translator.id,
        name: novel.translator.name,
        website: novel.translator.website
      }
    }
  }
  end
end
