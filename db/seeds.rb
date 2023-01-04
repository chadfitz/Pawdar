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
  # 5.times do
  #   Organization.create!({
  #     name: Faker::Company.name,
  #     location: Faker::Address.full_address
  #   })
  # end
  Organization.create!({
    name: "Give Me Shelter Cat Rescue",
    location: "PO Box 411013, San Francisco, CA 94141"
  })
  Organization.create!({
    name: "Purrs and Whiskers",
    location: "New Hartford, NY"
  })
  Organization.create!({
    name: "Caring Hearts Feline Rescue",
    location: "Versailles, KY"
  })
  Organization.create!({
    name: "Teller County Regional Animal Shelter",
    location: "PO Box 904, 308 Weaverville Rd, Divide, CO 80814"
  })
  Organization.create!({
    name: "PALS Haven",
    location: "5113 W. Sargent Rd., Lodi, CA 95242"
  })
  Organization.create!({
    name: "Rescue Dogs Dream, Inc",
    location: "Inverness, FL"
  })
  Organization.create!({
    name: "Tall Tails Rescue",
    location: "Fort Worth, TX"
  })
  Organization.create!({
    name: "Okandogs",
    location: "Cashmere, WA"
  })

  puts "Creating Animals..."
  # Create 15 dogs
  # 15.times do
  #   Animal.create!({
  #     species: "Dog",
  #     breed: Faker::Creature::Dog.breed,
  #     size: Faker::Creature::Dog.size,
  #     gender: Faker::Creature::Dog.gender,
  #     age: Faker::Creature::Dog.age,
  #     coat: Faker::Creature::Dog.coat_length,
  #     name: Faker::Creature::Dog.name,
  #     organization_id: rand(1..5)
  #   })
  # end
  # Create 10 cats
  # 10.times do
  #   Animal.create!({
  #     species: "Cat",
  #     breed: Faker::Creature::Cat.breed,
  #     name: Faker::Creature::Cat.name,
  #     organization_id: rand(1..5)
  #   })
  # end
  Animal.create!({
    species: "Cat",
    breed: "Dilute Calico & Domestic Short Hair Mix",
    size: "Medium",
    gender: "Female",
    age: "Adule",
    color: "Dilute Calico",
    coat: "Short",
    status: "adoptable",
    name: "Chelsea",
    environment: "indoor only",
    organization_id: 1
  })

  Animal.create!({
    species: "Cat",
    breed: "Tabby",
    size: "Medium",
    gender: "Male",
    age: "Adult",
    color: "Tabby (Orange/Red)",
    coat: "Short",
    status: "adoptable",
    name: "Harley",
    environment: "indoor only",
    organization_id: 1
  })

  Animal.create!({
    species: "Cat",
    breed: "Dilute Tortoiseshell & Domestic Short Hair Mix",
    size: "Small",
    gender: "Female",
    age: "Young",
    color: "Dilute Tortoiseshell",
    coat: "Short",
    status: "adoptable",
    name: "Kiwi",
    environment: "indoor only",
    organization_id: 1
  })

  Animal.create!({
    species: "Cat",
    breed: "Domestic Medium Hair",
    size: "Small",
    gender: "Male",
    age: "Young",
    color: "Gray & White",
    coat: "Medium",
    status: "adoptable",
    name: "Jack",
    environment: "indoor only",
    organization_id: 1
  })

  Animal.create!({
    species: "Cat",
    breed: "Domestic Short Hair",
    size: "Medium",
    gender: "Female",
    age: "Kitten",
    color: "Calico, White",
    coat: "Short",
    status: "adoptable",
    name: "Sugar Plum",
    organization_id: 2
  })

  Animal.create!({
    species: "Cat",
    breed: "Domestic Short Hair",
    size: "Medium",
    gender: "Female",
    age: "Young",
    color: "Tabby (Tiger Striped)",
    coat: "Short",
    status: "adoptable",
    name: "Cheetara",
    organization_id: 2
  })

  Animal.create!({
    species: "Cat",
    breed: "Domestic Short Hair",
    size: "Medium",
    gender: "Male",
    age: "Kitten",
    color: "Tabby (Tiger Striped), White",
    coat: "Short",
    status: "adoptable",
    name: "Peppermint",
    organization_id: 2
  })

  Animal.create!({
    species: "Cat",
    breed: "Domestic Short Hair",
    size: "Small",
    gender: "Female",
    age: "Kitten",
    color: "Black",
    status: "adoptable",
    name: "Babee",
    organization_id: 3
  })

  Animal.create!({
    species: "Cat",
    breed: "Domestic Short Hair",
    size: "Small",
    gender: "Female",
    age: "Kitten",
    color: "Black",
    status: "adoptable",
    name: "Treasure",
    environment: "Prefers a home without dogs, children",
    organization_id: 3
  })

  Animal.create!({
    species: "Cat",
    breed: "Domestic Short Hair Mix",
    size: "Medium",
    gender: "Male",
    age: "Kitten",
    color: "Black",
    coat: "Medium",
    status: "adoptable",
    name: "Joker",
    environment: "Good with other cats",
    organization_id: 4
  })

  Animal.create!({
    species: "Cat",
    breed: "Tabby",
    size: "Medium",
    gender: "Male",
    age: "Kitten",
    color: "Tabby (Brown/Chocolate)",
    coat: "Short",
    status: "adoptable",
    name: "Pablano",
    environment: "Good with other cats, children",
    organization_id: 5
  })

  Animal.create!({
    species: "Dog",
    breed: "German Shepherd Dog & Smooth Collie Mix",
    size: "Medium",
    gender: "Female",
    age: "Adult",
    color: "White/Cream",
    coat: "Short",
    status: "adoptable",
    name: "Nikita",
    environment: "Good with other dogs",
    organization_id: 5
  })

  Animal.create!({
    species: "Dog",
    breed: "Mixed Breed",
    size: "Medium",
    gender: "Female",
    age: "Adult",
    color: "Red / Chestnut / Orange, White / Cream",
    coat: "Short",
    status: "adoptable",
    name: "Riri",
    organization_id: 4
  })

  Animal.create!({
    species: "Dog",
    breed: "Mixed Breed",
    size: "Medium",
    gender: "Female",
    age: "Adult",
    color: "Yellow / Tan / Blond / Fawn, White / Cream",
    coat: "Medium",
    status: "adoptable",
    name: "Julie",
    environment: "Prefers a home without children, Good with other dogs",
    organization_id: 4
  })

  Animal.create!({
    species: "Dog",
    breed: "Shepherd Mix",
    size: "Large",
    gender: "Female",
    age: "Adult",
    color: "Yellow / Tan / Blond / Fawn, Black",
    coat: "Medium",
    status: "adoptable",
    name: "Mollie",
    environment: "Prefers a home without cats, children, other animals",
    organization_id: 4
  })

  Animal.create!({
    species: "Dog",
    breed: " Dutch Shepherd Mix",
    size: "Large",
    gender: "Male",
    age: "Adult",
    color: "Brindle, White / Cream",
    coat: "Medium",
    status: "adoptable",
    name: "Kenda",
    environment: "Good with other dogs",
    organization_id: 6
  })

  Animal.create!({
    species: "Dog",
    breed: "Labrador Retriever & Shepherd Mix",
    size: "Medium",
    gender: "Male",
    age: "Adult",
    color: "Golden",
    coat: "Short",
    status: "adoptable",
    name: "Ryder",
    environment: "Good with other dogs, children",
    organization_id: 6
  })

  Animal.create!({
    species: "Dog",
    breed: "Labrador Retriever Mix",
    size: "Large",
    gender: "Female",
    age: "Young",
    color: "Apricot / Beige, White / Cream",
    coat: "Short",
    status: "adoptable",
    name: "Sally",
    environment: "Good with other dogs, children",
    organization_id: 6
  })

  Animal.create!({
    species: "Dog",
    breed: "Cattle Dog & Australian Shepherd Mix",
    size: "Medium",
    gender: "Male",
    age: "Puppy",
    color: "Black",
    coat: "Medium",
    status: "adoptable",
    name: "Robin",
    environment: "Good with other dogs, cats, children",
    organization_id: 7
  })

  Animal.create!({
    species: "Dog",
    breed: "Australian Shepherd & Border Collie Mix ",
    size: "Medium",
    gender: "Male",
    age: "Adult",
    color: "Black, White",
    coat: "Medium",
    status: "adoptable",
    name: "Buttons",
    environment: "Good with other dogs, children",
    organization_id: 7
  })

  Animal.create!({
    species: "Dog",
    breed: "Labrador Retriever Mix",
    size: "Medium",
    gender: "Male",
    age: "Adult",
    color: "Golden",
    coat: "Short",
    status: "adoptable",
    name: "Marley",
    environment: "Good with other dogs, children",
    organization_id: 7
  })

  Animal.create!({
    species: "Dog",
    breed: "Labrador Retriever Mix",
    size: "Medium",
    gender: "Male",
    age: "Puppy",
    color: "Gray & White",
    coat: "Short",
    status: "adoptable",
    name: "Pax",
    environment: "Good with other dogs, cats, children",
    organization_id: 7
  })

  Animal.create!({
    species: "Dog",
    breed: "Rat Terrier Mix",
    size: "Small",
    gender: "Female",
    age: "Puppy",
    color: "Golden, White / Cream",
    coat: "Short",
    status: "adoptable",
    name: "Holly",
    environment: "Good with other dogs, cats, children",
    organization_id: 8
  })

  Animal.create!({
    species: "Dog",
    breed: "Husky & German Shepherd Dog Mix",
    size: "Large",
    gender: "Female",
    age: "Puppy",
    color: "Golden, Bicolor",
    coat: "Medium",
    status: "adoptable",
    name: "Vetta",
    environment: "Good with other dogs",
    organization_id: 8
  })

  Animal.create!({
    species: "Dog",
    breed: "Husky & German Shepherd Dog Mix",
    size: "Large",
    gender: "Male",
    age: "Puppy",
    color: "Biclor",
    coat: "Long",
    status: "adoptable",
    name: "Chevy",
    environment: "Good with other dogs",
    organization_id: 8
  })

  Animal.create!({
    species: "Dog",
    breed: "Husky Mix",
    size: "Large",
    gender: "Female",
    age: "Puppy",
    color: "Gray / Blue / Silver, Black, White / Cream",
    coat: "Medium",
    status: "adoptable",
    name: "Nova",
    environment: "Good with other dogs, children",
    organization_id: 8
  })

  puts "Done!"
end