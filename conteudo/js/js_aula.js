/*
//cout
console.log("Olá mundo")

//<----variáveis---->

//primeira forma;
let nome = "Lucas"
console.log(nome)

//segunda forma --> const;
const idade = 10
console.log(idade)
//idade = 11 --> não funciona pq é const

//operacoes
//-> soma   => +
//-> subtracao  => -
//-> divisao    => /
//-> multiplicacao  => *
//-> resto  => %
//-> mais igual     => +=
//-> menos igual    => -=

let numero = 30
let numero2 = 10
resultado = numero + numero2 
console.log("o resultado eh:", resultado)

//tipos de dados
//---> inteiro ...
let num = 10

//---> string ...
let nomeBonito = " Laredo"
    //-->concatenando string
    console.log(nome + nomeBonito)
    //-->string + inteiro = ele concatena

//---> bool ... 
let verd = true
let fals = false

//---> array
let listaNomes = ["lucas", "maria", "duda"] //->declaracao de array

listaNomes.push("Vitor")
console.log(listaNomes)

//---> objetos - chave associativa

const amanda = {
    nome: "Amanda",
    telefone: "000000",
    cpf: "10293019230",
    cidade: "bh",
    idade: 25,
}

const lucas = {
    nome: "lucas",
    telefone: "000000",
    cpf: "10293019230",
    cidade: "op",
    vetor: [],
}

let funcionarios = []
funcionarios.push(lucas)
funcionarios.push(amanda)

console.log(lucas, amanda)

//booleanos e comparacoes
    // TRUE or FALSE
    // >
    // <
    // ==
    // !=
    //(===) verifica igualdade e tipo de dado ex. "10" === 10 retorna FALSE

//operadores logicos
    // ||
    // &&

//condicionais
let aula = 10
console.log(aula)
if(aula == 10){
    aula += 10
}
console.log(aula)

//funcoes no js

function soma(a, b) {
    return a + b 
}

//estruturas de repeticao

let filaAtendimento = ["lucas", "larissa", "eduarda", "pau"]
let nomeMaisComprido = "a"

for(let i = 0; i < filaAtendimento.length; i++) {
    if(filaAtendimento[i].length > nomeMaisComprido.length)
        nomeMaisComprido = filaAtendimento[i]
}
console.log(nomeMaisComprido)

// ******************************************************/
//          DOM - MODELO DE OBJETO DO DOCUMENTO
// ******************************************************/

//CONSEGUIMOS ACESSAR QUALQUER ELEMENTO DE HTML E TRAZER PARA JS
//ASSIM PODEMOS FAZER QUALQUER TIPO DE MANIPULAÇÃO

//document acessa o documento
//querySelector => seletor de elemento

//.pessoa acessa a classe (HTML) pessoa

/*
let divPessoa = document.querySelector(".pessoa")

let fila = ["lucas" , "duda" , "vitor"]


for(i = 0; i< fila.length; i++) {
    let div = document.createElement("div")
    div.innerText = fila[i]
    divPessoa.appendChild(div)
}
*/

/*
//SELETORES - querySelector / querySelectorAll / getElementById
//obs: querySelector é um seletor genérico para qualquer elemento (classe, id, tag ...)

const btn = document.querySelector(".btnExtrato")
//btn.style.background = "red"
//btn.style.color = "blue"
const list = document.querySelectorAll("ul li")
console.log(list) //-->precisamos de um loop para acessar cada elemento desse array
//console.log(btn)

//CRIANDO ELEMENTOS NO JS
const body = document.querySelector("body")
const tagButton = document.createElement("button") //NOME DA TAG
tagButton.innerText = "LAREDO"
body.appendChild(tagButton) //->coloca um elemento dentro do outro

let filaAtendimento = ["lucas","duda","arthur"]

//criando lista de nomes
//criamos um li
let ulNomes = document.querySelector(".listaDeNomes")
for(let i=0;i < filaAtendimento.length;i++) {
   
    //CRIANDO UM LI
    const liNome = document.createElement("li")
    liNome.innerText = filaAtendimento[i]
    ulNomes.appendChild(liNome)
    console.log(liNome)
}
*/

//EVENTOS --> qualquer coisa feita no navegador
//--> mexer o mouse no navegador, clicar, arrastar a tela, etc ...

//1° selecionar o input
    //A - pegar um valor do campo
//2° adicionar um evento no botao/clique
//3° guardar o valor em algum lugar
//4° selecinar a lista
//5° criar um li
//6° alimentar com o valor do input
//7° jogar ele para dentro da lista


//SELECIONANDO  O BUTTON DO HTML
const btnAdicionar = document.querySelector(".btnAdicionar")

//INTERCEPTANDO EVENTO NO BOTÃO
    //Nesse caso é um botao de clique
btnAdicionar.addEventListener("click", pegarValores)

//SELECIONANDO A LISTA
const ol = document.querySelector("ol")

//FUNÇÃO QUE VAI EXECUTAR
function pegarValores(event){
   
    //SELECIONANDO O INPUT
    const inputTexto = document.querySelector(".inputTexto")

    //PEGANDO O VALOR DO INPUT
    const valorInput = inputTexto.value
 
    //CRIANDO LI PARA ALIMENTAR A LISTA
    const li = document.createElement("li")

    //ALIMENTAR COM O VALOR DO CAMPO
    li.innerText = valorInput

    //ADICIONANDO O LI COM AS INFORMAÇÕES DA LISTA
    ol.appendChild(li)

}

//ELEMENTO QUE VOCÊ QUER ESCUTAR
//TIPO DE EVENTO CLIQUE
//O QUE VOCE QUER QUE ELE FAÇA



