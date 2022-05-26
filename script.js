
const boton = document.querySelector('.btn-menu-search');
const cerrar = document.querySelector('.fa-close-thin');



//console.log(document.getElementById('barra-lateral').setAttribute('class', 'active'));

const elemento = document.getElementById('menu-nav');

boton.addEventListener('click', function(){
    console.log('click');
        elemento.setAttribute('class', 'active');
}

);

cerrar.addEventListener('click',function(){
    if(elemento.hasAttribute('class')){
        elemento.removeAttribute('class');
    }
}
)

/**
 *      importar un file json 
 */

import JSON from './windbnb-master/stays.json' assert { type: "json" };
const dataPlaces = JSON;

//console.log(dataPlaces.length)


function addStays(){
    const sectionApartment = document.querySelector('.apartment-section');
    console.log(sectionApartment);

    for(let i= 0; i < dataPlaces.length; i++){

        var type = dataPlaces[i]["type"].toLowerCase();
        console.log(type); 

        if(type != "entire apartment"){ // si type es diferente de entire apartment 
            console.log('es diferente');
            document.getElementById('addCity').innerHTML +=
            '<div class="container-apartment"><div class="img-container"><img src= '+dataPlaces[i]['photo']+'></div><div class="img-data"><p id="host" class="desc-style"></p><p id="desc" class="desc-style">'+dataPlaces[i]['type']+'</p><p id="rating" class="desc-style"><i class="fa fa-star"></i>'+dataPlaces[i]['rating']+'</p></div><h3>'+dataPlaces[i]['title']+'</h3></div>';
        }
        else{
            // esto añade una nueva div a la seccion
            //console.log('no es diferente');
            if(dataPlaces[i]['superHost']){
                document.getElementById('addCity').innerHTML += 
            '<div class="container-apartment"><div class="img-container"><img src= '+dataPlaces[i]['photo']+'></div><div class="img-data"><p id="host" class="desc-style">SUPERHOST</p><p id="desc" class="desc-style">'+dataPlaces[i]['type']+'. '+dataPlaces[i]['beds']+' beds</p><p id="rating" class="desc-style"><i class="fa fa-star"></i>'+dataPlaces[i]['rating']+'</p></div><h3>'+dataPlaces[i]['title']+'</h3></div>';
            }
            else{
                document.getElementById('addCity').innerHTML += 
            '<div class="container-apartment"><div class="img-container"><img src= '+dataPlaces[i]['photo']+'></div><div class="img-data"><p id="host" class="desc-style">NO SUPERHOST</p><p id="desc" class="desc-style">'+dataPlaces[i]['type']+'. '+dataPlaces[i]['beds']+' beds</p><p id="rating" class="desc-style"><i class="fa fa-star"></i>'+dataPlaces[i]['rating']+'</p></div><h3>'+dataPlaces[i]['title']+'</h3></div>';
            }
         }

    }
    
};



addStays();

