let titulo = document.querySelector("#titulo");
let message = document.querySelector("#message");
let boton = document.getElementById("reset");
let cuadrados = 6 
let hard = document.getElementById("hard");
let easy = document.getElementById("easy");
let colors = [];
let pickedColor;
let tarjeta = document.querySelectorAll(".square");
let clickedColor;
boton.addEventListener("click", function(){
        rellenarArreglo(cuadrados);
        obtenerColor();
        ponerColores();
        boton.textContent = "Nuevos Colores";
    });

hard.addEventListener("click", function(){
        hard.classList.add("selected");
        easy.classList.remove("selected");
        for (let i = 3; i < 6; i++){
            tarjeta[i].classList.remove("hidden");
        }
        cuadrados = 6 
        rellenarArreglo(cuadrados);
        ponerColores();
        obtenerColor();
    });
easy.addEventListener("click", function(){
        easy.classList.add("selected");
        hard.classList.remove("selected");
        for (let i = 3; i < 6; i++){
            tarjeta[i].classList.add("hidden");
        }
        cuadrados = 3
        rellenarArreglo(cuadrados);
        ponerColores();
        obtenerColor();
    });


function ponerColores(){
    for (let i = 0; i < tarjeta.length; i++){
        tarjeta[i].style.background = colors[i];
        }
}

rellenarArreglo(cuadrados);

function getRandomArbitrary(min, max) {
    return parseInt (Math.random() * (max - min) + min);
  }

function rellenarArreglo(numberOfSquares){
    colors.splice(0, 5); //borra elento de un inicio a un fin 0-5
    for (let i = 0; i < numberOfSquares; i++){
        let primero = getRandomArbitrary(0, 256); //rgb(20, 145, 35)
        let segundo = getRandomArbitrary(0, 256);
        let tercero = getRandomArbitrary(0, 256);
        let rgb = `rgb(${primero}, ${segundo}, ${tercero})`
        colors.push(rgb);
    }
}

function changeColors(color){
    for (let i = 0; i < tarjeta.length; i++){
        tarjeta[i].style.background = color;
    }
}

ponerColores();
function obtenerColor(){
    pickedColor = colors[getRandomArbitrary(0, cuadrados)];
    let colorDisplay = document.querySelector("#colorDisplay");
    colorDisplay.innerHTML = pickedColor;
    titulo.style.background = "#4583dc";
    message.innerHTML = "";
}


obtenerColor();

for (let i = 0; i < tarjeta.length; i++){
    tarjeta[i].addEventListener("click", function(){
        clickedColor = tarjeta[i].style.background;
        if(clickedColor !== pickedColor){
            tarjeta[i].style.background = "rgb(23, 23, 23)";
            message.innerHTML = "Inténtalo Nuevamente";
        }else {
            message.innerHTML = "¡Correcto!";
            titulo.style.background = pickedColor;
            changeColors (pickedColor);
            boton.textContent = "Jugar de Nuevo";
        }
    })
}
