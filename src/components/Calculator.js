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
    if({op}="suma"){res = resta;}
    if({op}="resta"){res = resta;}
    if({op}="mul"){res = mul;}
 
    // if(!({op}="suma")){
    //     res="Operador Erroneo"
    // }  


    return(
        <div>{res}</div>
    )
}

export default Calculator;