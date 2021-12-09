import React, { useEffect, useState } from "react";
//Styles
import "./NavBar.css"


export default function NavBar() {
    const [itemOn1, setItemOn1] = useState(false);
    const [itemOn2, setItemOn2] = useState(false);
    const [itemOn3, setItemOn3] = useState(false);

    
    let colorItem1 = (itemOn1===true) ? "color1" : "color2";
    let colorItem2 = (itemOn2===true) ? "color1" : "color2";
    let colorItem3 = (itemOn3===true) ? "color1" : "color2";
    
    
    
    
	return (
		<div>
			<ul>
				<li className={colorItem1} onClick={()=> 
                    ((setItemOn1(itemOn1 => !itemOn1)) & 
                    (setItemOn2(itemOn2  => false)) &
                    (setItemOn3(itemOn3  => false)))}>Item 1</li>

                    
                    <li className={colorItem2} onClick={()=> 
                    ((setItemOn2(itemOn2 => !itemOn2)) & 
                    (setItemOn1(itemOn1  => false)) &
                    (setItemOn3(itemOn3  => false)))}>Item 2</li>

                    <li className={colorItem3} onClick={()=> 
                    ((setItemOn3(itemOn3 => !itemOn3)) & 
                    (setItemOn1(itemOn1  => false)) &
                    (setItemOn2(itemOn2  => false)))}>Item 3</li>                    
            </ul>        
		</div>
	);
}