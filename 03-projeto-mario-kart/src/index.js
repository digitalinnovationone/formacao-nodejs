// Modified by Fabio Toledo Bonemer De Salvi

// Objects
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

// Implementing all players 
// Array of objects
const players = [
    player1,
    {NOME: "Peach", VELOCIDADE: 3, MANOBRABILIDADE: 4, PODER: 2, PONTOS: 0},
    {NOME: "Yoshi", VELOCIDADE: 2, MANOBRABILIDADE: 4, PODER: 3, PONTOS: 0},
    {NOME: "Bowser", VELOCIDADE: 5, MANOBRABILIDADE: 2, PODER: 5, PONTOS: 0},
    player2,
    {NOME: "Kong", VELOCIDADE: 2, MANOBRABILIDADE: 2, PODER: 5, PONTOS: 0},
]


// Async functions
async function rollDice(){
    return Math.floor(Math.random() * 6) + 1;
}

// Switch Case
async function getRandomBlock(){
    let random = Math.random()
    let result

    // Switch case
    switch (true) {
        case random < 0.33:
            result = "RETA";
            break;
        case random < 0.66:
            result = "CURVA";
            break;
        default:
            result = "CONFRONTO";
    }

    return result;
}

// Functions Chains
async function playRaceEngine(playersForRace){
    // For
    // const -> não pode ser modificado
    // let -> pode ser modificado
    for(let round = 1; round <= 5; round++) {
        console.log(`🏁 Rodada ${round}`);

        // Sortear bloco
        let block = await getRandomBlock()
        // Definindo o bloco para teste
        //block = "CONFRONTO";
        console.log(`Bloco: ${block}`);

        //Definindo os pontos iniciais para teste
        /*
        for(let index=0; index < playersForRace.length; index++) {
            playersForRace[index].PONTOS = Math.floor(Math.random() * 0);
        }
        */

        // rolar os dados
        //let diceResult1 = await rollDice();
        //let diceResult2 = await rollDice();
        let diceResult = [];
        for (let index = 0; index < playersForRace.length; index++) {
            diceResult.push(await rollDice());
            //console.log(`DiceResult Jogador ${index+1} = ${diceResult[diceResult.length-1]}`);
        }        

        // teste de habilidade
        //let totalTestSkill1 = 0;
        //let totalTestSkill2 = 0;
        let totalTestSkill = [];

        // Testando Blocos - if
        if(block == "RETA"){
                //totalTestSkill1 = diceResult1 + character1.VELOCIDADE;
                //totalTestSkill2 = diceResult2 + character2.VELOCIDADE;
                for (let index = 0; index < playersForRace.length; index++) {
                    totalTestSkill.push(diceResult[index] + playersForRace[index].VELOCIDADE);
                }

                /*
                await logRollResult(
                    character1.NOME, 
                    "velocidade",
                    diceResult1,
                    character1.VELOCIDADE
                );

                await logRollResult(
                    character2.NOME, 
                    "velocidade",
                    diceResult2,
                    character2.VELOCIDADE
                );
                */
                for (let index = 0; index < playersForRace.length; index++) {
                    await logRollResult(
                        playersForRace[index].NOME, 
                        "velocidade",
                        diceResult[index],
                        playersForRace[index].VELOCIDADE
                    );
                }               
                console.log("");

        }                 

        if(block == "CURVA"){
                //totalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE;
                //totalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE;
                for (let index = 0; index < playersForRace.length; index++) {
                    totalTestSkill.push(diceResult[index] + playersForRace[index].MANOBRABILIDADE);
                }

                /*
                await logRollResult(
                    character1.NOME, 
                    "manobrabilidade",
                    diceResult1,
                    character1.MANOBRABILIDADE
                );

                await logRollResult(
                    character2.NOME, 
                    "manobrabilidade",
                    diceResult2,
                    character2.MANOBRABILIDADE
                );
                */         
                for (let index = 0; index < playersForRace.length; index++) {
                    await logRollResult(
                        playersForRace[index].NOME, 
                        "manobrabilidade",
                        diceResult[index],
                        playersForRace[index].MANOBRABILIDADE
                    );
                }         
                console.log("");
         
        }        
 
        if(block == "CONFRONTO"){
            // Escopo de variáveis
            //let powerResult1 = diceResult1 + character1.PODER;
            //let powerResult2 = diceResult2 + character2.PODER;
            let powerResult = [];
            for (let index = 0; index < playersForRace.length; index++) {
                powerResult.push(diceResult[index] + playersForRace[index].PODER);
                //powerResult.push(10);
            }

            //console.log(`${character1.NOME} confrontou com ${character2.NOME}! 🥊!`);
            console.log(await getMsgConfronto(playersForRace));

            /*
            await logRollResult(
                character1.NOME, 
                "poder",
                diceResult1,
                character1.PODER
            );

            await logRollResult(
                character2.NOME, 
                "poder",
                diceResult2,
                character2.PODER
            ); 
            */                
            for (let index = 0; index < playersForRace.length; index++) {
                await logRollResult(
                    playersForRace[index].NOME, 
                    "poder",
                    diceResult[index],
                    playersForRace[index].PODER
                );
            }  
            console.log("");
                            
            //continue; // skip the rest of the code               

            // Diminuindo Ifs - If ternario
            /*character2.PONTOS -=
                powerResult1 > powerResult2 && character2.PONTOS > 0 ? 1 : 0;*/

            // Condição Dupla - If Combinado
            /*
            if (powerResult1 > powerResult2 && character2.PONTOS > 0) {
                console.log(
                    `${character1.NOME} venceu o confronto! ${character2.NOME} perdeu 1 ponto 🐢!`
                );
                character2.PONTOS--;
            }
            */
            
            /*if (powerResult1 > powerResult2) {
                if (character2.PONTOS > 0) {
                    character2.PONTOS--;
                }
            } */

            // Diminuindo Ifs - If ternario
            /*character1.PONTOS -=
                powerResult1 < powerResult2 && character1.PONTOS > 0 ? 1 : 0;*/

            // Condição Dupla - If Combinado
            /*
            if (powerResult1 < powerResult2 && character1.PONTOS > 0) {
                console.log(
                    `${character2.NOME} venceu o confronto! ${character1.NOME} perdeu 1 ponto 🐢!`
                );                
                character1.PONTOS--;
            }
            */

            /*if (powerResult1 < powerResult2) {
                if (character1.PONTOS > 0) {
                    character1.PONTOS--;
                }
            }*/   
            
            // Diminuindo Ifs - If ternario
            /*
            console.log(
                powerResult1 == powerResult2
                ? "Confronto empatado! Nenhum ponto foi perdido!"
                : ""
            );
            */
            /*if (powerResult1 == powerResult2) {
                console.log("Confronto empatado! Nenhum ponto foi perdido!");
            }*/ 


            // Obtendo o maior valor de powerResult
            let maxPower = 0;
            for(index = 0; index < playersForRace.length; index++) {
                // if Ternario
                maxPower = powerResult[index] > maxPower ? 
                    powerResult[index] : maxPower
            }

            // Identificando os vencedores e perdedores do confronto!
            let vencedores = [];
            let perdedores = [];            
            for(index = 0; index < playersForRace.length; index++) {
                //let playerForRace = playersForRace[index];
                if (powerResult[index] == maxPower) {                                        
                    //vencedores.push({index: index, ...playerForRace}); // ... spread syntax
                    vencedores.push({INDEX: index, ...playersForRace[index]}); // ... spread syntax
                } else {
                    //perdedores.push({INDEX: index, ...playerForRace});
                    perdedores.push({INDEX: index, ...playersForRace[index]}); // ... spread syntax
                }
            }       
            
            // Empate
            if (vencedores.length == playersForRace.length) {
                console.log("Confronto empatado! Nenhum ponto foi perdido!");                
            } else {
                // Vencedores
                let turbo = Math.random() > 0.5 ? true : false;
                let msgPlayerNames = await getMsgWithPlayers(vencedores);
                if (vencedores.length == 1) {
                    if (turbo == true) {                        
                        console.log(`${msgPlayerNames} venceu o confronto e ganhou 1 ponto de turbo 🌟!`);
                    } else {
                        console.log(`${msgPlayerNames} venceu o confronto!`)
                    }                    
                } else if (vencedores.length > 1) {
                    if (turbo == true) {                        
                        console.log(`${msgPlayerNames} venceram o confronto e ganharam 1 ponto de turbo 🌟!`);
                    } else {
                        console.log(`${msgPlayerNames} venceram o confronto!`)
                    }
                }
               
                for (let index = 0; index < vencedores.length; index++) {
                    if (turbo == true) {
                        //console.log(`${playersForRace[vencedores[index].INDEX].NOME} - ${playersForRace[vencedores[index].INDEX].PONTOS}`);
                        playersForRace[vencedores[index].INDEX].PONTOS++;
                        //console.log(`${playersForRace[vencedores[index].INDEX].NOME} - ${playersForRace[vencedores[index].INDEX].PONTOS}`);
                    }
                }

                
                // Perdedores
                let cascoOuBomba = Math.random() > 0.5 ? 1 : 2; // 1 -> casco, 2 -> bomba   
                for (let index = 0; index < perdedores.length; index++){ 
                    //console.log(`${playersForRace[perdedores[index].INDEX].NOME} - ${playersForRace[perdedores[index].INDEX].PONTOS}`);             
                    if (cascoOuBomba == 1) {
                        if (playersForRace[perdedores[index].INDEX].PONTOS > 0) {
                            console.log(
                                `${playersForRace[perdedores[index].INDEX].NOME} perdeu 1 ponto 🐢!`
                            ); 
                            playersForRace[perdedores[index].INDEX].PONTOS--;
                        }
                    } else {
                        if (playersForRace[perdedores[index].INDEX].PONTOS > 1) {
                            console.log(
                                `${playersForRace[perdedores[index].INDEX].NOME} perdeu 2 pontos 💣!`
                            ); 
                            playersForRace[perdedores[index].INDEX].PONTOS = playersForRace[perdedores[index].INDEX].PONTOS - 2 ;
                        } else if (playersForRace[perdedores[index].INDEX].PONTOS > 0) {
                            console.log(
                                `${playersForRace[perdedores[index].INDEX].NOME} perdeu 1 ponto 💣!`
                            ); 
                            playersForRace[perdedores[index].INDEX].PONTOS-- ;       
                        }                     
                    }                  
                    //console.log(`${playersForRace[perdedores[index].INDEX].NOME} - ${playersForRace[perdedores[index].INDEX].PONTOS}`);             
                }
            }
           
        }           

        // Verificando o vencedor.
        // Winner - Else If's
        /*
        if (totalTestSkill1 > totalTestSkill2) {
            console.log(`${character1.NOME} marcou um ponto!`);
            character1.PONTOS++;
        } else if (totalTestSkill1 < totalTestSkill2) {
            console.log(`${character2.NOME} marcou um ponto!`);
            character2.PONTOS++;
        }
        */

        // Obtendo o maior valor de totalTestSkill
        let maxSkill = 0;
        for(index = 0; index < playersForRace.length; index++) {
            // if Ternario
            maxSkill = totalTestSkill[index] > maxSkill ? 
                totalTestSkill[index] : maxSkill
        }

        // Identificando os vencedores da etapa!
        
        for(index = 0; index < playersForRace.length; index++) {
            if (totalTestSkill[index] == maxSkill && maxSkill != 0) {
                playersForRace[index].PONTOS++;
                console.log(`${playersForRace[index].NOME} marcou um ponto!`);
            } 
        }               

        console.log("-----------------------------------------");

    }

}

