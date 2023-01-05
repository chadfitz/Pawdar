json.animal do 
  json.extract! @animal, :id, :species, :breed, :size, :gender, :age, :color, :coat, :status, :name
  json.photoUrl @animal.photo.url
end