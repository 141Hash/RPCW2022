var http = require('http')
var axios = require('axios')

function generateMainPage()
{
    let html = "<!DOCTYPE html>"
    html = html + "<head>"
    html = html + "<title>Bem-vindo à página inicial</title>"
    html = html + "<meta charset=\"UTF-8\">"
    html = html + "<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">"
    html = html + "</head>"
    html = html + "<body>"
    html = html + "<div class=\"w3-container w3-black w3-text-white w3-display-middle\">"
    html = html + "<h1><a href=\"http://localhost:4000/alunos\">Alunos</a></h1>"
    html = html + "<h1><a href=\"http://localhost:4000/cursos\">Cursos</a></h1>"
    html = html + "<h1><a href=\"http://localhost:4000/instrumentos\">Instrumentos</a></h1>"
    html = html + "</div>"
    html = html + "</body>"
    html = html + "</html>"
    return html
}

function generatePage(page)
{
    let html = generateHeader(page) + generateBody(page)
}

function generateHeader(page)
{
    let html = "<!DOCTYPE html>"
    html = html + "<head>"

    if(page == "/alunos")
    {
        html = html + "<title>Bem-vindo à página de alunos</title>"
    }

    else if(page == "/cursos"){
        html = html + "<title>Bem-vindo à página de cursos</title>"
    }

    else if(page == "/instrumentos"){
        html = html + "<title>Bem-vindo à página de instrumentos</title>"
    }

    html = html + "<meta charset=\"UTF-8\">"
    html = html + "<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">"
    html = html + "</head>"
}

function generateBody(page)
{
    let html = "<body>"
    
}


http.createServer(function(req,res){
    var myurl = req.url.substring()
    if(myurl == "/"){
        res.writeHead(200, {'Content-Type':'text/html'})    
        data = generateMainPage()
        res.write(data)
        res.end()
    }
    else if(myurl == "/alunos"){
        res.writeHead(200, {'Content-Type':'text/html'})    
        data = generatePage(myurl)
        res.write(data)
        res.end()
    }
    else if(myurl == "/cursos"){
        res.writeHead(200, {'Content-Type':'text/html'})    
        data = generatePage(myurl)
        res.write(data)
        res.end()
    }
    else if(myurl == "/instrumentos"){
        res.writeHead(200, {'Content-Type':'text/html'})    
        data = generatePage(myurl)
        res.write(data)
        res.end()
    } 
    else 
    {
        res.write("Rota nao definida, por favor insira uma rota valida")
        res.end()
     }
}).listen(4000)

console.log("Servidor à escuta na porta 4000")