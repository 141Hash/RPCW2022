import json as json

with open("cinemaATP.json", encoding='utf-8') as jsonFile:
    jsonData = json.load(jsonFile)

#Dicionário que servirá para fazer a associação de cada filme à página HTML correspondente
nr_filme = {}
#Dicionário que servirá para fazer a associação de cada ator à página HTML correspondente
nr_atores = {}
#Dicionário que servirá para fazer a associação de cada ator aos filmes em que participa
atores = {}

def drawNavbar(file):
    file.write("\t\t<div class=\"w3-top\">\n")
    file.write("\t\t\t<div class=\"w3-bar w3-black intronav\">\n")
    file.write("\t\t\t\t<header>\n")
    file.write("\t\t\t\t\t <a href=\"http://localhost:7777/filmes\" class=\"w3-bar-item w3-button w3-hover-black w3-text-white w3-hover-text-white w3-xlarge\">Filmes</a>\n")
    file.write("\t\t\t\t\t <a href=\"http://localhost:7777/atores\" class=\"w3-bar-item w3-button w3-hover-black w3-text-white w3-hover-text-white w3-xlarge\">Atores</a>\n")
    file.write("\t\t\t\t</header>\n")
    file.write("\t\t\t</div>\n")
    file.write("\t\t</div>\n")

def homepage():
    homepage_html = open("./HTML/index.html", "w")
    homepage_html.write("<!DOCTYPE html>\n")

    homepage_html.write("\t<head>\n")

    homepage_html.write("\t\t<title>Bem-vindo à página inicial</title>\n")
    homepage_html.write("\t\t<meta charset=\"UTF-8\">\n")
    homepage_html.write("\t\t<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\n")

    homepage_html.write("\t</head>\n")

    homepage_html.write("\t<body>\n")

    drawNavbar(homepage_html)

    homepage_html.write("\t\t<div class=\"w3-container w3-black w3-text-white w3-display-middle\">\n")
    homepage_html.write("\t\t\t<h1><a href=\"http://localhost:7777/filmes\">Filmes</a></h1>\n")
    homepage_html.write("\t\t\t<h1><a href=\"http://localhost:7777/atores\">Atores</a></h1>\n")
    homepage_html.write("\t\t</div>\n")

    homepage_html.write("\t</body>\n")

    homepage_html.write("</html>\n")

def allMoviesPage(filmes):
    movie_html = open("./HTML/filmes.html", "w")
    movie_html.write("<!DOCTYPE html>\n")

    movie_html.write("\t<head>\n")

    movie_html.write("\t\t<title>Filmes</title>\n")
    movie_html.write("\t\t<meta charset=\"UTF-8\">\n")
    movie_html.write("\t\t<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\n")

    movie_html.write("\t</head>\n")

    movie_html.write("\t<body>\n")

    drawNavbar(movie_html)

    movie_html.write("\t\t<div class=\"w3-bar w3-center\">\n")
    movie_html.write("\t\t\t<h1>Filmes</h1>\n")
    movie_html.write("\t\t</div>\n")

    movie_html.write("\t\t<div class=\"w3-container w3-margin-left\">\n")
    movie_html.write("\t\t\t<ol>\n")
    for key in filmes.keys():
        numero = str(nr_filme.get(key))
        movie_html.write("\t\t\t<li><a href=\"http://localhost:7777/filmes/f" + numero + "\">" + str(key) + " - " + str(filmes.get(key)) + "</a></li>\n")
    movie_html.write("\t\t\t</ol>\n")
    movie_html.write("\t</body>\n")
    movie_html.write("</html>\n")

