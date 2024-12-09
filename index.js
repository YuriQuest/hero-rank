const heroiRank = [
    { nome: "Sigurd",   rank: "Ferro"},
    { nome: "Dai",      rank: "Bronze"},
    { nome: "Ling",     rank: "Prata"},
    { nome: "Ronan",    rank: "Ouro"},
    { nome: "Clark",    rank: "Platina"},
    { nome: "Don",      rank: "Ascendente"},
    { nome: "Chris",    rank: "Imortal"},
    { nome: "Edward",   rank: "Radiante"}
];

let xp = 0;  // pontos de experiencia
let nivel;   // variavel que irá armazenar o nivel de rank

if(xp<1001) {
    nivel = heroiRank[0].rank;
}else if(xp>1000 && xp < 2001) {
    nivel = heroiRank[1].rank;
}else if(xp>2000 && xp < 5001) {
    nivel = heroiRank[2].rank;
}else if(xp>5000 && xp < 7001) {
    nivel = heroiRank[3].rank;
}else if(xp>7000 && xp < 8001) {
    nivel = heroiRank[4].rank;
}else if(xp>8000 && xp < 9001) {
    nivel = heroiRank[5].rank;
}else if(xp>9000 && xp < 10001) {
    nivel = heroiRank[6].rank;
}else if(xp>10000) {
    nivel = heroiRank[7].rank;
}

// chamado de nome de heroi: heroi["numeroDaPosição"]."nomeOuRank"
print(`O Herói de nome **${heroi[0].nome}** está no nível de **${nivel}**`)
