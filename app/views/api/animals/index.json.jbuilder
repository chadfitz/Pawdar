json.array! @animals do |animal|
  json.set! animal.id do
    json.extract! animal, :species, :breed, :size, :gender, :age, :color, :coat, :status, :name, :description, :organization_id
  end
  # json.photoUrl url_for(animal.photo)
end