class Publisher < ApplicationRecord
    has_many :novels
    has_many :translators, through: :novels

    validates :name, presence: true, uniqueness: true
    validates :website, presence: true
end
