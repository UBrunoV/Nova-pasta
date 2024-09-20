// index.js

// Função para calcular a soma dos argumentos divisíveis por 2
function somaDivisiveisPor2(args) {
    return args
        .map(Number) // Converte os argumentos para números
        .filter(num => num % 2 === 0) // Filtra os números divisíveis por 2
        .reduce((acc, num) => acc + num, 0); // Soma os números filtrados
}

// Obtém os argumentos da linha de comando (excluindo o caminho do node e do script)
const args = process.argv.slice(2);

// Chama a função e exibe o resultado
const resultado = somaDivisiveisPor2(args);
console.log(`A soma dos números divisíveis por 2 é: ${resultado}`);
