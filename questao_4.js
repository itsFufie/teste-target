let data = {
    "SP": 67836.34,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
}

function valor_total(data) {
    for (let estado in data) {
        console.log(data[estado]);
    }
}
valor_total(data);