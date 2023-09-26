class NovelSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :publisher_id, :translator_id, :name, :description, :image
end
