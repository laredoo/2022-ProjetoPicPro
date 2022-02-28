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
    }
}