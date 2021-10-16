let peso = 99.5;

if (peso > 99){
    console.log("A peca possui o peso adequado, pode ser cadastrada!")
}
else {
    console.log("A peca nao pode ser cadastrada, peso nao atingiu o minimo")
}

let listaPecas = ["Motor de Partida", "Amortecedor", "Virabrequim", "Vela", "Bateria", "Radiador", "Correia", "Carter", "Ignicao", "Embreagem"];

if (listaPecas.length < 10){
    console.log("A lista ainda possui espaco para mais pecas")
} else {
    console.log("Nao ha espaco disponivel na lista, a capacidade maxima foi atingida")
}

let texto = "35" //String
let numero = 35  //Number


let nomePeca = "Fio "

if (nomePeca.length > 3) {
    console.log("nome da peça é valido, pode seguir com o cadastro");
}else {
    console.log("Nome da peça invalido, o nome deve ter mais de 3 caracteres");
}



