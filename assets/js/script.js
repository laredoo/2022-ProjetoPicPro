//1° ADICIONAR IDS NOS BOTOES
//1 .. 4

//2° SELECIONAR OS BOTOES
//3° INTECEPTAR O EVENTO DE CLIQUE
//4° RECUPERAR O ID ADICIONADO

//SELECIONANDO UL(LISTA)
const listaOpcoes = document.querySelector(".secaoDetalhesConta_opcoesTransacoes")

//ADICIONANDO ESCUTADOR DE EVENTOS
listaOpcoes.addEventListener("click", identificarOpcoes)


//EXECUTANDO AÇÃO DEPOIS DO CLIQUE
function identificarOpcoes(event) {

    //IDENTIFICANDO ONDE OCORREU O CLIQUE
    const li = event.target
    
    //VERIFICANDO SE É UM LI
    if(li.tagName == "LI"){
        //RECUPERANDO O ID
        const id = li.id

        //SELECIONANDO UMA SESSAO UTILIZANDO O ID (ESCOLHA DO USUARIO)
        const secaoEscolha = document.querySelector(`div[data-id="${id}"]`) //interpolação string. Não é string pois qualquer arquivo html é string, não int 

        //REMOVENDO CLASSE SHOW
        removeClasseMostrar()
        
        //ADICIONAR UMA CLASSE (show)
        secaoEscolha.classList.add("show")
    }
}

function removeClasseMostrar() {
    const divs = document.querySelectorAll(".secaoTransacao .container div")
    for(let i=0;i < divs.length; i++) {
        divs[i].classList.remove("show")
    }
}