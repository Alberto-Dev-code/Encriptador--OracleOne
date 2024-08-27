//---Variables --//
const btnEncriptar = document.querySelector(".btn-Encriptar");
const TextoEncriptado = document.querySelector(".TextoEncriptado");
const aviso = document.querySelector(".aviso_txt");
const TextoDesencriptado = document.querySelector(".TextoDesencriptado");
const tarjeta_contenedor = document.querySelector(".tarjeta_contenedor");
const btncopiar = document.querySelector(".btn-copiar");
const btnDesencriptar = document.querySelector(".btn-Desencriptar");

//-- Botón para Encriptar --//
btnEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = TextoEncriptado.value;
    let txt = texto.normalize("NFD").replace( /[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");
    console.log(txt);
    
    if( texto == ""){
        aviso.style.color = "#C40C0C";
        aviso.style.weight ="400";
        aviso.textContent = "El campo no debe estar vacio";
        aviso.style.fontSize= ".75rem";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== txt){
        aviso.style.color = "#C40C0C";
        aviso.style.weight ="400";
        aviso.textContent = "El texto no debe contener acentos ni caracteres especiales";
        aviso.style.fontSize= ".75rem";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(  texto !== texto.toLowerCase()){
        aviso.style.color = "#C40C0C";
        aviso.style.weight ="400";
        aviso.textContent = "El texto no debe contener minúsculas ";
        aviso.style.fontSize= ".75rem";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else{
        texto = texto.replace(/e/mg,"enter");
        texto = texto.replace(/i/mg,"imes");
        texto = texto.replace(/a/mg,"ai");
        texto = texto.replace(/o/mg,"ober");
        texto = texto.replace(/u/mg,"ufat");

        TextoDesencriptado.innerHTML= texto;
        btncopiar.style.visibility ="inherit";
        tarjeta_contenedor.remove();
    }
});

//-- Botón para desencriptar --//
    btnDesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = TextoEncriptado.value;
    let txt = texto.normalize("NFD").replace( /[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");
    console.log(txt);
    
    if( texto == ""){
        aviso.style.color = "#C40C0C";
        aviso.style.weight ="400";
        aviso.textContent = "El campo no debe estar vacio";
        aviso.style.fontSize= ".75rem";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== txt){
        aviso.style.color = "#C40C0C";
        aviso.style.weight ="400";
        aviso.textContent = "El texto no debe contener acentos ni caracteres especiales";
        aviso.style.fontSize= ".75rem";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(  texto !== texto.toLowerCase()){
        aviso.style.color = "#C40C0C";
        aviso.style.weight ="400";
        aviso.textContent = "El texto no debe contener minúsculas ";
        aviso.style.fontSize= ".75rem";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else{
        texto = texto.replace(/enter/mg,"e");
        texto = texto.replace(/imes/mg,"i");
        texto = texto.replace(/ai/mg,"a");
        texto = texto.replace(/ober/mg,"o");
        texto = texto.replace(/ufat/mg,"u");

        TextoDesencriptado.innerHTML= texto;
        btncopiar.style.visibility ="inherit";
        tarjeta_contenedor.remove();
    }
});

//-- Botón para copiar --//
btncopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = TextoDesencriptado;
    copiar.select();
    document.execCommand("copy");
});