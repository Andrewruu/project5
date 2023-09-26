class User < ApplicationRecord
    has_many :novels
    has_many :translators, through: :novels
    has_many :publishers, through: :novels
    
    validates :display_name, presence: true
    validates :email, presence: true, uniqueness: true, format: { with: /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i }

    has_secure_password

end
