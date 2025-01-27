let data = require("./dados.json");
console.log(data);

function media(data) {
    let total_dias = 0;
    let soma = 0;
    data.forEach( dia => {
        if(dia.valor != 0) {
            soma += dia.valor;
            total_dias += 1;
        }
    })

    return soma / total_dias;
}

function menor_valor_diario(data) {
    let minimum = 0;
    data.forEach( dia => {
        if(dia.valor != 0) {
            if( minimum == 0 || dia.valor < minimum) {
                minimum = dia.valor;
            }
        }
    })
    return minimum;
}

function maior_valor_diario(data) {
    let maximum = 0;
    data.forEach(dia => {
        if(dia.valor > maximum) {
            maximum = dia.valor;
        }
    })
    return maximum;
}

function dias_com_valor_maior_que_media(data, media) {
    let dias = 0;
    data.forEach( dia => {
        if( dia.valor > media) {
            dias++;
        }
    })
    return dias;
}
console.log("Menor valor de faturamento do mes: " + menor_valor_diario(data));
console.log("Maior valor de faturamento do mes: " + maior_valor_diario(data));
console.log("Numero de dias no mes com o valor de faturamento diario superior a media mensal: " 
    + dias_com_valor_maior_que_media(data, media(data)));
