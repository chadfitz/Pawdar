json.animal do 
  json.extract! @animal, :id, :species, :breed, :size, :gender, :age, :color, :coat, :status, :name, :organization_id
  json.photoUrl @animal.photo.url
end