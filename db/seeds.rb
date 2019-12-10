20.times do
  Department.create(
    store_name: Faker::Company.name
  )
end

puts "created 20 stores"