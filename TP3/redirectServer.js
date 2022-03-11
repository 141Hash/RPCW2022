var http = require('http')
var url = require('url')
var axios = require('axios')

function getAluno(id){
    return axios.get('http://localhost:3000/alunos/' + id)
    .then(function (resp){
        return resp.data;
    })
    .catch(function (error){
        console.log(error);
    });
}

function getCurso(id){
    return axios.get('http://localhost:3000/cursos/' + id)
    .then(function (resp){
        return resp.data;
    })
    .catch(function (error){
        console.log(error);
    });
}

function getInstrumento(id){
    return axios.get('http://localhost:3000/instrumentos/' + id)
    .then(function (resp){
        return resp.data;
    })
    .catch(function (error){
        console.log(error);
    });
}

function getAlunos(){
    return axios.get('http://localhost:3000/alunos')
    .then(function (resp){
        return resp.data;
    })
    .catch(function (error) {
        console.log(error);
    });
}

function getCursos(){
    return axios.get('http://localhost:3000/cursos')
    .then(function (resp){
        return resp.data;
    })
    .catch(function (error) {
        console.log(error);
    });
}

function getInstrumentos(){
    return axios.get('http://localhost:3000/instrumentos')
    .then(function (resp){
        return resp.data;
    })
    .catch(function (error) {
        console.log(error);
    });
}

function generateAlunoPage(res, info){
    var page = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <title>Aluno - ${info}</title>
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
        </head>
        <body class="w3-container" style="background-color: rgb(0, 0, 139);">
            <p class="w3-text-white"><a href="http://localhost:4000/alunos">Voltar</a></p>
        `
        getAluno(info)
            .then(aluno => {

                page += `<p class="w3-container w3-center w3-text-white" style="font-size: 18px;">Nome: ${aluno.nome}<br>
                         ID: ${aluno.id}<br>
                         Data de Nascimento: ${aluno.dataNasc}<br>
                         Curso: <a href = "localhost:4000/cursos/${aluno.curso}">${aluno.curso}</a><br>
                         Ano do Curso: ${aluno.anoCurso}<br>
                         Instrumento: ${aluno.instrumento}</p>`

            page += '</body>'
            page += '</html>'
            res.write(page)
            res.end()
        });
}


function generateCursoPage(res, info){
    var page = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <title>Curso - ${info}</title>
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
        </head>
        <body class="w3-container" style="background-color: rgb(0, 0, 139);">
            <p class="w3-text-white"><a href="http://localhost:4000/cursos">Voltar</a></p>
        `
        getCurso(info)
            .then(curso => {

                page += `<p class="w3-container w3-center w3-text-white" style="font-size: 18px;">Nome: ${curso.designacao}<br>
                         ID: ${curso.id}<br>
                         Duração: ${curso.duracao}<br>
                         Instrumento_ID: ${curso.instrumento.id}<br>
                         Instrumento: <a href = "localhost:4000/instrumentos/${curso.instrumento.id}">${curso.instrumento.text}</a></p>`

            page += '</body>'
            page += '</html>'
            res.write(page)
            res.end()
        });
}

