let data = {
    "SP": 67836.34,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
}

function valor_total(data) {
    let total = 0;
    for (let estado in data) {
        total += data[estado];
    }
    return total;
}

function percentual(data) {
    let total = valor_total(data);
    let percentage = {};
    for (let estado in data) {
        let estado_percentage = (100 * data[estado]) / total;
        percentage[estado] = estado_percentage;
    }
    return percentage;
}

console.log(percentual(data));