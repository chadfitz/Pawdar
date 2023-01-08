@organizations.each do |organization|
  json.set! organization.id do
    json.extract! organization, :id, :name, :location
  end
end