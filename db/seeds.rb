# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
ApplicationRecord.transaction do 
  puts "Destroying tables..."
  # Unnecessary if using `rails db:seed:replant`
  User.destroy_all

  puts "Resetting primary keys..."
  # For easy testing, so that after seeding, the first `User` has `id` of 1
  ApplicationRecord.connection.reset_pk_sequence!('users')
  ApplicationRecord.connection.reset_pk_sequence!('organizations')
  ApplicationRecord.connection.reset_pk_sequence!('animals')
  ApplicationRecord.connection.reset_pk_sequence!('favorites')

  puts "Creating users..."
  # Create one user with an easy to remember username, email, and password:
  User.create!(
    username: 'Demo-lition', 
    email: 'demo@user.io', 
    password: 'password'
  )

  # More users
  10.times do 
    User.create!({
      username: Faker::Internet.unique.username(specifier: 3),
      email: Faker::Internet.unique.email,
      password: 'password'
    }) 
  end

  puts "Creating organizations..."
  # Create 5 organizations
  5.times do
    Organization.create!({
      name: Faker::Company.name,
      location: Faker::Address.full_address
    })
  end

  puts "Creating Animals..."
  # Create 15 dogs
  15.times do
    Animal.create!({
      species: "Dog",
      breed: Faker::Creature::Dog.breed,
      size: Faker::Creature::Dog.size,
      gender: Faker::Creature::Dog.gender,
      age: Faker::Creature::Dog.age,
      coat: Faker::Creature::Dog.coat_length,
      name: Faker::Creature::Dog.name,
      organization_id: rand(1..5)
      # organization_id: Organization.find_by(id: rand(1..5))
    })
  end
  # Create 10 cats
  10.times do
    Animal.create!({
      species: "Cat",
      breed: Faker::Creature::Cat.breed,
      name: Faker::Creature::Cat.name,
      organization_id: rand(1..5)
      # organization_id: Organization.find_by(id: rand(1..5)).id
    })
  end

  puts "Done!"
end