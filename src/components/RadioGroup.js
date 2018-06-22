import React from 'react'

const RadioGroup = ({radios, value, onChange}) => (
  <React.Fragment>
    {radios.map(({key, label}) =>(
      <label>
        <input 
          type="radio"
          checked={value===key} 
          onChange={()=> onChange(key)} /> 
        {label}
      </label>
    ))}
  </React.Fragment>
)

export default RadioGroup