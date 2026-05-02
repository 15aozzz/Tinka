
let numerosGanadores=[];
let numerosUsuario=[];

//=============NUMEROS GANADORES====================
function generarNumeros(){
for(let i=1;numerosGanadores.length<7;i++){
    let numAzar=Number((Math.random()*100).toFixed());
    if((numAzar<36) && !(numerosGanadores.includes(numAzar))){
        numerosGanadores.push(numAzar);
    }
};
return numerosGanadores;
}



//=============BOTONES====================
function mostrarSelccion(){
    const contenedor=document.getElementById("seleccion");
    contenedor.innerHTML=numerosUsuario.join("-")
}

function elecciones(num){
    if(!numerosUsuario.includes(num)&& numerosUsuario.length<6){
    numerosUsuario.push(num);
}else{
    numerosUsuario.splice(numerosUsuario.indexOf(num),1);
}
    mostrarNumeros();
    mostrarSelccion();
    
}

function botones(){
    let html="";
    for(let i=1;i<37;i++){
        html+=!numerosUsuario.includes(i)? `<button id="${i}" value="${i}" onclick="elecciones(${i})">${i}</button><span/> `:
        `<button style="background-color: yellow; " id="${i}" value="${i}" onclick="elecciones(${i})">${i}</button><span/>`;
    };
        return html;
}


function mostrarNumeros(){
  document.getElementById("numeros").innerHTML=botones();
}

mostrarNumeros();



//function botones(){
//    let html="";
//    for(let i=1;i<37;i++){
//        html+=!numerosUsuario.includes(i)? `<button id="${i}" value="${i}" onclick="elecciones(${i})">${i}</button><span/> `:
//        `<button disabled id="${i}" value="${i}" onclick="elecciones(${i})">${i}</button><span/>`;
//    };
//        return html;
//}


//==============JUGAR====================
function jugar(){
    generarNumeros();
    numerosGanadores.sort((a,b)=>a-b);
    numerosUsuario.sort((a,b)=>a-b);
    if(numerosUsuario.length!=6){
        alert("Debes seleccionar 6 numeros");
        return;
    }
    const aciertos=numerosGanadores.filter(numero=>numerosUsuario.includes(numero));
    let contenedor=document.getElementById("resultado")
    contenedor.innerHTML+=numerosGanadores.join("-");
    contenedor.innerHTML+=`<p> ${aciertos.join("-")}</p>`;
    contenedor.innerHTML+=`Numeros acertados:${aciertos.length}`;
}
