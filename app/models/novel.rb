class Novel < ApplicationRecord
    belongs_to :user
    belongs_to :publisher
    belongs_to :translator

    validates :name, presence: true, uniqueness: true
    validates :image, format: {with: /\.(png|jpg|jpeg)\Z/i}
    validates :description, presence: true, length: {minimum: 15, maximum: 5000}
    
    accepts_nested_attributes_for :publisher
    accepts_nested_attributes_for :translator

end
