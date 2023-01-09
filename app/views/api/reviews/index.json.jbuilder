@reviews.each do |review|
  json.set! review.id do
    json.extract! review, :id, :body, :user_id, :organization_id
  end
end