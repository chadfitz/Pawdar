class ChangeBodyInReviews < ActiveRecord::Migration[7.0]
  def change
    change_column :reviews, :body, :string, null: true
  end
end
