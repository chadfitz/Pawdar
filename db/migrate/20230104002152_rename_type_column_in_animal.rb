class RenameTypeColumnInAnimal < ActiveRecord::Migration[7.0]
  def change
    rename_column :animals, :type, :species
  end
end
