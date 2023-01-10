@favorites.each do |favorite|
  json.set! favorite.id do
    json.extract! favorite, :id, :user_id, :animal_id
  end
end