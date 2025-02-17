// Função para gerar um vetor de N números inteiros aleatórios entre 0 e 99
function buildArray(n) {
    let array = [];
    for (let i = 0; i < n; i++) {
        array.push(parseInt(Math.random() * 100));
    }
    return array;
}

// Função para calcular a média dos valores do vetor e contar quantos estão acima da média
function countAboveAverage(array) {
    const total = array.reduce((acc, num) => acc + num, 0);
    const media = total / array.length;
    const count = array.filter(num => num > media).length;
    return count;
}

// Função para verificar se existem dois números no vetor que somados resultam em N
function hasPairWithSum(array, N) {
    const seen = new Set();
    for (let num of array) {
        const complement = N - num;
        if (seen.has(complement)) {
            return true; // Encontrou um par que soma N
        }
        seen.add(num);
    }
    return false; // Nenhum par encontrado
}

// Exemplo de uso
const n = 10; // Tamanho do vetor
const randomArray = buildArray(n);
console.log("Vetor gerado:", randomArray);

const aboveAverageCount = countAboveAverage(randomArray);
console.log("Quantidade de números acima da média:", aboveAverageCount);

const N = 50; // Valor para verificar a soma
const hasPair = hasPairWithSum(randomArray, N);
console.log(`Existem dois números que somam ${N}?`, hasPair);