def individualHTMLMovie(movie):
    nr = str(nr_filme.get(movie['title']))
    file_name = "./HTML/f" + nr + ".html"
    individual_movie = open(file_name,"w")
    individual_movie.write("<!DOCTYPE html>\n")

    individual_movie.write("\t<head>\n")

    individual_movie.write("\t\t<title>Filmes - " + movie['title'] + "</title>\n")
    individual_movie.write("\t\t<meta charset=\"UTF-8\">\n")
    individual_movie.write("\t\t<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\n")

    individual_movie.write("\t</head>\n")

    individual_movie.write("\t<body>\n")

    drawNavbar(individual_movie)

    individual_movie.write("\t\t<div class=\"w3-container w3-display-left\">\n")
    individual_movie.write("\t\t\t<h1>" + movie['title'] + "</h1>\n")
    individual_movie.write("\t\t\t<h3>Ano de Lançamento: " + str(movie['year']) + "</h3>\n")
    individual_movie.write("\t\t\t<h4>Elenco:</h4>\n")
    individual_movie.write("\t\t\t<ul>\n")

    for ator in movie['cast']:
        individual_movie.write("\t\t\t\t<li><a href=\"http://localhost:7777/atores/a" + str(nr_atores.get(ator)) + "\">" + str(ator) + "</a></li>\n")

    individual_movie.write("\t\t\t</ul>\n")
    individual_movie.write("\t\t\t<h4>Género:</h4>\n")
    individual_movie.write("\t\t\t<ul>\n")

    for g in movie['genres']:
        individual_movie.write("\t\t\t\t<li>" + g + "</li>\n")

    individual_movie.write("\t\t\t</ul>\n")
    individual_movie.write("\n\n</div>\n")

    individual_movie.write("\t</body>\n")

    individual_movie.write("</html>\n")

def actorsPage(atores):
    atores_page = open("./HTML/atores.html", "w")
    atores_page.write("<!DOCTYPE html>\n")

    atores_page.write("\t<head>\n")

    atores_page.write("\t\t<title>Atores</title>\n")
    atores_page.write("\t\t<meta charset=\"UTF-8\">\n")
    atores_page.write("\t\t<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\n")

    atores_page.write("\t</head>\n")

    atores_page.write("\t<body>\n")

    drawNavbar(atores_page)

    atores_page.write("\t\t<div class=\"w3-bar w3-center\">\n")
    atores_page.write("\t\t\t<h1>Atores</h1>\n")
    atores_page.write("\t\t</div>\n")

    atores_page.write("\t\t<div class=\"w3-container w3-margin-left\">\n")
    atores_page.write("\t\t\t<ol>\n")

    for key in atores.keys():
        numero = str(nr_atores.get(key))
        atores_page.write("\t\t\t<li><a href=\"http://localhost:7777/atores/a" + numero + "\">" + key + "</a></li>\n")
        singleActorPage(atores,key)
        
    atores_page.write("\t\t\t</ol>\n")
    atores_page.write("\t</body>\n")

    atores_page.write("</html>\n")

def singleActorPage(atores, key):
    nr = str(nr_atores.get(key))
    file_name = "./HTML/a" + nr + ".html"
    single_ator = open(file_name,"w")
    single_ator.write("<!DOCTYPE html>\n")

    single_ator.write("<html lang=\"pt\">\n")

    single_ator.write("\t<head>\n")

    single_ator.write("\t\t<title>Atores - " + key + "</title>\n")
    single_ator.write("\t\t<meta charset=\"UTF-8\">\n")
    single_ator.write("\t\t<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\n")

    single_ator.write("\t</head>\n")
    single_ator.write("\t<body>\n")

    drawNavbar(single_ator)

    single_ator.write("\t\t<div class=\"w3-container w3-display-left\">\n")
    single_ator.write("\t\t\t<h1>" + key + "</h1>\n")
    single_ator.write("\t\t\t<ol>\n")

    for movie in atores.get(key):
        single_ator.write("\t\t\t<li><a href=\"http://localhost:7777/filmes/f" + str(nr_filme.get(movie)) + "\">" + movie + "</a></li>\n")

    single_ator.write("\t\t\t</ol>\n")

    single_ator.write("\t</body>\n")

    single_ator.write("</html>\n")


def add_to_dict(actor,movie):
    if actor in atores:
        atores[actor].append(movie)
    else:
        atores[actor] = [movie]

def valid_name(name):
    return name[0].isupper() or name[0].isnumeric()

movies = []

i = 1
for elem in jsonData:
    movies.append(elem['title']) 
    for ator in elem['cast']:
        if(valid_name(ator)):
            add_to_dict(ator, elem['title'])
    i += 1

movies.sort()

n = 1
for movie in movies:
    nr_filme[movie] = n
    n += 1

atores = dict(sorted(atores.items(), key = lambda x : x[0].lower()))

n = 1
for ator in atores.keys():
    nr_atores[ator] = n
    n += 1

filmes = {}

for movie in jsonData:
    filmes[movie['title']] = movie['year']

filmes = dict(sorted(filmes.items(), key = lambda x : x[0].lower()))

homepage()

allMoviesPage(filmes)

actorsPage(atores)

for singleMovie in jsonData:
    individualHTMLMovie(singleMovie)