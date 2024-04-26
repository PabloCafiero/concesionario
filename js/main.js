


let autosNuevos= autos.filter((auto) => auto.estado == "nuevo")

let autosUsados= autos.filter((auto) => auto.estado == "usado")

let autosAudi = autos.filter((auto) => auto.marca == "AUDI")

let autosBmw = autos.filter((auto) => auto.marca == "BMW")

let autosMercedez = autos.filter((auto) => auto.marca == "MERCEDEZ BENZ")

let autosFord = autos.filter((auto) => auto.marca == "FORD")

let autosChevrolet = autos.filter((auto) => auto.marca == "CHEVROLET")

let autosDodge = autos.filter((auto) => auto.marca == "DODGE")


/* Ingreso Marcas */

let filtroAudi =0;
let filtroBmw =0;
let filtroMercedez =0
let filtroFord =0
let filtroChevrolet =0
let filtroDodge =0

let filtro0km = 0;
let filtroUsado = 0;

let precioMaximo ="";
let precioMinimo ="";


let resultado ="";
let vacio =[]
let busqueda = 0;
let botondoble =0;


/* Logica estado con links */

const cerokmLink = document.querySelector(".cerokmLink")

cerokmLink.addEventListener('click', cerokm1);

function cerokm1(){
    cerokmCheck.setAttribute("checked","")
    cerokm()
}

const usadoLink = document.querySelector(".usadoLink")

usadoLink.addEventListener('click', usado1);

function usado1(){
    usadoCheck.setAttribute("checked","")
    usado()
}


/* Logica estado con checkbox */

const cerokmCheck = document.querySelector(".cerokmCheck")

cerokmCheck.addEventListener("change", cerokm);

function cerokm(){ 

    if(botondoble==1){
        filtro0km = 0;
        filtroUsado = 1;
        botondoble=0;
    }

    if (this.checked) {
        filtro0km = 1;
        resultado = vacio;
    } else {
        filtro0km = 0;
        resultado = vacio;
    }

    filtro();
}



const usadoCheck = document.querySelector(".usadoCheck")

usadoCheck.addEventListener("change", usado);

function usado(){ 

    if(botondoble==1){
        filtro0km = 1;
        filtroUsado = 0;
        botondoble=0;
    }

    if (this.checked) {

        filtroUsado = 1;
        resultado = vacio;
    } else {
        filtroUsado = 0;
        resultado = vacio;
    }

    filtro();
}

/* Ingreso Marcas */

/* Audi */

const audiCheck = document.querySelector(".audiCheck")

audiCheck.addEventListener('change', function() {
    if (this.checked) {
        filtroAudi = 1;
        resultado = vacio;
    } else {
        filtroAudi = 0;
        resultado = vacio;
    }

    filtro();
});

/* Bmw */
const bmwCheck = document.querySelector(".bmwCheck")

bmwCheck.addEventListener('change', function() {
    if (this.checked) {
        filtroBmw = 1;
        resultado = vacio;
    } else {
        filtroBmw = 0;
        resultado = vacio;
    }
    filtro();
});

/* Mercedez */

const mercedezCheck = document.querySelector(".mercedezCheck")

mercedezCheck.addEventListener('change', function() {
    if (this.checked) {
        filtroMercedez = 1;
        resultado = vacio;
    } else {
        filtroMercedez = 0;
        resultado = vacio;
    }
    filtro();
});

/* Ford */

const fordCheck = document.querySelector(".fordCheck")

fordCheck.addEventListener('change', function() {
    if (this.checked) {
        filtroFord = 1;
        resultado = vacio;
    } else {
        filtroFord = 0;
        resultado = vacio;
    }
    filtro();
});

/* Chevrolet */

const chevroletCheck = document.querySelector(".chevroletCheck")

chevroletCheck.addEventListener('change', function() {
    if (this.checked) {
        filtroChevrolet = 1;
        resultado = vacio;
    } else {
        filtroChevrolet = 0;
        resultado = vacio;
    }
    filtro();
});

/* Dodge */

const dodgeCheck = document.querySelector(".dodgeCheck")

dodgeCheck.addEventListener('change', function() {
    if (this.checked) {
        filtroDodge = 1;
        resultado = vacio;
    } else {
        filtroDodge = 0;
        resultado = vacio;
    }
    filtro();
});




/* Ingreso Precio */

const formularioMin = document.querySelector(".formularioMin")
const inputMin = document.querySelector(".inputMin")


formularioMin.addEventListener("input", (e) => {
    e.preventDefault();

    resultado = vacio;
    precioMinimo = inputMin.value


    filtro();
});

