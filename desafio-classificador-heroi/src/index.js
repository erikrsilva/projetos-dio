// Criando variável para armazenar nome e quantidade de xp
let nome = "Erik";
let xp = 10005;

// Variável para armazenar o nível do herói
let nivel = "";

// Criando função para determinar o Ranking do Herói de acordo com XP acumulado atual
function determinaRankingHeroi(xp) {
    // Bloco do switch
    switch (true) {
        case (xp < 1000):
            return "Ferro";
        case (xp <= 2000):
            return "Bronze";
        case (xp <= 5000):
            return "Prata";
        case (xp <= 7000):
            return "Ouro";
        case (xp <= 8000):
            return "Platina";
        case (xp <= 9000):
            return "Ascendente";
        case (xp <= 10000):
            return "Imortal";
        default:
            return "Radiante";
    }
}

// Determinando o valor da variável de nível do herói
nivel = determinaRankingHeroi(xp);

// Output
console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
