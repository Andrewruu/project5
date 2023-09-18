class User < ApplicationRecord
    has_many :novels
    has_many :translators through :novels
    has_many :publishers through :novels
    
    validates :dispaly_name, presence: true
    validates :email, presence: true, uniqueness: true

    has_secure_password

end
