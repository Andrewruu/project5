class CreateTranslators < ActiveRecord::Migration[7.0]
  def change
    create_table :translators do |t|
      t.string :name
      t.string :website

      t.timestamps
    end
  end
end
