import React from "react"
      

function Calculator({a,b,op}) {
if(!Number.isInteger(a)||!Number.isInteger(b)){
    return(
        <div>
            <spa> Invalid number </spa>
        </div>
    )
}

let res=0;
    switch (op) {
        case "suma":
            res=a+b;
            break;
        case "resta":
            res=a-b;
            break;
        case "mul":
            res=a*b;
            break;
        default:
            return(
                <div>
                    <spa>Invalid Operator</spa>
                </div>
            )
            break;
    }

    return(
        <div>{res}</div>
    )
}

export default Calculator;