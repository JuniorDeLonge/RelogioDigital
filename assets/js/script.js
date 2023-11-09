const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const ampm = document.getElementById('segundos') // vamos usar o elemento 'segundos' para exibir AM/PM

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let periodo = hr >= 12 ? 'PM' : 'AM';

    hr = hr % 12;
    hr = hr ? hr : 12; // a hora '0' deve ser '12'
    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;

    horas.textContent = hr;
    minutos.textContent = min;
    ampm.textContent = periodo;
}, 1000);