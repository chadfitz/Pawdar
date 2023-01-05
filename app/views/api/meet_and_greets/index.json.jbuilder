@meet_and_greets.each do |meet_and_greet|
  json.set! meet_and_greet.id do
    json.extract! meet_and_greet, :id, :start_time, :date, :user_id, :animal_id
  end
end