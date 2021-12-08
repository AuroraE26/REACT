import React from "react"
      

function Calculator({a,b,op}) {
    
const suma= parseInt(a)+parseInt(b);  
    const resta= parseInt(a)-parseInt(b); 
    const mul= parseInt(a)*parseInt(b);
    let intA=typeof parseInt(a);
    let intB=typeof parseInt(b);
    let res=0
 

    if(!(intA,intB="number")){
        res="Datos Erroneos"
    } 

 
    // if(!({op}="suma")){
    //     res="Operador Erroneo"
    // }  

    switch (op) {
        case "suma":
            res = suma;
            break;
        case "resta":
            res = resta;
            break;
        case "mul":
            res = mul;
            break;
        default:
            break;
    }

    return(
        <div>{res}</div>
    )
}

export default Calculator;