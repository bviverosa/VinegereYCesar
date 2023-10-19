const desplazamiento= document.getElementById("desplazamiento");
const texto= document.getElementById("texto");
const cifrado=document.getElementById("cifrado");
const cifrar=document.getElementById("miSwitch");


function codify(){
    
 
    const textoIngresado= texto.value;
    let textoCifrado
    textoCifrado = textoIngresado.split('').map(c=>{
        let mayus=(c === c.toUpperCase()) ? true : false;
        let valorEntero= c.toLowerCase().charCodeAt(0);
        const isCifrado = cifrar.checked;
       
         const valorDesplazamiento=parseInt(desplazamiento.value);
         aux=cifrar.checked;
        if (valorEntero >=97 && valorEntero<=122 && valorDesplazamiento>=1 && valorDesplazamiento<=25){
            if (isCifrado){

            if(valorEntero + valorDesplazamiento >122){
                valorEntero=97 + (valorEntero-122) + valorDesplazamiento-1;
            }else{
                valorEntero= valorEntero + valorDesplazamiento;
            }
            
        }else{
            
            if(valorEntero - valorDesplazamiento < 97){
                  valorEntero = 123 - (97 - (valorEntero - valorDesplazamiento));

            }else{
                valorEntero= valorEntero - valorDesplazamiento;
            }
        }
    }else if(valorEntero >=48 && valorEntero<=57 && valorDesplazamiento>=1 && valorDesplazamiento<=25){
        if (isCifrado){

            if(valorEntero + valorDesplazamiento >57){
                valorEntero = (valorEntero - 48 + valorDesplazamiento) % 10 + 48
            }else{
                valorEntero= valorEntero + valorDesplazamiento;
            }
            
            }else{
                valorEntero = (valorEntero - 48 - valorDesplazamiento + 10) % 10 + 48;
                if (valorEntero < 48) {
                    valorEntero += 10;
                }
                
            }
            
        }
        
        let cifrado = String.fromCharCode(valorEntero);
        return mayus ? cifrado.toUpperCase():cifrado;
    }).join('');
    cifrado.value = textoCifrado;
  
    };
    miSwitch.addEventListener("change", codify);
    texto.addEventListener("keyup",codify);
    desplazamiento.addEventListener("change",codify);