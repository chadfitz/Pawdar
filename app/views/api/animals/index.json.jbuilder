# json.array! @animals do |animal|
#   json.set! animal.id do
#     json.extract! animal, :species, :breed, :size, :gender, :age, :color, :coat, :status, :name, :description, :organization_id
#   end
#   # json.photoUrl url_for(animal.photo)
# end

json.array! @posts do |post|
  json.extract! post, :id, :title
  json.photoUrl url_for(post.photo)
end