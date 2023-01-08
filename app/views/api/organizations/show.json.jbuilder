json.extract! @organization, :id, :name, :location
json.set! :animals do
  @organization.animals.each do |animal|
    json.set! animal.id do
      json.extract! animal, :id, :species, :breed, :size, :gender, :age, :color, :coat, :status, :name
      json.photoUrl animal.photo.url
    end
  end
end

# json.extract! @organization, :id, :name, :location, :animals