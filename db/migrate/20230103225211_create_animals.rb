class CreateAnimals < ActiveRecord::Migration[7.0]
  def change
    create_table :animals do |t|
      t.string :type, null: false
      t.string :breed
      t.string :size
      t.string :gender
      t.string :age
      t.string :color
      t.string :coat
      t.string :status
      t.string :name
      t.string :description
      t.string :environment
      t.references :organization, null: false, foreign_key: true

      t.timestamps
    end
  end
end
