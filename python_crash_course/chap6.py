# alien_0 = {'color': 'green', 'point': 5}

# print(alien_0['color'])
# print(alien_0['point'])

favorite_languages = {
    'jen': 'python',
    'sarah': 'c',
    'edward': 'ruby',
    'phil': 'python'
}

for name, language in favorite_languages.items():
    print(f"{name.title()}'s favorite language is {language.title()}.")