// Encapsulate
async function logRollResult(characterName, block, diceResult, attribute) {
    // Javascript Expressions: $ {
    //                              a + b
//                              }
    console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${
        attribute} = ${           
            diceResult + attribute
        }`);
}

// Game Over - Clean Ifs
async function declareWinner(charactes) {
    console.log("Resultado final:");
    //console.log(`${character1.NOME}: ${character1.PONTOS} ponto(s).`);
    //console.log(`${character2.NOME}: ${character2.PONTOS} ponto(s).`);
    for(let index = 0; index < charactes.length; index++) {
        console.log(`${charactes[index].NOME}: ${charactes[index].PONTOS} ponto(s).`);
    }
    console.log("");

    // If encadeado
    /*    
    if (character1.PONTOS > character2.PONTOS) 
        console.log(`\n${character1.NOME} venceu a corrida! Parabéns! 🏆!`);
    else if ((character2.PONTOS > character1.PONTOS)) 
        console.log(`\n${character2.NOME} venceu a corrida! Parabéns! 🏆!`);        
    else 
        console.log("A corrida terminou em empate!");
    */

    // Obtendo a pontuação máxima
    let maxPontos = 0;
    for(let index = 0; index < charactes.length; index++) {
        maxPontos =  charactes[index].PONTOS > maxPontos ? 
            charactes[index].PONTOS : maxPontos;
            
    }  

    // Identificando os vencedores da corrida!            
    let vencedores = [];    
    for(let index = 0; index < charactes.length; index++) {
        if (charactes[index].PONTOS >= maxPontos) {                                                   
            vencedores.push({INDEX: index, ...charactes[index]}); // ... spread syntax
        }
    }        
    
    // Msg com os nomes dos vencedores
    let msgPlayerNames = await getMsgWithPlayers(vencedores);
    if (vencedores.length == 1) {
        console.log(`${msgPlayerNames} venceu a corrida! Parabéns! 🏆!`)                  
    } else if (vencedores.length < charactes.length) {
        console.log(`${msgPlayerNames} venceram a corrida! Parabéns! 🏆!`)
    } else {
        console.log("A corrida terminou em empate!");        
    }
}

// Print all players
async function printAllCharacters(charcters) {
    let msgAllCharacters = "";
    console.log("");
    console.log("🏁🤩 Lista dos personagens disponíveis e suas características!");
    console.log("");
    for(let index = 0; index < charcters.length; index++) {
        msgAllCharacters = `${index + 1} - ${charcters[index].NOME}. [velocidade: ${charcters[index].VELOCIDADE},`;
        msgAllCharacters += `manobrabilidade: ${charcters[index].MANOBRABILIDADE}, poder: ${charcters[index].PODER}].`;
        console.log(msgAllCharacters);
    }
    console.log("");

}

// Number of players
async function getNumberOfPlayers(defaultNumberPlayers) {
    
    console.log("");
    console.log("🏁🤩 Número de jogadores! ");

    const prompt = require("prompt-sync")(); //npm install prompt-sync
    const userInput = prompt(`Qual o número de jogadores? (Mínimo: 2. Máximo: ${players.length}.): `); 
    
    let numJogadores = parseInt(userInput, 10);
    //console.log(`Número de jogadores: ${numJogadores}.`);

    //if (typeof numJogadores === 'number' && numJogadores != NaN){
    if (numJogadores !== NaN && numJogadores >= 2 && numJogadores <= 6){        
        /*
        if (numJogadores < 2 || numJogadores > 6) {
            numJogadores = defaultNumberPlayers;
        }*/
        console.log(`Foi escolhido ${numJogadores} jogadores!`);
    } else {
        numJogadores = defaultNumberPlayers;
        console.log(`Foi definido o número padrão de ${numJogadores} jogadores!`)
    }

    console.log("");

    return numJogadores;

}

// Selecting players for race
async function getPlayersForRace(numberOfPlayers) {
    let playersForRace = [];

    console.log("");
    console.log(`🏁🤩 Definindo os ${numberOfPlayers} jogadores que participarão da corrida!`);
    console.log("As seis opções estão listadas acima!");
    console.log("Defina cada jogador com um número correspondente ao personagem!");
    console.log("O sistema irá definir o personagem de forma aleatória para números diferentes aos listados acima ou para números repetidos!");

    const prompt = require("prompt-sync")(); //npm install prompt-sync

    for (let jogador = 1; jogador <= numberOfPlayers; jogador++) {
        console.log("");
        const userInput = prompt(`Definindo o jogador ${jogador}. Digite um número entre 1 a 6: `);     
        let numPlayer = parseInt(userInput, 10);
        //console.log(`Número do personagem: ${numPlayer}. ${(numPlayer == NaN)}`);

        if (numPlayer !== NaN || numPlayer < 1 || numPlayer > players.length) {
            let playerSelected = false;
            const min = 1;
            const max = 6;
            while(!playerSelected) {
                // Math.random() -> [0, 1) - 0->inclusivo e 1-> exclusivo
                // Math.floor(number) -> maior inteiro menor ou igual ao argumento
                numPlayer = Math.floor(Math.random() * (max - min + 1)) + min;
                //console.log(`Jogador ${jogador} - random ${numPlayer}`);
                playerSelected = true
                if (playersForRace.length > 0){
                    for(let indexRace = 0; indexRace < playersForRace.length; indexRace++) {
                        if (players[numPlayer-1].NOME === playersForRace[indexRace].NOME) {
                            playerSelected = false;
                        }
                        //console.log(`Jogador ${jogador} - Players.NOME = ${players[numPlayer-1].NOME} === PlayersForRace.NOME = ${playersForRace[indexRace].NOME}: ${players[numPlayer-1].NOME === playersForRace[indexRace].NOME}`);                        
                    }
                }
            }
        }     
        playersForRace.push(players[numPlayer-1])              
        console.log(`Jogador ${jogador} - ${playersForRace[jogador-1].NOME}. [velocidade: ${playersForRace[jogador-1].VELOCIDADE}, manobrabilidade: ${playersForRace[jogador-1].MANOBRABILIDADE}, poder: ${playersForRace[jogador-1].PODER}].`);                                  

    }
    
    //console.log(``)
    //await printAllPlayers(playersForRace);

    console.log(``)

    return playersForRace;
}

// Creating a message with the players name
async function getMsgWithPlayers(players) {
    let msgWithPlayers = ""

    for (let index = 0; index < players.length; index++) {
        if (index == 0) {
            //msgWithPlayers = `${msgWithPlayers} ${players[index].NOME}`;
            msgWithPlayers = `${players[index].NOME}`;
        }
        else if (players.length - index >= 2)
            msgWithPlayers = `${msgWithPlayers}, ${players[index].NOME}`;
        else
            msgWithPlayers = `${msgWithPlayers} e ${players[index].NOME}`;            
    }

    //msgWithPlayers =  "\n";

    return msgWithPlayers;
}

// Creating a message with the players name
async function getMsgConfronto(players) {
    let msgConfronto = "Confronto entre"

    for (let index = 0; index < players.length; index++) {
        if (index == 0)
            msgConfronto = `${msgConfronto} ${players[index].NOME}`;
        else if (players.length - index >= 2)
            msgConfronto = `${msgConfronto}, ${players[index].NOME}`;
        else
            msgConfronto = `${msgConfronto} e ${players[index].NOME}`;            
    }

    msgConfronto = msgConfronto + " começando 🥊!\n";

    return msgConfronto;
}

// Creating a message with the players name
async function getMsgCorrida(players) {
    let msgCorrida = "🏁🚨 Corrida entre"

    for (let index = 0; index < players.length; index++) {
        if (index == 0)
            msgCorrida = `${msgCorrida} ${players[index].NOME}`;
        else if (players.length - index >= 2)
            msgCorrida = `${msgCorrida}, ${players[index].NOME}`;
        else
            msgCorrida = `${msgCorrida} e ${players[index].NOME}`;            
    }

    msgCorrida = msgCorrida + " começando...\n";

    return msgCorrida;
}

// Auto invoke
(async function main() {

    console.log("");
    console.log("🏁🕹️  Desafio de projeto do Felipão: Mario Kart.JS.");
    console.log("🏁🕹️  Modificado por Fabio Toledo Bonemer De Salvi.");
    console.log("");
    
    await printAllCharacters(players); 

    let numberOfPlayers = await getNumberOfPlayers(2);   

    let playersForRace = await getPlayersForRace(numberOfPlayers);

    let msgCorrida = await getMsgCorrida(playersForRace);
    
    //console.log(`🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando...\n`)
    console.log(msgCorrida);
    
    //await playRaceEngine(player1, player2);
    await playRaceEngine(playersForRace);

    //await declareWinner(player1, player2);
    await declareWinner(playersForRace);
})();

/*
// Or
async function main() {
    console.log(`🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando...\n`)

    await playRaceEngine(player1, player2);
    await declareWinner(player1, player2);
}

main();
*/


/* Sketch

    To insert icon press "win" + ".".
    
    const -> não pode ser modificado
    let -> pode ser modificado

    
    For input data in Node.js
    $ npm install prompt-sync    

    In JavaScript, comparing NaN (Not-a-Number) values directly using equality operators (==, ===, !=, !==) yields specific and often counter-intuitive results:
    - NaN is never equal to itself: NaN == NaN and NaN === NaN both evaluate to false. This is a unique characteristic of NaN in JavaScript and other floating-point implementations.
    - NaN is never equal to any other value: Comparing NaN to any other number, string, boolean, or object using == or === will always result in false.
    - NaN is never unequal to itself: Consequently, NaN != NaN and NaN !== NaN both evaluate to true.    

    continue; // skip the rest of the code   

*/    

/*
    - Confronto
        - sortear aleatoriamente se é um casco (-1 ponto) ou uma bomba (-2 pontos)
        - quem vence o confronto ganha um turbo (+ 1 ponto) aleatoriamente.
*/
