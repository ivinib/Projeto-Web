//Lista de vagas a ser preenchida com os dados do web service
let vagas = []

//Estabelecebdo o "caminho" para que o front e o back-end conversem e troquem dados

let url = 'http://localhost:3000/vagas'
let lista = document.getElementById('vaga')

//Função para limpar a lista de vagas
function limparLista(){
    while(lista.firstChild){
        lista.removeChild(lista.firstChild)
    }
}

//Função para popular a lista de vagas

function exibirVagas(){
    //Implementando as variaveis para manipular os radios buttons
    let desenv = document.getElementById('desenv')
    let negocio = document.getElementById('negocio')

    //Chamando a função limpar lista
    limparLista()
    

    for(let i = 0; i < vagas.length; i++){
        //Implementando a avaliação do tipo de vaga selecionado
        let tipo = vagas[i].tipo
        var qualTipo = (desenv.checked && tipo == '1') || (negocio.checked && tipo == '2')

        if(qualTipo){
            let option = document.createElement('option')
            option.textContent = vagas[i].titulo
            option.setAttribute('value', vagas[i].id)
            lista.appendChild(option)
        }
    }
}

//Adiciona os eventos do radio button
desenv.addEventListener('click', exibirVagas, false) //Use capture
negocio.addEventListener('click', exibirVagas, false)

//Promise para acessar o Web service
fetch(url)
    .then((res) => res.json())
    .then((valor) => {
        vagas = valor;
        exibirVagas();
    })