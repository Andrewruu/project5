class CreateNovels < ActiveRecord::Migration[7.0]
  def change
    create_table :novels do |t|
      t.string :name
      t.string :image
      t.text :description
      t.integer :user_id
      t.integer :publisher_id
      t.integer :translator_id

      t.timestamps
    end
  end
end