const formularioMax = document.querySelector(".formularioMax")
const inputMax = document.querySelector(".inputMax")


formularioMax.addEventListener("input", (e) => {
    e.preventDefault();

    resultado = vacio;
    precioMaximo = inputMax.value


    filtro();
});




















function filtro(){


/*     console.log("filtro 0km", filtro0km)
    console.log("filtro usado", filtroUsado)
    console.log("filtro audi", filtroAudi) */

    if (precioMinimo == "") 
        busquedaPrecioMin =0;
    else
        busquedaPrecioMin =1;

    if (precioMaximo == "") 
        busquedaPrecioMax =0;
    else
        busquedaPrecioMax =1;
    


    console.log("precio min", precioMinimo)
    console.log("busqueda precio min", busquedaPrecioMin)
    console.log("precioax", precioMaximo)
    console.log("busqueda precio max", busquedaPrecioMax)




    if (filtro0km ==1 && filtroUsado == 1) {
        botondoble=1;

        filtro0km = 0;
        filtroUsado = 0;

        busqueda = 0;
    }


    if(filtroAudi ==1 || filtroBmw == 1 || filtroMercedez == 1 || filtroFord == 1 || filtroChevrolet == 1 || filtroDodge == 1 || filtro0km ==1 ||filtroUsado == 1 || busquedaPrecioMin == 1 || busquedaPrecioMax == 1)
    busqueda = 1;
    else
    busqueda = 0;



    console.log("busqueda", busqueda)


    filtrar()
    console.log("-----------------------------------------------")

    imprimirAutos(resultado)
}


function filtrar(){

    /* Filtro de marca */

    if(filtroAudi==1)
    resultado = resultado.concat(autosAudi);

    if(filtroBmw==1)
    resultado = resultado.concat(autosBmw);

    if(filtroMercedez==1)
    resultado = resultado.concat(autosMercedez);

    if(filtroFord==1)
    resultado = resultado.concat(autosFord);

    if(filtroChevrolet==1)
    resultado = resultado.concat(autosChevrolet);

    if(filtroDodge==1)
    resultado = resultado.concat(autosDodge);


    /* Filtro de estado */
    
    if (resultado =="") {

        if(filtro0km == 1)
        resultado = resultado.concat(autosNuevos);
    
        if(filtroUsado == 1)
        resultado = resultado.concat(autosUsados);
    }else{
        if(filtro0km == 1)
        resultado = resultado.filter((auto) => auto.estado == "nuevo");
    
        if(filtroUsado == 1)
        resultado = resultado.filter((auto) => auto.estado == "usado");

    }

    /* Filtro de precio */
    
    console.log(resultado)
    if (resultado =="") {

        if(busquedaPrecioMin == 1)
        resultado = autos.filter((auto) => auto.precio > precioMinimo)
    
        if(busquedaPrecioMax == 1)
        resultado = autos.filter((auto) => auto.precio < precioMaximo)
    }else
    {
        if(busquedaPrecioMin == 1)
        resultado = resultado.filter((auto) => auto.precio > precioMinimo)
    
        if(busquedaPrecioMax == 1)
        resultado = resultado.filter((auto) => auto.precio < precioMaximo)
    }

}

const resultadoBusqueda = document.querySelector(".resultado-busqueda")

const listaAutos = document.createElement("div");
listaAutos.classList.add("listaAutos")

resultadoBusqueda.append(listaAutos)



imprimirAutos(vacio)


function imprimirAutos(automoviles){
    if(busqueda==1){

        if(automoviles.length>0){
            listaAutos.innerHTML = ``;

            automoviles.forEach(auto => {
                imprimirCard(auto)
            });

        }else{
            listaAutos.innerHTML = ` <div class="error"> No hay resultados </div>`
        }

    }else{
        listaAutos.innerHTML = ``;
        autos.forEach(auto => {
            imprimirCard(auto)
        }); 
    }
} 


function imprimirCard(auto){

    listaAutos.innerHTML += 
    `<div class="card" style="width: 18rem;">
    <img src="../img/autos/${auto.imagen}.jpg" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${auto.marca}   ${auto.modelo} </h5>
        <p class="card-text">${auto.year}  -  ${auto.kilometraje}km </p>
        <p class="card-text">$${auto.precio}</p>
        <a href="#" class="btn btn-primary">Comprar</a>
    </div>
</div>`


}


/* function mostrarAutos(automoviles){

    automoviles.forEach(auto => {
        console.log(auto.marca + " - " + auto.modelo + " - " + auto.year + " - " + auto.puertas + " Puertas - $" + auto.precio)
    });
}  */