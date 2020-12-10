import React from 'react'




function Okay() {

    function Welcome(props)  {
    
        return <h1>Hello, {props.name} </h1> 
   }
   
    return <div>
        <Welcome name="Patrick" />
        <Welcome name="Viola" />
    </div>
   
}
 
export default Okay

