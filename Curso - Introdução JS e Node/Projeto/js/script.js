//var é uma variavel que pode mudar, const é uma variavel constante que não pode alterar, let é uma variavel que usa em determinado momento e depois ele auto se apaga!

//PROGRAMA 1
var numeroa = 3; //variavel numeroa recebe 3
var numerob = 5; //variavel numerob recebe 5
var resultado = numeroa + numerob; //variavel resultado recebe numeroa mais numerob

console.log("NumeroA mais NumeroB: "+ resultado); //mostra no console

//PROGRAMA 2
numeroa = 7; //numeroa passa a recebe 7
numerob = "2"; //numerob passa a recebe 2 porém string
resultado = numeroa + numerob; //resultado recebe numeroa mais numerob

console.log("NumeroA mais NumeroB: "+ resultado); //mostra no console

//PROGRAMA 3
const nota1 = 3; //nota1 passa a recebe 7 porém não pode ser alterada pois é const
var nota2 = 5; //nota2 passa a recebe 2 porém string
var media = (nota1 + nota2) / 2; //media recebe nota1 mais nota2 e divide pela quantidade de notas que no caso é 2

console.log("Media: "+ media); //mostra no console

//PROGRAMA 4
var aprovado = false; //variavel aprovado recebe false
let mensagem = "";

if(media >= 6){ //se a media for maior ou igual a 6
    aprovado = true; //aprovado recebe true
    mensagem = "Parabéns. Você foi aprovado!"; //mensagem recebe a string
} else { //se não
    aprovado = false; //aprovado recebe false (Nem precisaria do else neste caso!)
    mensagem = "Parabéns. Você vai ficar mais um tempo aqui!"; //mensagem recebe a string
}

console.log(mensagem) //mostra no console

//PROGRAMA 5
let creditos = document.getElementById("creditos"); //let creditos recebe do documento um elemento de id creditos
creditos.innerHTML = "Novo texto aqui!"; //altera o creditos na pagina html por um novo texto

//PROGRAMA 6
let titulo = document.getElementsByClassName("titulo"); //let titulo recebe do documento um elemento de class titulo
titulo.innerHTML = "teste"; //altera o titulo na pagina html por um novo texto

//PROGRAMA 7
let desc = document.querySelector("#desc"); //let titulo recebe do documento um querySelector (# = id, . = class ...)
desc.innerHTML = "Alteração de descrição"; //altera o desc na pagina html por um novo texto

//PROGRAMA 8
let titulos = document.querySelectorAll(".titulo"); //let titulo recebe do documento um querySelectorAll todos as classes/ids que existem no html (# = id, . = class ...)
titulos.innerHTML = "Alteração de titulos"; //altera o desc na pagina html por um novo texto

//PROGRAMA 9
// Seleciona o elemento HTML com o id "btnConstuir" e armazena na variável 'botao'
// O símbolo '#' indica que estamos buscando por um id
let botao = document.querySelector("#btnConstuir");

// Adiciona um ouvinte de evento ao botão que escuta o clique do usuário
// Quando o botão é clicado, a função 'exibirTermos' é chamada
botao.addEventListener("click", exibirTermos);

// Define a função assíncrona 'exibirTermos'
// Funções assíncronas permitem operações que esperam respostas externas (como de um servidor) sem travar a execução do restante do código
async function exibirTermos() {
    // Realiza uma requisição HTTP para o arquivo "recebimento.php"
    // 'await' faz o código esperar a resposta da requisição antes de continuar
    let requisicao = await fetch("recebimento.php");

    // Extrai o conteúdo da resposta como texto
    let resposta = await requisicao.text();

    // Seleciona o elemento HTML com a classe "termos"
    // O símbolo '.' indica que estamos buscando por uma classe
    let divTermos = document.querySelector(".termos");

    // Insere o conteúdo da resposta dentro da div selecionada
    // Isso atualiza dinamicamente o conteúdo da página sem precisar recarregá-la
    divTermos.innerHTML = resposta;
}
