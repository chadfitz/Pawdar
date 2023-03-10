# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# ApplicationRecord.transaction do 
  require "open-uri"
  puts "Destroying tables..."
  # Unnecessary if using `rails db:seed:replant`
  MeetAndGreet.destroy_all
  Favorite.destroy_all
  Review.destroy_all
  Animal.destroy_all
  Organization.destroy_all
  User.destroy_all

  puts "Resetting primary keys..."
  # For easy testing, so that after seeding, the first `User` has `id` of 1
  ApplicationRecord.connection.reset_pk_sequence!('users')
  ApplicationRecord.connection.reset_pk_sequence!('organizations')
  ApplicationRecord.connection.reset_pk_sequence!('animals')
  ApplicationRecord.connection.reset_pk_sequence!('favorites')

  puts "Creating users..."
  #1
  User.create!(
    username: 'Demo-lition', 
    email: 'demo@user.io', 
    password: 'password'
  )
  #2
  User.create!(
    username: 'CatQueen', 
    email: 'cats@gmail.com', 
    password: '123456'
  )
  #3
  User.create!(
    username: 'Dog-Dude', 
    email: 'dogs@gmail.com', 
    password: 'Doggies'
  )
  #4
  User.create!(
    username: 'PuppyPower', 
    email: 'pups@gmail.com', 
    password: 'Puppies'
  )
  #5
  User.create!(
    username: 'Kitty-Kat', 
    email: 'kits@gmail.com', 
    password: 'Kitties'
  )
  #6
  User.create!(
    username: 'BoopTheSnoot', 
    email: 'boop@gmail.com', 
    password: 'Boopman64'
  )
  #7
  User.create!(
    username: 'Cat-Dad', 
    email: 'catdad@gmail.com', 
    password: 'cat123'
  )
  #8
  User.create!(
    username: 'MeowMeow', 
    email: 'meow@gmail.com', 
    password: 'meowmeow'
  )
  #9
  User.create!(
    username: 'DoggyDaycare', 
    email: 'ddc@gmail.com', 
    password: 'FloridaMan'
  )
  #10
  User.create!(
    username: 'Clifford', 
    email: 'clifford@gmail.com', 
    password: 'clifford'
  )
  #11
  User.create!(
    username: 'Steve', 
    email: 'steveuser@gmail.com', 
    password: 'password123'
  )

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
    name: "Chelsea",
    breed: "Dilute Calico & Domestic Short Hair Mix",
    size: "Medium",
    gender: "Female",
    age: "Adult",
    color: "Dilute Calico",
    coat: "Short",
    status: "Adoptable",
    environment: "Indoor only",
    organization_id: 1
  })

  cat_2 = Animal.create!({
    species: "Cat",
    name: "Harley",
    breed: "Tabby",
    size: "Medium",
    gender: "Male",
    age: "Adult",
    color: "Tabby (Orange/Red)",
    coat: "Short",
    status: "Adoptable",
    environment: "Indoor only",
    organization_id: 1
  })

  cat_3 = Animal.create!({
    species: "Cat",
    name: "Kiwi",
    breed: "Dilute Tortoiseshell & Domestic Short Hair Mix",
    size: "Small",
    gender: "Female",
    age: "Young",
    color: "Dilute Tortoiseshell",
    coat: "Short",
    status: "Adoptable",
    environment: "Indoor only",
    organization_id: 1
  })

  cat_4 = Animal.create!({
    species: "Cat",
    name: "Jack",
    breed: "Domestic Medium Hair",
    size: "Small",
    gender: "Male",
    age: "Young",
    color: "Gray & White",
    coat: "Medium",
    status: "Adoptable",
    environment: "Indoor only",
    organization_id: 1
  })

  cat_5 = Animal.create!({
    species: "Cat",
    name: "Sugar Plum",
    breed: "Domestic Short Hair",
    size: "Medium",
    gender: "Female",
    age: "Kitten",
    color: "Calico, White",
    coat: "Short",
    status: "Adoptable",
    environment: "Prefers a home without other cats",
    organization_id: 2
  })

  cat_6 = Animal.create!({
    species: "Cat",
    name: "Cheetara",
    breed: "Domestic Short Hair",
    size: "Medium",
    gender: "Female",
    age: "Young",
    color: "Tabby (Tiger Striped)",
    coat: "Short",
    status: "Adoptable",
    environment: "Good with other cats",
    organization_id: 2
  })

  cat_7 = Animal.create!({
    species: "Cat",
    name: "Peppermint",
    breed: "Domestic Short Hair",
    size: "Medium",
    gender: "Male",
    age: "Kitten",
    color: "Tabby (Tiger Striped), White",
    coat: "Short",
    status: "Adoptable",
    environment: "Good with other cats, children",
    organization_id: 2
  })

  cat_8 = Animal.create!({
    name: "Babee",
    species: "Cat",
    breed: "Domestic Short Hair",
    size: "Small",
    gender: "Female",
    age: "Kitten",
    color: "Black",
    status: "Adoptable",
    environment: "Good with other cats",
    organization_id: 3
  })

  cat_9 = Animal.create!({
    name: "Treasure",
    species: "Cat",
    breed: "Domestic Short Hair",
    size: "Small",
    gender: "Female",
    age: "Kitten",
    color: "Black",
    status: "Adoptable",
    environment: "Prefers a home without dogs, children",
    organization_id: 3
  })

  cat_10 = Animal.create!({
    species: "Cat",
    name: "Joker",
    breed: "Domestic Short Hair Mix",
    size: "Medium",
    gender: "Male",
    age: "Kitten",
    color: "Black",
    coat: "Medium",
    status: "Adoptable",
    environment: "Good with other cats",
    organization_id: 4
  })

  cat_11 = Animal.create!({
    species: "Cat",
    name: "Pablano",
    breed: "Tabby",
    size: "Medium",
    gender: "Male",
    age: "Kitten",
    color: "Tabby (Brown/Chocolate)",
    coat: "Short",
    status: "Adoptable",
    environment: "Good with other cats, children",
    organization_id: 5
  })

  dog_1 = Animal.create!({
    species: "Dog",
    name: "Nikita",
    breed: "German Shepherd Dog & Smooth Collie Mix",
    size: "Medium",
    gender: "Female",
    age: "Adult",
    color: "White/Cream",
    coat: "Short",
    status: "Adoptable",
    environment: "Good with other dogs",
    organization_id: 5
  })

  dog_2 = Animal.create!({
    species: "Dog",
    name: "Riri",
    breed: "Mixed Breed",
    size: "Medium",
    gender: "Female",
    age: "Adult",
    color: "Red / Chestnut / Orange, White / Cream",
    coat: "Short",
    status: "Adoptable",
    environment: "Good with children",
    organization_id: 4
  })

  dog_3 = Animal.create!({
    species: "Dog",
    name: "Julie",
    breed: "Mixed Breed",
    size: "Medium",
    gender: "Female",
    age: "Adult",
    color: "Yellow / Tan / Blond / Fawn, White / Cream",
    coat: "Medium",
    status: "Adoptable",
    environment: "Prefers a home without children, Good with other dogs",
    organization_id: 4
  })

  dog_4 = Animal.create!({
    species: "Dog",
    name: "Mollie",
    breed: "Shepherd Mix",
    size: "Large",
    gender: "Female",
    age: "Adult",
    color: "Yellow / Tan / Blond / Fawn, Black",
    coat: "Medium",
    status: "Adoptable",
    environment: "Prefers a home without cats, children, other animals",
    organization_id: 4
  })

  dog_5 = Animal.create!({
    species: "Dog",
    name: "Kenda",
    breed: " Dutch Shepherd Mix",
    size: "Large",
    gender: "Male",
    age: "Adult",
    color: "Brindle, White / Cream",
    coat: "Medium",
    status: "Adoptable",
    environment: "Good with other dogs",
    organization_id: 6
  })

  dog_6 = Animal.create!({
    species: "Dog",
    name: "Ryder",
    breed: "Labrador Retriever & Shepherd Mix",
    size: "Medium",
    gender: "Male",
    age: "Adult",
    color: "Golden",
    coat: "Short",
    status: "Adoptable",
    environment: "Good with other dogs, children",
    organization_id: 6
  })

  dog_7 = Animal.create!({
    species: "Dog",
    name: "Sally",
    breed: "Labrador Retriever Mix",
    size: "Large",
    gender: "Female",
    age: "Young",
    color: "Apricot / Beige, White / Cream",
    coat: "Short",
    status: "Adoptable",
    environment: "Good with other dogs, children",
    organization_id: 6
  })

  dog_8 = Animal.create!({
    species: "Dog",
    name: "Robin",
    breed: "Cattle Dog & Australian Shepherd Mix",
    size: "Medium",
    gender: "Male",
    age: "Puppy",
    color: "Black",
    coat: "Medium",
    status: "Adoptable",
    environment: "Good with other dogs, cats, children",
    organization_id: 7
  })

  dog_9 = Animal.create!({
    species: "Dog",
    name: "Buttons",
    breed: "Australian Shepherd & Border Collie Mix ",
    size: "Medium",
    gender: "Male",
    age: "Adult",
    color: "Black, White",
    coat: "Medium",
    status: "Adoptable",
    environment: "Good with other dogs, children",
    organization_id: 7
  })

  dog_10 = Animal.create!({
    species: "Dog",
    name: "Marley",
    breed: "Labrador Retriever Mix",
    size: "Medium",
    gender: "Male",
    age: "Adult",
    color: "Golden",
    coat: "Short",
    status: "Adoptable",
    environment: "Good with other dogs, children",
    organization_id: 7
  })

  dog_11 = Animal.create!({
    species: "Dog",
    name: "Pax",
    breed: "Labrador Retriever Mix",
    size: "Medium",
    gender: "Male",
    age: "Puppy",
    color: "Gray & White",
    coat: "Short",
    status: "Adoptable",
    environment: "Good with other dogs, cats, children",
    organization_id: 7
  })

  dog_12 = Animal.create!({
    species: "Dog",
    name: "Holly",
    breed: "Rat Terrier Mix",
    size: "Small",
    gender: "Female",
    age: "Puppy",
    color: "Golden, White / Cream",
    coat: "Short",
    status: "Adoptable",
    environment: "Good with other dogs, cats, children",
    organization_id: 8
  })

  dog_13 = Animal.create!({
    species: "Dog",
    name: "Vetta",
    breed: "Husky & German Shepherd Dog Mix",
    size: "Large",
    gender: "Female",
    age: "Puppy",
    color: "Golden, Bicolor",
    coat: "Medium",
    status: "Adoptable",
    environment: "Good with other dogs",
    organization_id: 8
  })

  dog_14 = Animal.create!({
    species: "Dog",
    name: "Chevy",
    breed: "Husky & German Shepherd Dog Mix",
    size: "Large",
    gender: "Male",
    age: "Puppy",
    color: "Biclor",
    coat: "Long",
    status: "Adoptable",
    environment: "Good with other dogs",
    organization_id: 8
  })

  dog_15 = Animal.create!({
    species: "Dog",
    name: "Nova",
    breed: "Husky Mix",
    size: "Large",
    gender: "Female",
    age: "Puppy",
    color: "Gray / Blue / Silver, Black, White / Cream",
    coat: "Medium",
    status: "Adoptable",
    environment: "Good with other dogs, children",
    organization_id: 8
  })

  dog_16 = Animal.create!({
    species: "Dog",
    name: "Pickle",
    breed: "Jindo Mix",
    size: "Medium",
    gender: "Male",
    age: "Puppy",
    color: "Apricot / Beige, White / Cream",
    coat: "Medium",
    status: "Adoptable",
    environment: "Good with other dogs",
    organization_id: 9
  })

  dog_17 = Animal.create!({
    species: "Dog",
    name: "Bana",
    breed: "Jindo Mix",
    size: "Medium",
    gender: "Female",
    age: "Puppy",
    color: "Black / Brown",
    coat: "Medium",
    status: "Adoptable",
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

  puts "Creating Meet & Greets..."
  MeetAndGreet.create!({
    start_time: "9:30",
    date: Date.new(2023, 1, 28),
    user_id: 1,
    animal_id: 25,
  })

  MeetAndGreet.create!({
    start_time: "14:45",
    date: Date.new(2023, 3, 21),
    user_id: 1,
    animal_id: 2,
  })

  MeetAndGreet.create!({
    start_time: "12:00",
    date: Date.new(2023, 4, 1),
    user_id: 1,
    animal_id: 3,
  })

  MeetAndGreet.create!({
    start_time: "16:15",
    date: Date.new(2023, 5, 15),
    user_id: 1,
    animal_id: 27,
  })

  puts "Creating Reviews..."
  #1
  Review.create!({
    rating: 5,  
    body: "All of the cats are so cute!",
    user_id: 2,
    organization_id: 1,
  })

  Review.create!({
    rating: 4,  
    body: "My wife and I went 'just to have a look'. We now own 3 cats.",
    user_id: 5,
    organization_id: 1,
  })
  
  Review.create!({
    rating: 5,  
    body: "The receptionist was very helpful. I wish I remember her name!",
    user_id: 7,
    organization_id: 2,
  })
  
  Review.create!({
    rating: 5,  
    body: "Proud new owner of the cutest cat in the world!",
    user_id: 8,
    organization_id: 2,
  })
  #5
  Review.create!({
    rating: 5,  
    body: "Found the best cat here!",
    user_id: 2,
    organization_id: 3,
  })
  
  Review.create!({
    rating: 5,  
    body: "Created my username because of this place!",
    user_id: 7,
    organization_id: 3,
  })
  
  Review.create!({
    rating: 5,  
    body: "I volunteer here all the time, everyone is super nice!",
    user_id: 6,
    organization_id: 4,
  })
    
  Review.create!({
    rating: 5,  
    body: "It's too hard to choose one! So I got 5",
    user_id: 1,
    organization_id: 4,
  })

  Review.create!({
    rating: 5,  
    body: "Guess who found a new best friend?",
    user_id: 3,
    organization_id: 5,
  })
  #10
  Review.create!({
    rating: 4,  
    body: "Didn't find what I was looking for but it was a very pleasant experience",
    user_id: 4,
    organization_id: 5,
  })

  Review.create!({
    rating: 5,  
    body: "So many good boys",
    user_id: 9,
    organization_id: 6,
  })

  Review.create!({
    rating: 5,  
    body: "One more dog never hurt anyone",
    user_id: 9,
    organization_id: 7,
  })
  
  Review.create!({
    rating: 5,  
    body: "If you have any old blankets or sheets you're just going to toss, give them to Okandogs, they can use them!",
    user_id: 10,
    organization_id: 8,
  })
  
  Review.create!({
    rating: 5,  
    body: "Walked in with nothing. Walked out with such a good boy.",
    user_id: 1,
    organization_id: 9,
  })
  #15
  Review.create!({
    rating: 5,
    body: "I like this place",
    user_id: 11,
    organization_id: 9
  })

  puts "Creating favorites..."
  Favorite.create!({
    user_id: 1,
    animal_id: 24
  })
  
  Favorite.create!({
    user_id: 1,
    animal_id: 23
  })

  Favorite.create!({
    user_id: 1,
    animal_id: 22
  })
  
  Favorite.create!({
    user_id: 1,
    animal_id: 3
  })
  
  puts "Done!"
# end