# 20.times do
#   Department.create(
#     store_name: Faker::Company.name
#   )
# end

# puts "created 20 stores"

500.times do
  Item.create(
    department_id: rand(20),
    item_name: Faker::Commerce.product_name,
    quantity: Faker::Number.number(digits: 2),
    price: Faker::Number.decimal(l_digits: 2)
  )
end

puts "create 500 items, randomly assigned"