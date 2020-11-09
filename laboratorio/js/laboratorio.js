alert ("Hola Clase");
'use stric' ;
document.getElementById('ValorSalario' ).style.dislpay='none';
let sueldo=0;
let sulNormal=0;
let sulExtra = 0;
let horas;
let extra;
const horaValor=400;
const extraValor=500;

function Calcular(){
    document.getElementById('ValorSalario').style.dislpay='block'
    document.getElementById('Horas').style.dislpay='none'
    horas = Number(document.getElementById('Hora_Semana').value)
    Salario(horas);
}

function Salario(horas){
    if(horas<=40){
        sulNormal = horas*horaValor;
    }
    else{
        var extra = horas - 40;
        sulNormal = 40*horaValor;
        sulExtra = (extra*extraValor);  
    }
    sueldo = sulNormal + sulExtra;
    document.getElementById('ValorDom').value=sulNormal;
    document.getElementById('ValorExtra').value=sulExtra;
    document.getElementById('Total').value=sueldo;
    return sueldo;
}
