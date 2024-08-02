function calculaRank(victories, defeats) {
    // Calcula o saldo de vitórias e garante que não seja negativo
    let winningBalance = victories - defeats;
    if (winningBalance <0) {
        winningBalance = 0;
    }

    // Objeto para armazenar os níveis e seus respectivos intervalos de vitórias
    const levels = [
        { name: "Ferro", min: 0, max: 10 },
        { name: "Bronze", min: 11, max: 20 },
        { name: "Prata", min: 21, max: 50 },
        { name: "Ouro", min: 51, max: 80 },
        { name: "Diamante", min: 81, max: 90 },
        { name: "Lendário", min: 91, max: 100 },
        { name: "Imortal", min: 101, max: Infinity }
    ];

    // Função para determinar o nível do jogador com base na quantidade de vitórias
    function defLevel(victories) {
        for (let level of levels) {
            if (victories >= level.min && victories <= level.max) {
                return level.name;
            }
        }
        return "Indefinido"; // Caso não se encaixe em nenhum nível
    }

    let level = defLevel(winningBalance);

    // Output da mensagem final
    console.log(`O Herói tem um saldo de ${winningBalance} e está no nível de ${level}`);
}

// Exemplo de input para uso da função
let victories = 90;
let defeats = 100;
console.log(`Você têm ${victories} vitórias e ${defeats} derrotas!`)
calculaRank(victories, defeats);

