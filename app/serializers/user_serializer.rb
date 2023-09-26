class UserSerializer < ActiveModel::Serializer
  attributes :id, :display_name, :email
  
  has_many :novels
  has_many :publishers, through: :novels
  has_many :translators, through: :novels
end
