class RemoveDescriptionFromAnimals < ActiveRecord::Migration[7.0]
  def change
    remove_column :animals, :description
  end
end
