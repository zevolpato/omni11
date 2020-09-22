import React, { useState } from 'react';
 
export default function HeaderState({ title }){
        const [counter, setCounter] = useState(0); 
        
        //retorna array com duas posições Array [ valor , paraTrocaValor]
    
        function increment(){
            setCounter(counter + 1);
        }

    return (
           <>
           <header>Contador : { counter }</header>
           <button onClick={increment}>Incrementar</button>
           </>
       );
   }