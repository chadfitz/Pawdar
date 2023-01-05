class CreateMeetAndGreets < ActiveRecord::Migration[7.0]
  def change
    create_table :meet_and_greets do |t|
      t.time :start_time, null: false
      t.date :date, null: false
      t.references :user, null: false, foreign_key: true
      t.references :animal, null: false, foreign_key: true

      t.timestamps
    end
  end
end
