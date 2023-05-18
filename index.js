var readline = require('readline-sync');
var opcao = 1
var valor = 1000
var assento = ""
do {
    console.log(" __ __ __ __ < PASSAGENS AÉREAS > __ __ __ __ ");
    console.log("|                                            |");
    console.log("| 1 - Comprar passagens                      |");
    console.log("| 2 - Consultar voos                         |");
    console.log("| 3 - Mapa de Assentos                       |");
    console.log("| 4 - Emitir tiket                           |");
    console.log("| 0 - Encerrar o Programa                    |");
    console.log("|__ __ __ __ __ __ __ __ __ __ __ __ __ __ __|");
    opcao = readline.question("Escolha uma das opcoes")
    opcao = parseInt(opcao);
    switch (opcao) {
        case 1:
            console.log(" __ __ __ __ < COMPRAR PASSAGENS > __ __ __ __ ");
            console.log("Preencha estes dados para realizar sua compra");
            var nome = readline.question("Digite seu primeiro nome: ");
            var sobrenome = readline.question("Digite seu sobrenome: ");
            var idade = readline.question("Digite sua idade: ");
            assento = readline.question("Escolha um assento: ");
            //verificar se assento existe no avião
            var j = 1;
            var flag = false;
            while(j<12){
                var verAssentoA =  'A'+j;
                var verAssentoB =  'B'+j;
                
                if(verAssentoA==assento){
                flag = true;
                }   
                if(verAssentoB!=assento){
                flag = true;
                }

                j++;
            }
            
            if(flag == true){
            var origem = readline.question("Digite o local de embarque: ");
            var destino = readline.question("Digite seu destino final: ");

            console.log(" __ __ __ __ < COMPRAR PASSAGEM > __ __ __ __ ");
            console.log("Cliente: " + nome + " " + sobrenome);
            console.log("Idade: " + idade);
            console.log("Assento: " + assento);
            console.log("Voo: " + origem + " X " + destino);
            console.log("Statos do Voo : confirmado");
            console.log();
            console.log("valor: R$ " + valor);
            console.log();

            break;
            }else{
                break;
            }
        case 2:
            console.log(" __ __ __ __ < CONSULTA DE VOOS > __ __ __ __ ");
            console.log();
            console.log("origem                       X  Destino       ");
            console.log('----------------------------------------------')
            console.log("Presidente Prudente          X  São Paulo     ");
            console.log("Presidente Prudente          X  Nova Iorque   ");
            console.log("Presidente Prudente          X  Ceara         ");
            console.log("Presidente Prudente          X  Dublin        ");
            console.log();
            console.log(" __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ ");
            console.log();
            break;
        case 3:
            console.clear()
            var filA = ''
            var filB = ''
            var i = 0
            var u = 0

            console.log(" __ __ __ __ < Mapa de assentos > __ __ __ __ ");
            console.log();

            for (i = 1; i <= 12; i++) {
                aux = 'A' + i 
                if (aux == assento) {
                    filA = filA + ' X '
                }
                else {
                    filA = filA + aux + " "
                }
               
            }

            console.log(filA);

            for (u = 1; u <= 12; u++) {
                auxb = 'B' + u 
                if (auxb == assento) {
                    filB = filB + ' X '
                }
                else {
                    filB = filB + auxb  + " "
                }
               
            }
            console.log(filB);

            console.log(" __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ ");
            console.log();
            break;
        case 4: ;
            console.log("__________________________________________________")
            console.log("Emitir tiket");
            console.log("---------------------------------------------");
            console.log("  Cliente: " + nome + " " + sobrenome);
            console.log("  Idade: " + idade);
            console.log("  Assento: " + assento);
            console.log("  Origem/Destino " + origem + " >>> " + destino);
            console.log("  Statos do Voo : confirmado");
            console.log("---------------------------------------------");
            console.log("__________________________________________________")
            break;
        default:
            console.log("Desculpe não temos esta opção");
    }
} while (opcao != 0)
console.log("programa encerrado")