class AddRatingToReviews < ActiveRecord::Migration[7.0]
  def change
    add_column :reviews, :rating, :integer, null: false
  end
end
