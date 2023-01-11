class AddIndexToFavorite < ActiveRecord::Migration[7.0]
  def change
    add_index :favorites, [:animal_id, :user_id], unique: true
  end
end
