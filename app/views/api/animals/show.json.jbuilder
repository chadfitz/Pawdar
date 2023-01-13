json.animal do 
  json.extract! @animal, :id, :name, :species, :breed, :size, :gender, :age, :color, :coat, :status, :environment, :organization_id
  json.photoUrl @animal.photo.url
  if @animal.favorited_users.include?(current_user)
    json.liked true
  else
    json.liked false
  end
end