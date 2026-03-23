let decrementar = document.getElementById("decrementar");
let incrementar = document.getElementById("incrementar");
let contar = document.getElementById("contar"); 
let contador = 0; 

decrementar.onclick = function() {
    if(contador > 0) {
        contador--;
        contar.textContent = contador;
    } else {
        alert("Erro, o contador já está em zero");
    }
}

incrementar.onclick = function() {
        contador++;
        contar.textContent = contador;
}

let entrada = document.getElementById("input");
let resultado = document.getElementById("resultado");

entrada.onkeydown = function(event){
    if(event.key == "Enter") {
        resultado.innerHTML = entrada.value;
        entrada.value = "";
    }
}

let resultado2 = document.getElementById("resultado2");
let input = document.getElementById("caractere");
input.oninput = function() {
    let texto = input.value;
    let textoSemEspaco = texto.replace(/ /g,"");
    let tamanho = textoSemEspaco.length;
    resultado2.textContent = tamanho;
}

let itens = document.getElementById("add");
let lista = document.getElementById("lista");
let tipoLista = document.getElementById("tipoLista");
let botaoAdd = document.getElementById("botaoAdd");
let ul = document.createElement("ul");
let ol = document.createElement("ol");

lista.appendChild(ul);
lista.appendChild(ol);

botaoAdd.onclick = function() {
    let li = document.createElement("li");
    let texto = itens.value;
    li.textContent = texto;

    if(tipoLista.value == "ul"){
        ul.appendChild(li);
    } else {
        ol.appendChild(li);
    }
    itens.value = "";
}

let botaoReset = document.getElementById("botaoReset");

botaoReset.onclick = function() {
    contador = 0;
    contar.textContent = contador;
    input.value = "";
    resultado2.textContent = "";
    entrada.value = "";
    resultado.textContent = "";
    ul.innerHTML = "";
    ol.innerHTML = "";
}