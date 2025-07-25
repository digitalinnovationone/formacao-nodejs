const player1 = {
    NOME: "Mario",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS: 0,
};

const player2 = {
    NOME: "Luigi",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 0,
};

async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
    let random = Math.random();
    let result;

    switch (true) {
        case random < 0.33:
            result = "RETA";
            break;
        case random < 0.66:
            result = "CURVA"
            break;
        default:
            result = "CONFRONTO"
            break;
    }
    return result
}

async function getRandomPower() {
    let random = Math.random();
    let result;
    
    if(random > 0.50){
        result = "CASCO";
    }else
        result = "BOMBA";
    return result
}

async function getRandomTurbo() {
    let randomTurbo = Math.random()
    let result

    if(randomTurbo > 0.50){
        result = 1
    }else
        result = 0
    return result
}

async function logRollResult(characterName,block,diceResult,attribute) {
    console.log(`${characterName} 🎲 rolou o dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`)
    
}

async function declareWinner(player1,player2){
    console.log("Resultado final:");
    console.log(`${player1.NOME}: ${player1.PONTOS} ponto(s).`);
    console.log(`${player2.NOME}: ${player2.PONTOS} ponto(s).`);

    if(player1.PONTOS > player2.PONTOS){
        console.log(`\n${player1.NOME} venceu a corrida! Parabéns! 🏆 `);
    }else if(player2.PONTOS > player1.PONTOS){
        console.log(`\n${player2.NOME} venceu a corrida! Parabéns! 🏆 `);
    }else{
        console.log("A corrida terminou em empate!")
    }
}

async function playRaceEngine(character1, character2) {
    for (let round = 1; round <= 5; round++) {
        console.log(`🏁 Rodada ${round}`);
    
    //sortear bloco  
    let block = await getRandomBlock()
        console.log(`Bloco: ${block}`)
    
    //rolar os dados
    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();
    
    //teste de habilidade
    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;

    if(block === "RETA"){
        totalTestSkill1 = diceResult1 + player1.VELOCIDADE;
        totalTestSkill2 = diceResult2 + player2.VELOCIDADE;

    await logRollResult(player1.NOME,"velocidade",diceResult1,character1.VELOCIDADE)
    await logRollResult(player2.NOME,"velocidade",diceResult2,character2.VELOCIDADE)
    }

    if(block === "CURVA"){
        totalTestSkill1 = diceResult1 + player1.MANOBRABILIDADE;
        totalTestSkill2 = diceResult2 + player2.MANOBRABILIDADE;

    await logRollResult(player1.NOME,"manobrabilidade",diceResult1,character1.MANOBRABILIDADE)
    await logRollResult(player2.NOME,"manobrabilidade",diceResult2,character2.MANOBRABILIDADE)
    }

    if(block === "CONFRONTO"){
        let randomTurbo = await getRandomTurbo()
        let randomPower = await getRandomPower()
        let powerResult1 = diceResult1 + player1.PODER;
        let powerResult2 = diceResult2 + player2.PODER;

        console.log(`${player1.NOME} confrontou com ${player2.NOME}!! 🥊🥊`)

        await logRollResult(player1.NOME,"CONFRONTO",diceResult1,player1.PODER);

        await logRollResult(player2.NOME,"CONFRONTO",diceResult2,player2.PODER);

    if(randomPower === "CASCO"){
       if(powerResult1 > powerResult2 && player2.PONTOS > 0){
            console.log(`${player1.NOME} ganhou o confronto utilizando um CASCO! ${player2.NOME} perdeu 1 ponto 🐢`);
            if(randomTurbo == 1){
                console.log(`${player1.NOME} Conseguiu um TURBO e ganhou 1 ponto.`)
                player1.PONTOS++;
                player2.PONTOS--;
            }else{
                player2.PONTOS--;
            }
       }
       
       if(powerResult2 > powerResult1 && player1.PONTOS > 0){
            console.log(`${player2.NOME} ganhou o confronto utilizando um CASCO! ${player1.NOME} perdeu 1 ponto 🐢`);
            if (randomTurbo == 1){
                console.log(`${player2.NOME} Conseguiu um TURBO e ganhou 1 ponto.`)
                player2.PONTOS++;
                player1.PONTOS--;
            }else{
                player1.PONTOS--;
            }

       }
    }

    if(randomPower === "BOMBA"){
       if(powerResult1 > powerResult2 && player2.PONTOS > 0){
            console.log(`${player1.NOME} ganhou o confronto utilizando uma BOMBA! ${player2.NOME} perdeu 2 pontos 💣`);
            if(randomTurbo == 1){
                console.log(`${player1.NOME} Conseguiu um TURBO e ganhou 1 ponto.`)
                player1.PONTOS ++;
                player2.PONTOS -= 2;
            }else{
                player2.PONTOS -= 2;
            }
       }
       
       if(powerResult2 > powerResult1 && player1.PONTOS > 0){
            console.log(`${player2.NOME} ganhou o confronto utilizando um BOMBA! ${player1.NOME} perdeu 2 pontos 💣`);
            if(randomTurbo == 1){
                console.log(`${player2.NOME} Conseguiu um TURBO e ganhou 1 ponto.`)
                player2.PONTOS++;
                player1.PONTOS -= 2;
            }else{
                player1.PONTOS -= 2;
            }
       }
    }
         console.log(powerResult1 === powerResult2 ? 'Confronto empatado! Nenhum ponto foi perdido!' : " ");
    }

    //verificando o vencedor
    if(totalTestSkill1 > totalTestSkill2){
        console.log(`${player1.NOME} marcou 1 ponto!`)
        player1.PONTOS++;
    }
    else if(totalTestSkill2 > totalTestSkill1){
        console.log(`${player2.NOME} marcou 1 ponto!`)
        player2.PONTOS++;
    }

    console.log("________________________________________________")
}}


(async function main() {
    console.log(`🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando ...\n`);

    await playRaceEngine(player1, player2);
    await declareWinner(player1,player2)
})();

