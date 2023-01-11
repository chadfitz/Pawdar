json.user do
  json.extract! @user, :id, :email, :username, :favorites, :created_at, :updated_at
end