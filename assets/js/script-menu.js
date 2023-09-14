const hamburguer = document.querySelectorAll(".hamburguer");
const sobremesa = document.querySelectorAll(".sobremesa");
const selectFood = document.getElementById("food");

selectFood.addEventListener("change", () => {
    var food = selectFood.value;
    console.log(food);
    if(food == "hamburguer") {
        exibir(hamburguer, true);
        exibir(sobremesa, false);
    } else if (food == "sobremesa") {
        exibir(hamburguer, false);
        exibir(sobremesa, true);
    } else if (food == "tudo") {
        exibir(hamburguer, true);
        exibir(sobremesa, true);
    }
});

function exibir(food, condition) {
    for(let i = 0; i < food.length; i++) {
        food[i].style.display = condition ? "inline" : "none";
    }
}

pContent = [
    "Um hambúrguer suculento de carne angus grelhada, coberto com queijo cheddar defumado derretido, cebolas caramelizadas, bacon crocante e nosso molho de churrasco caseiro. Servido em um pão brioche fresco com alface e tomate.",

    "Uma opção vegetariana deliciosa com um hambúrguer de grão-de-bico temperado, queijo feta cremoso, azeitonas Kalamata, pepino, alface, tomate e nosso molho tzatziki caseiro. Servido em um pão de beterraba.",

    "Uma criação especial do nosso chef executivo que muda regularmente. Este hambúrguer sazonal apresenta ingredientes frescos e emocionantes, combinados para uma explosão de sabor única a cada visita. Pergunte ao nosso garçom sobre o hambúrguer surpresa do dia!",

    "Uma indulgência decadente para os amantes de chocolate. Uma torta de chocolate belga com uma base de biscoito crocante, recheada com um ganache de chocolate cremoso e coberta com raspas de chocolate e chantilly.",

    "Uma sobremesa clássica com um toque gourmet. Fatias de maçã fresca caramelizadas em especiarias, cobertas com uma massa folhada dourada e servidas com uma bola de sorvete de baunilha e calda de caramelo."
];

var pPrice = [
    "R$ 26,90",
    "R$ 22,50",
    "Preço variável",
    "R$ 16,90",
    "R$ 18,50"
];

document.querySelectorAll(".content-text").forEach((p, i) => {
    p.innerText = pContent[i];
});

document.querySelectorAll(".price").forEach((p, i) => {
    p.innerText = pPrice[i];
});