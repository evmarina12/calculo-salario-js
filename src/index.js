// Le os valores de entrada 
const valorSalario = parseFloat(gets());
const valorBeneficios = parseFloat(gets());

// Calcula o imposto através da funcao "calcularImposto"

const valorImposto = calcularImposto(valorSalario);

// Calcula e imprime a saida com 2 casas decimais
const saida = valorSalario - valorImposto + valorBeneficios;
print(saida.toFixed(2));

// Funcao para o calculo do Importo baseado nas aliquotas

function calcularImposto(salario) {

    let aliquota;
    if(salario >= 0 && salario <= 1100){
        aliquota = 0.05 * salario;
    } else if (salario >= 1100.01 && salario <= 2500){
        aliquota = 0.10 * salario; 
    }  else {
        aliquota = 0.15 * salario;
    }

    return aliquota * salario
}