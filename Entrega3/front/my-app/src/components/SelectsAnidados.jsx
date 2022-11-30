import React, { useState } from 'react';

import SelectList from "./SelectList"



const SelectsAnidados = () => {
    const [departament, setDepartament] = useState("");
    const [city, setCity] = useState("");

    const url = 'https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json'

  return (
    <div>
        <SelectList 
        title="departamento" 
        url={url} 
        handleChange={e => setDepartament(e.target.value)}
        departament={departament}
        />
        {departament &&
        <SelectList 
        title="ciudad" 
        url={url} 
        handleChange={e => setCity(e.target.value)}
        departament={departament}
        />
        }
        
    </div>
  )
}

export default SelectsAnidados