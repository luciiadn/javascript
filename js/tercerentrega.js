class Carrito {

    constructor(producto, cantidad, tarjeta, cuotas) {
        this.producto = producto;
        this.cantidad = parseInt(cantidad);
        this.tarjeta = tarjeta;
        this.cuotas = cuotas;
        this.pago = 0;
        this.fecha = new Date();
    }


    calcularTotal(debito, credito) {
        if (this.tarjeta == 'debito') {
            this.pago = this.producto;
        } else {
            (this.pago == 'credito')
            this.producto * (this.producto * 0.10);
        }
    }

    calcularTotal() {
        this.Total = this.pago + this.producto;
    }


}



const ComboElegido = [
    {
        numero: '1',
        tipo: 'sublimacion',
        total: 3000
    }, {
        numero: '2',
        tipo: 'papelería',
        total: 4500
    },
    {
        numero: '3',
        tipo: 'vinilos',
        total: 7300
    },

]



const btnSiguiente = document.getElementById('btnSiguiente'),
    btnCancelar = document.getElementById('btnCancelar'),
    btnUltima = document.getElementById('btnUltima'),
    btnVolver = document.getElementById('btnVolver'),
    formDatos = document.getElementById('ingresoDatosCarrito'),
    checkDatos = document.getElementById('guardarDatos'),
    cardIngreso = document.querySelector('.cardIngreso'),
    confirmacion = document.querySelector('.confirmacion'),
    tasaCredito = 0.10;



function guardarCarritoenStorage(datos) {
    localStorage.setItem('Carrito', JSON.stringify(datos));
}

function recuperarPFDeStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}


btnSiguiente.addEventListener('click', () => {
    let selectorCuotas = document.getElementById('Cuotas').value
    let producto = document.getElementById('tipoCarrito').value
    let selectorTarjeta = document.getElementById('tipoTarjeta').value
    let cantidad = document.getElementById('monto').value
    const datosCarrito = new Carrito(producto, cantidad, selectorTarjeta, selectorCuotas);
    console.log(datosCarrito)


    datosCarrito.calcularTotal();
    // datosCarrito.calcularCredito(TresCuotas, SeisCuotas);
    datosCarrito.calcularTotal();


    cardIngreso.classList.replace('visible', 'oculta');
    confirmacion.classList.replace('oculta', 'visible');



    if (checkDatos.checked) {
        guardarCarritoenStorage(datosCarrito);
    }

    formDatos.reset();
})


btnCancelar.addEventListener('click', () => {
    formDatos.reset();
});



btnVolver.addEventListener('click', () => {
    cardIngreso.classList.replace('oculta', 'visible');
    confirmacion.classList.replace('visible', 'oculta');
    confirmacion.querySelector('ul').innerHTML = '';
})



btnUltima.addEventListener('click', () => {
    let datosGuardados = recuperarCarritoDeStorage('Carrito');
    console.log(datosGuardados);

    if (!datosGuardados) {
        alert('Sin compras anteriores');
    } else {
        cardIngreso.classList.replace('visible', 'oculta');
        confirmacion.classList.replace('oculta', 'visible');
        crearHTMLResultados(datosGuardados);
        formDatos.reset();
    }

})