json.user do
  json.extract! @user, :id, :email, :username, :favorites, :meet_and_greets, :created_at, :updated_at
end