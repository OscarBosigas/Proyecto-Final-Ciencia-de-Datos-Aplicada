import React from 'react'
import { useFetch } from '../hooks/useFetch'
import Message from './Message';

const SelectList = ({title, url, handleChange, msg, departament }) => {
    
   const {data, error } = useFetch(url);

   if (error) {
    return <Message msg={`Error ${error.status}: ${error.statusText}`} bgColor="#dc3545"/>
   }

   if(!data) return null;

   let id = `select-${title}`;
   let label = title.charAt(0).toUpperCase() + title.slice(1);

   const objDepart = data.find(el=> el.departamento === departament)
   

  return (
    <div>
        <label htmlFor={id}>{label}</label>

        <select name={id} id={id} onChange={handleChange}>
            <option value="">{msg}</option>
            {
                title === "departamento" 
                ? (
                    data.map((el)=> <option key={el.id} value={el.departamento}>{el.departamento}</option>)  
                ) : (
                    objDepart.ciudades.map((el, id) => <option key={id}>{el}</option>)
                )    
            }
        </select>
    </div>
  )
}

export default SelectList