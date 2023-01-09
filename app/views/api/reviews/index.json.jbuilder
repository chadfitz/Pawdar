@reviews.each do |review|
  json.set! review.id do
    json.extract! review, :id, :rating, :body, :user_id, :organization_id
  end
end