function generateInstrumentoPage(res, info){
    var page = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <title>Instrumento - ${info}</title>
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
        </head>
        <body class="w3-container" style="background-color: rgb(0, 0, 139);">
            <p class="w3-text-white"><a href="http://localhost:4000/instrumentos">Voltar</a></p>
        `
        getInstrumento(info)
            .then(instrumento => {

                page += `<p class="w3-container w3-center w3-text-white" style="font-size: 18px;">Nome: ${instrumento.text}<br>
                         ID: ${instrumento.id}<br></p>`

            page += '</body>'
            page += '</html>'
            res.write(page)
            res.end()
        });
}

function generatePage(res, info){
    var page = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <title>Escola - ${info}</title>
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
        </head>
        <body class="w3-container" style="background-color: rgb(0, 0, 139);">
            <p class="w3-text-white"><a href="http://localhost:4000/">Voltar</a></p>
            <h1 class="w3-center" style="color: white;">Tabela de ${info}</h1>
            <table class="w3-table-all w3-centered w3-hoverable w3-margin-top">
            <thead>
                <tr class="w3-light-grey">
    `

    if(info == "alunos"){
        var keys = ['Id', 'Nome', 'Curso', 'Instrumento']
        for (let i = 0; i < keys.length; i++){
            page += '<th>' + keys[i] + '</th>'
        }
        page += '</tr></thead>'
        getAlunos()
            .then(alunos =>{
                alunos.forEach(aluno => {
                    page += '<tr>'
                    page += '<td>' + aluno.id + `</td><td><a href="http://localhost:4000/alunos/${aluno.id}">` + aluno.nome + `</a></td><td><a href="http://localhost:4000/cursos/${aluno.curso}">` + aluno.curso + '</a></td><td>' + aluno.instrumento + '</td>'
                    page += '</tr>'
                })

                page += '</table>'
                page += '</body>'
                page += '</html'

                res.write(page)
                res.end()
            })
    }

    else if(info == 'cursos'){
        var keys = ['Id', 'Designação', 'Duração', 'Instrumento_ID', 'Instrumento']
        for (let i = 0; i < keys.length; i++){
            page += '<th>' + keys[i] + '</th>'
        }
        page += '</tr></thead>'

        getCursos()
            .then(cursos =>{
                cursos.forEach(curso => {
                    page += '<tr>'
                    page += '<td>' + curso.id + `</td><td><a href ="http://localhost:4000/cursos/${curso.id}">` + curso.designacao + '</td><td>' + curso.duracao + '</td><td>' + curso.instrumento.id + '</td><td>' + curso.instrumento.text + '</td>'
                    page += '</tr>'
                })

                page += '</table>'
                page += '</body>'
                page += '</html'

                res.write(page)
                res.end()
            })
    }

    else if (info == 'instrumentos'){
        var keys = ['Id', 'Instrumento']
        for (let i = 0; i < keys.length; i++){
            page += '<th>' + keys[i] + '</th>'
        }
        page += '</tr></thead>'

        getInstrumentos()
            .then(instrumentos =>{
                instrumentos.forEach(instrumento => {
                    page += '<tr>'
                    page += '<td>' + instrumento.id + `</td><td><a href = "http://localhost:4000/instrumentos/${instrumento.id}">` + instrumento.text + '</a></td>'
                    page += '</tr>'
                })

                page += '</table>'
                page += '</body>'
                page += '</html'

                res.write(page)
                res.end()
            })
    }
}

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

http.createServer(function(req,res){
    var myurl = url.parse(req.url, true)

    if(myurl.pathname == "/"){
        res.writeHead(200, {'Content-Type':'text/html'})    
        res.write(generateMainPage())
        res.end()
    }

    else if(myurl.pathname == "/alunos"){
        res.writeHead(200, {'Content-Type':'text/html'})    
        generatePage(res, "alunos")
    }

    else if(myurl.pathname == "/cursos"){
        res.writeHead(200, {'Content-Type':'text/html'})    
        generatePage(res, "cursos")
    }

    else if(myurl.pathname == "/instrumentos"){
        res.writeHead(200, {'Content-Type':'text/html'})    
        generatePage(res, "instrumentos")
    }

    else if(myurl.pathname.includes("/alunos/")){
        res.writeHead(200,{'Content-Type': 'text/html'})
        generateAlunoPage(res,myurl.pathname.split("/")[2])
    }

    else if(myurl.pathname.includes("/cursos/")){
        res.writeHead(200,{'Content-Type': 'text/html'})
        generateCursoPage(res,myurl.pathname.split("/")[2])
    }

    else if(myurl.pathname.includes("/instrumentos/")){
        res.writeHead(200,{'Content-Type': 'text/html'})
        generateInstrumentoPage(res,myurl.pathname.split("/")[2])
    }

    else {
        res.write("Rota nao definida, por favor insira uma rota valida")
        res.end()
     }
}).listen(4000)

console.log("Servidor à escuta na porta 4000")