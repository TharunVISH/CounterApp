
//The functionality and appearance of the  Button defined in this file

import React from 'react';
import { Button } from 'react-bootstrap';



function CountButton(props){
    
    return(
        
        <Button  className="btn btn-secondary btn-lg" onClick={()=>Count(props.display_text)}>{props.display_text}</Button>
    );
}



function Count(Count_Action){

   
   let count=document.getElementById("Count_Display").innerHTML;
   
    if (Count_Action==="++")
    {
        if (count==="Zero"){
            count='1';
        }
        else{
            count = parseInt(count)+1;
        }
    }
    else {
        if (count!=="Zero"){
        count = parseInt(count)-1;
        }
        if (count===0){
            count="Zero";
        }
    }

    document.getElementById("Count_Display").innerHTML=count;
}
export default CountButton; 