(function() {
    "use strict";

    var regalo = document.getElementById('regalo');

    document.addEventListener('DOMContentLoaded', function() {


        // Campos dato de usuario
        var nombre = document.getElementById('nombre');
        var apellido = document.getElementById('apellido');
        var email = document.getElementById('email');


        // Campos de pases
        var pase_dia = document.getElementById('pase_dia');
        var pase_dosdias = document.getElementById('pase_dosdias');
        var pase_completo = document.getElementById('pase_completo');

        //Botones y Divs
        var calcular = document.getElementById('calcular');
        var errorDiv = document.getElementById('error');
        var botonRegistro = document.getElementById('btnRegistro');
        var lista_productos = document.getElementById('lista-productos');
        var suma = document.getElementById('suma-total');

        //Extras
        var camisa_evento = document.getElementById('camisa_evento');
        var etiquetas = document.getElementById('etiquetas');

        calcular.addEventListener('click', calcularMontos); //El evento click imprime todos los días que se hagan dentro y fuera de la ventana de click.

        pase_dia.addEventListener('blur', mostrarDias); //El evento Blur mantiene el número al salir de la ventana de click.
        pase_dosdias.addEventListener('blur', mostrarDias);
        pase_completo.addEventListener('blur', mostrarDias);

        nombre.addEventListener('blur', validarCampos);
        apellido.addEventListener('blur', validarCampos);
        email.addEventListener('blur', validarCampos);
        email.addEventListener('blur', validarmail);

        function validarmail() {
            if (this.value.indexOf("@") > -1) {
                errorDiv.style.display = "none";
                this.style.border = '1px solid grey';
            } else {
                errorDiv.style.display = "block";
                errorDiv.innerHTML = "La dirección es incorrecta";
                this.style.border = '1px solid red';
            }

        }

        function validarCampos() {
            if (this.value == "") {
                errorDiv.style.display = "block";
                errorDiv.innerHTML = "Este campo es obligatorio";
                this.style.border = '1px solid red';
                // errorDiv.style.border = '1px solid red';
            } else {
                errorDiv.style.display = "none";
                this.style.border = '1px solid grey';
            }
        }

        function calcularMontos(event) {
            event.preventDefault();
            console.log(regalo.value);
            if (regalo.value === "") {
                alert("Debes elegir un regalo");
                regalo.focus();
            } else {
                var boletosDia = parseInt(pase_dia.value, 10) || 0, //   "|| 0" es para cuando el parseInt retorne NaN (Not a Number), le asigne un 0.
                    boletos2Dias = parseInt(pase_dosdias.value, 10) || 0, // El parseInt convierte un string a un número. En este caso se usa por las dudas.
                    boletosCompleto = parseInt(pase_completo.value, 10) || 0,
                    cantCamisas = parseInt(camisa_evento.value, 10) || 0,
                    cantEtiquetas = parseInt(etiquetas.value, 10) || 0;

                var totalPagar = boletosDia * 30 + boletos2Dias * 45 + boletosCompleto * 50 + cantCamisas * 10 * 0.93 + cantEtiquetas * 2;
                console.log(totalPagar);

                var listadoProductos = [];

                if (boletosDia === 1) {
                    listadoProductos.push(boletosDia + " Pase por día");
                }

                if (boletosDia > 1) {
                    listadoProductos.push(boletosDia + " Pases por día");
                }

                if (boletos2Dias === 1) {
                    listadoProductos.push(boletos2Dias + " Pase por 2 días");
                }

                if (boletos2Dias > 1) {
                    listadoProductos.push(boletos2Dias + " Pases por 2 días");
                }

                if (boletosCompleto === 1) {
                    listadoProductos.push(boletosCompleto + " Pase completo");
                }

                if (boletosCompleto > 1) {
                    listadoProductos.push(boletosCompleto + " Pases completos");
                }

                if (cantCamisas === 1) {
                    listadoProductos.push(cantCamisas + " Camisa");
                }

                if (cantCamisas > 1) {
                    listadoProductos.push(cantCamisas + " Camisas");
                }

                if (cantEtiquetas === 1) {
                    listadoProductos.push(cantEtiquetas + " Etiqueta");
                }

                if (cantEtiquetas > 1) {
                    listadoProductos.push(cantEtiquetas + " Etiquetas");
                }

                lista_productos.style.display = "block"; //Hago que el fondo gris aparezca solo si se activa la función de JS.
                lista_productos.innerHTML = '';
                for (var i = 0; i < listadoProductos.length; i++) {
                    lista_productos.innerHTML += listadoProductos[i] + '<br/>';
                }

                suma.innerHTML = "$ " + totalPagar.toFixed(2);

            }
        }

        function mostrarDias() {

            var boletosDia = parseInt(pase_dia.value, 10) || 0, //   "|| 0" es para cuando el parseInt retorne NaN (Not a Number), le asigne un 0.
                boletos2Dias = parseInt(pase_dosdias.value, 10) || 0, // El parseInt convierte un string a un número. En este caso se usa por las dudas.
                boletosCompleto = parseInt(pase_completo.value, 10) || 0;

            var diasElegidos = [];

            if (boletosDia > 0) {
                diasElegidos.push('viernes');
            }

            if (boletos2Dias > 0) {
                diasElegidos.push('viernes', 'sabado');
            }

            if (boletosCompleto > 0) {
                diasElegidos.push('viernes', 'sabado', 'domingo');
            }

            for (var i = 0; i < diasElegidos.length; i++) {
                document.getElementById(diasElegidos[i]).style.display = "block";
            }

        }

    });
})();

$(function() {
    //Programa de Conferencias
    $('.programa-evento .info-curso').hide();
    //Programa de conferencias
    $('.menu-programa a:first').addClass("activo");
    $('.menu-programa a').on("click", function() {
        $('.menu-programa a').removeClass("activo");
        $(this).addClass("activo");
        $('.programa-evento .info-curso').hide();
        var enlace = $(this).attr('href');
        $(enlace).fadeIn();
        return false;
    });

    //Lettering
    $('.nombre-sitio').lettering();

    //Aninación para los Números
    $('.resumen-evento li:nth-child(1) p').animateNumber({ number: 6 }, 4000);
    $('.resumen-evento li:nth-child(2) p').animateNumber({ number: 15 }, 4000);
    $('.resumen-evento li:nth-child(3) p').animateNumber({ number: 3 }, 4000);
    $('.resumen-evento li:nth-child(4) p').animateNumber({ number: 45 }, 4000);

    //Cuenta regresiva
    $('.cuenta-regresiva').countdown('2022/11/17 09:00:00', function(event) {
        $('#dias').html(event.strftime('%D'));
        $('#horas').html(event.strftime('%H'));
        $('#minutos').html(event.strftime('%M'));
        $('#segundos').html(event.strftime('%S'));
    });
});