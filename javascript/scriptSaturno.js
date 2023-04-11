const $tiempoSAT= document.querySelector('.tiempoSAT'),
$fechaSAT = document.querySelector('.fechaSAT');

function digitalClockSAT(){
    let retraso=0;
    let tar= '';
    let f = new Date(),
    dia= f.getDate()+1,  /*Modificar dia*/
    mes = f.getMonth()+1,  /*Modificar mes*/
    anio = f.getFullYear(),  /*Modificar año*/
    
    hora= f.getHours()+4;
    minuto= f.getMinutes()-1;
    segundos= f.getSeconds();

    dia=('0' +dia).slice(-2);
    mes=('0' +mes).slice(-2);
    segundos=('0' +segundos).slice(-2);
    minuto=('0' +minuto).slice(-2);
    hora=('0' +hora).slice(-2);
    
    if(hora>24){
        hora=hora-24
        hora=('0' +hora).slice(-2);
    }

    if(hora>12){
        tar=('PM');
    }else{
        tar=('AM')
    }

    if(minuto>59){
        minuto=minuto-59
        minuto=('0' +minuto).slice(-2);
    }

    if(minuto<0){
        minuto= minuto*-1
        minuto=('0' +minuto).slice(-2);
    }


    $tiempoSAT.innerHTML = `${hora}:${minuto}:${segundos} ${tar} `
    $fechaSAT.innerHTML = `${dia}-${mes}-${anio}`
}
setInterval(() => {
    digitalClockSAT()
}, 1000);