const faturamentoPorEstado = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

function calcularPercentuais(faturamento) {
    const total = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);

    const percentuais = {};
    for (const estado in faturamento) {
        const valor = faturamento[estado];
        percentuais[estado] = ((valor / total) * 100).toFixed(2);
    }

    return percentuais;
}

const percentuais = calcularPercentuais(faturamentoPorEstado);

console.log("Percentual de representação por estado:");
for (const estado in percentuais) {
    console.log(`${estado}: ${percentuais[estado]}%`);
}
