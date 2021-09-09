
//Counter() funtion returns a UI to App.js. 

import React from 'react';
import CountButton from './CountBouttons';


function Counter(){
    return(
    <div class="btn_container" >
        <div className="sub_container" >
        <CountButton display_text="--"/>
        <span id="Count_Display">Zero</span>
        <CountButton display_text="++"/>
        </div>
    </div>
    );
}

export default Counter; 