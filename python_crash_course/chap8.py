# def greet_user():
#     print("hello!")

# greet_user()


# def display_message():
#     print("第八章学习函数")

# display_message();

# def favorite_book(bookname):
#    print(f"One of my favorite books is {bookname.title()}.")

# favorite_book("Alice in Wonderlan")

# def describe_pet(animal_type, pet_name) :
#     print(f"\n I have a {animal_type}")
#     print(f"My {animal_type}'s name is {pet_name.title()}")

# describe_pet("hamster", "harry")

# describe_pet(animal_type='hamster', pet_name='harry')



# def get_formatted_name(first_name, last_name):
#     full_name = f"{first_name} {last_name}"
#     return full_name.title()


# while True:
#     print("Please tell me you name:")
#     f_name = input("First name:")
#     if f_name == 'q':
#         break
    
#     l_name = input("Last name")
    
#     formatted_name = get_formatted_name(f_name, l_name)
#     print(f"\nHello, {formatted_name}")

# def greet_users(names):
#     for name in names:
#         msg = f"Hello , {name.title()}!"
#         print(msg)
# usernames = ['hannah', 'ty', 'margot']
# greet_users(usernames)


""" def make_pizza(*toppings):
    print("\n Making a pizza with the following toppings:")
    for topping in toppings :
        print(f"- {topping}")



make_pizza('pepperoni')
make_pizza('mushrooms', 'green peppers', 'extra cheese') """

# def make_pizza(size, *toppings):
#     print(f"\n Making a {size} pizza with the following toppings:")
#     for topping in toppings :
#         print(f"- {topping}")



# make_pizza(16, 'pepperoni')
# make_pizza(12, 'mushrooms', 'green peppers', 'extra cheese')


def build_profile(first, last, **user_info):
    user_info['first_name'] = first
    user_info['last_name'] = last
    return user_info

user_profile = build_profile('albert', 'ernistein', lacation='princeton',field='physics')
print(user_profile)