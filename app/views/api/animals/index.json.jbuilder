@animals.each do |animal|
  json.set! animal.id do
    json.extract! animal, :id, :name, :species, :breed, :size, :gender, :age, :color, :coat, :status, :environment, :organization_id
    json.photoUrl animal.photo.url
  end
end