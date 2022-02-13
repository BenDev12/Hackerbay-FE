import React from 'react'
import './cell.css';

function Cell({cell}) {
    const [selected]= React.useState(false)
    const  celle=  cell.map((cel, i)=>(
      <div className={selected?"cell active":"cell"} key={i} id={i}>
   </div>
  ))
  return celle
      
       
}

export default Cell