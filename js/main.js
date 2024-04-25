

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

let resultado
let vacio =[]
let busqueda = 0;









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





function filtro(){

    if(filtroAudi ==1 || filtroBmw == 1 || filtroMercedez == 1 || filtroFord == 1 || filtroChevrolet == 1 || filtroDodge == 1 )
    busqueda = 1;
    else
    busqueda = 0;

    filtrarMarca()


    console.log("busqueda es", busqueda)

    console.log("-----------------------------------------------")
    mostrarAutos(resultado)
    imprimirAutos(resultado)
}


function filtrarMarca(){

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
    
}

const resultadoBusqueda = document.querySelector(".resultado-busqueda")

const listaAutos = document.createElement("div");
listaAutos.classList.add("listaAutos")

resultadoBusqueda.append(listaAutos)





function imprimirAutos(automoviles){

    if(busqueda==1){

        if(automoviles.length>0){
            listaAutos.innerHTML = ``;
            automoviles.forEach(auto => {
                listaAutos.innerHTML += 
                `<div class="card" style="width: 18rem;">
                <img src="../img/autos/auto1.JPG" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${auto.marca}   ${auto.modelo}  ${auto.year}</h5>
                    <p class="card-text">$${auto.precio}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>` ;
            });

        }else{
            listaAutos.innerHTML = ` <div class="error"> No hay resultados </div>`
        }

    }else{
        listaAutos.innerHTML = ``;
        autos.forEach(auto => {
            listaAutos.innerHTML += `<div class="card" style="width: 18rem;">
            <img src="../img/autos/auto1.JPG" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${auto.marca}   ${auto.modelo}  ${auto.year}</h5>
                <p class="card-text">$${auto.precio}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>` ;
        });
    }
} 




function mostrarAutos(automoviles){

    automoviles.forEach(auto => {
        console.log(auto.marca + " - " + auto.modelo + " - " + auto.year + " - " + auto.puertas + " Puertas - $" + auto.precio)
    });
} 