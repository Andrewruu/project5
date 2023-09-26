class Translator < ApplicationRecord
    has_many :novels
    has_many :publishers, through: :novels

    validates :name, presence: true, uniqueness: true
    validates :website, presence: true
end
