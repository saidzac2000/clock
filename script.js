(function(){
    var actualizarHora = function(){
        var fecha = new Date(),
            horas = fecha.getHours(),
            ampm,
            minutos = fecha.getMinutes(),
            segundos = fecha.getSeconds(),
            diaSemana = fecha.getDay(),
            dia = fecha.getDate(),
            mes = fecha.getMonth(),
            year = fecha.getFullYear();
        var pHoras = document.getElementById('horas'),
            pAmpm = document.getElementById('ampm'),
            pMinutos = document.getElementById('minutos'),
            pSegundos = document.getElementById('segundos'),
            pDiaSemana = document.getElementById('diaSemana'),
            pDia = document.getElementById('dia'),
            pMes = document.getElementById('mes'),
            pyear = document.getElementById('year');
        var semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Juevas', 'Viernes', 'Sabado'];
        var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'septiembre', 'Octubre', 'noviembre', 'Diciembre'];
        pDiaSemana.textContent = semana[diaSemana];
        pDia.textContent = dia;
        pMes.textContent = meses[mes];
        pyear.textContent = year;
        if (horas >= 12) {
            horas = horas - 12;
            ampm = 'PM';
        } else {
            ampm = 'AM';
        }
        if (horas == 0){
            horas = 12;
        }
        pHoras.textContent = horas;
        pAmpm.textContent = ampm;
        if (minutos < 10){ minutos = "0" + minutos}
        if (segundos < 10){ segundos = "0" + segundos}
        pMinutos.textContent = minutos;
        pSegundos.textContent = segundos;
    };
    actualizarHora();
    var intervalo = setInterval(actualizarHora, 1000);
}())