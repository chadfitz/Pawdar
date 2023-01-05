# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ApplicationRecord.transaction do 
  require "open-uri"
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
  #1
  Organization.create!({
    name: "Give Me Shelter Cat Rescue",
    location: "PO Box 411013, San Francisco, CA 94141"
  })
  #2
  Organization.create!({
    name: "Purrs and Whiskers",
    location: "New Hartford, NY"
  })
  #3
  Organization.create!({
    name: "Caring Hearts Feline Rescue",
    location: "Versailles, KY"
  })
  #4
  Organization.create!({
    name: "Teller County Regional Animal Shelter",
    location: "PO Box 904, 308 Weaverville Rd, Divide, CO 80814"
  })
  #5
  Organization.create!({
    name: "PALS Haven",
    location: "5113 W. Sargent Rd., Lodi, CA 95242"
  })
  #6
  Organization.create!({
    name: "Rescue Dogs Dream, Inc",
    location: "Inverness, FL"
  })
  #7
  Organization.create!({
    name: "Tall Tails Rescue",
    location: "Fort Worth, TX"
  })
  #8
  Organization.create!({
    name: "Okandogs",
    location: "Cashmere, WA"
  })
  #9
  Organization.create!({
    name: "Love & Second Chances",
    location: "San Ramon, CA"
  })

  puts "Creating Animals..."

  cat_1 = Animal.create!({
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

  cat_2 = Animal.create!({
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

  cat_3 = Animal.create!({
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

  cat_4 = Animal.create!({
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

  cat_5 = Animal.create!({
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

  cat_6 = Animal.create!({
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

  cat_7 = Animal.create!({
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

  cat_8 = Animal.create!({
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

  cat_9 = Animal.create!({
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

  cat_10 = Animal.create!({
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

  cat_11 = Animal.create!({
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

  dog_1 = Animal.create!({
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

  dog_2 = Animal.create!({
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

  dog_3 = Animal.create!({
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

  dog_4 = Animal.create!({
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

  dog_5 = Animal.create!({
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

  dog_6 = Animal.create!({
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

  dog_7 = Animal.create!({
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

  dog_8 = Animal.create!({
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

  dog_9 = Animal.create!({
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

  dog_10 = Animal.create!({
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

  dog_11 = Animal.create!({
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

  dog_12 = Animal.create!({
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

  dog_13 = Animal.create!({
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

  dog_14 = Animal.create!({
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

  dog_15 = Animal.create!({
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

  dog_16 = Animal.create!({
    species: "Dog",
    breed: "Jindo Mix",
    size: "Medium",
    gender: "Male",
    age: "Puppy",
    color: "Apricot / Beige, White / Cream",
    coat: "Medium",
    status: "adoptable",
    name: "Pickle",
    environment: "Good with other dogs",
    organization_id: 9
  })

  dog_17 = Animal.create!({
    species: "Dog",
    breed: "Jindo Mix",
    size: "Medium",
    gender: "Female",
    age: "Puppy",
    color: "Black / Brown",
    coat: "Medium",
    status: "adoptable",
    name: "Bana",
    environment: "Good with other dogs, children",
    organization_id: 9
  })

  puts "Attaching photos to animals..."
  cat_1.photo.attach(io: URI.open("https://pawdar-dev.s3.us-west-1.amazonaws.com/cat_1_chelsea.jpg"), filename: "cat_1_chelsea.jpg")
  cat_2.photo.attach(io: URI.open("https://pawdar-dev.s3.us-west-1.amazonaws.com/cat_2_harley.jpg"), filename: "cat_2_harley.jpg")
  cat_3.photo.attach(io: URI.open("https://pawdar-dev.s3.us-west-1.amazonaws.com/cat_3_kiwi.jpg"), filename: "cat_3_kiwi.jpg")
  cat_4.photo.attach(io: URI.open("https://pawdar-dev.s3.us-west-1.amazonaws.com/cat_4_jack.jpg"), filename: "cat_4_jack.jpg")
  cat_5.photo.attach(io: URI.open("https://pawdar-dev.s3.us-west-1.amazonaws.com/cat_5_sugar_plum.jpg"), filename: "cat_5_sugar_plum.jpg")
  cat_6.photo.attach(io: URI.open("https://pawdar-dev.s3.us-west-1.amazonaws.com/cat_6_cheetara.jpg"), filename: "cat_6_cheetara.jpg")
  cat_7.photo.attach(io: URI.open("https://pawdar-dev.s3.us-west-1.amazonaws.com/cat_7_peppermint.jpg"), filename: "cat_7_peppermint.jpg")
  cat_8.photo.attach(io: URI.open("https://pawdar-dev.s3.us-west-1.amazonaws.com/cat_8_babee.jpg"), filename: "cat_8_babee.jpg")
  cat_9.photo.attach(io: URI.open("https://pawdar-dev.s3.us-west-1.amazonaws.com/cat_9_treasure.jpg"), filename: "cat_9_treasure.jpg")
  cat_10.photo.attach(io: URI.open("https://pawdar-dev.s3.us-west-1.amazonaws.com/cat_10_joker.jpg"), filename: "cat_10_joker.jpg")
  cat_11.photo.attach(io: URI.open("https://pawdar-dev.s3.us-west-1.amazonaws.com/cat_11_pablano.jpg"), filename: "cat_11_pablano.jpg")
  dog_1.photo.attach(io: URI.open("https://pawdar-dev.s3.us-west-1.amazonaws.com/dog_1_nikita.jpg"), filename: "dog_1_nikita.jpg")
  dog_2.photo.attach(io: URI.open("https://pawdar-dev.s3.us-west-1.amazonaws.com/dog_2_riri.jpg"), filename: "dog_2_riri.jpg")
  dog_3.photo.attach(io: URI.open("https://pawdar-dev.s3.us-west-1.amazonaws.com/dog_3_Julie.jpg"), filename: "dog_3_Julie.jpg")
  dog_4.photo.attach(io: URI.open("https://pawdar-dev.s3.us-west-1.amazonaws.com/dog_4_mollie.jpg"), filename: "dog_4_mollie.jpg")
  dog_5.photo.attach(io: URI.open("https://pawdar-dev.s3.us-west-1.amazonaws.com/dog_5_kenda.jpg"), filename: "dog_5_kenda.jpg")
  dog_6.photo.attach(io: URI.open("https://pawdar-dev.s3.us-west-1.amazonaws.com/dog_6_ryder.jpg"), filename: "dog_6_ryder.jpg")
  dog_7.photo.attach(io: URI.open("https://pawdar-dev.s3.us-west-1.amazonaws.com/dog_7_sally.jpg"), filename: "dog_7_sally.jpg")
  dog_8.photo.attach(io: URI.open("https://pawdar-dev.s3.us-west-1.amazonaws.com/dog_8_robin.jpg"), filename: "dog_8_robin.jpg")
  dog_9.photo.attach(io: URI.open("https://pawdar-dev.s3.us-west-1.amazonaws.com/dog_9_buttons.jpg"), filename: "dog_9_buttons.jpg")
  dog_10.photo.attach(io: URI.open("https://pawdar-dev.s3.us-west-1.amazonaws.com/dog_10_marley.jpg"), filename: "dog_10_marley.jpg")
  dog_11.photo.attach(io: URI.open("https://pawdar-dev.s3.us-west-1.amazonaws.com/dog_11_pax.jpg"), filename: "dog_11_pax.jpg")
  dog_12.photo.attach(io: URI.open("https://pawdar-dev.s3.us-west-1.amazonaws.com/dog_12_holly.jpg"), filename: "dog_12_holly.jpg")
  dog_13.photo.attach(io: URI.open("https://pawdar-dev.s3.us-west-1.amazonaws.com/dog_13_vetta.jpg"), filename: "dog_13_vetta.jpg")
  dog_14.photo.attach(io: URI.open("https://pawdar-dev.s3.us-west-1.amazonaws.com/dog_14_chevy.jpg"), filename: "dog_14_chevy.jpg")
  dog_15.photo.attach(io: URI.open("https://pawdar-dev.s3.us-west-1.amazonaws.com/dog_15_nova.jpg"), filename: "dog_15_nova.jpg")
  dog_16.photo.attach(io: URI.open("https://pawdar-dev.s3.us-west-1.amazonaws.com/dog_16_pickle.jpg"), filename: "dog_16_pickle.jpg")
  dog_17.photo.attach(io: URI.open("https://pawdar-dev.s3.us-west-1.amazonaws.com/dog_17_bana.jpg"), filename: "dog_17_bana.jpg")
  puts "Done!"
end