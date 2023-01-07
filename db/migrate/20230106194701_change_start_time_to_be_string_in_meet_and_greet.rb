class ChangeStartTimeToBeStringInMeetAndGreet < ActiveRecord::Migration[7.0]
  def change
    change_column :meet_and_greets, :start_time, :string
  end
end
