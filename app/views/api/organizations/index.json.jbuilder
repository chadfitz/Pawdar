@organizations.each do |organization|
  json.set! organization.id do
    json.extract! organization, :id, :name, :location, :animals
  end
end