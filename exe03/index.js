const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'dados.json');
const faturamentoDiario = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

function menorValor(faturamento) {
    return Math.min(...faturamento.map(dia => dia.valor));
}

function maiorValor(faturamento) {
    return Math.max(...faturamento.map(dia => dia.valor));
}

function mediaMensal(faturamento) {
    const total = faturamento.reduce((acc, dia) => acc + dia.valor, 0);
    const diasComFaturamento = faturamento.filter(dia => dia.valor > 0).length;
    return total / diasComFaturamento;
}

function diasAcimaDaMedia(faturamento, media) {
    return faturamento.filter(dia => dia.valor > media).length;
}

const menor = menorValor(faturamentoDiario);
const maior = maiorValor(faturamentoDiario);
const media = mediaMensal(faturamentoDiario);
const diasAcima = diasAcimaDaMedia(faturamentoDiario, media);

console.log(`Menor valor de faturamento: ${menor}`);
console.log(`Maior valor de faturamento: ${maior}`);
console.log(`Número de dias com faturamento superior à média mensal: ${diasAcima}`);
