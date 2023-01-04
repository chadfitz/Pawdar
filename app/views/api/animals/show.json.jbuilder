# json.organization_id @animal.organization_id
json.animal do 
  json.set! @animal.id do
    json.extract! @animal, :id, :species, :breed, :size, :gender, :age, :color, :coat, :status, :name
  end
end