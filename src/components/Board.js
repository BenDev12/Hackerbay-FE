import React from 'react'
import './cell.css'

export function Board({matrix}) {
  
    const [selected]= React.useState(false)

    function handleCells(matrix){
        let c = [];
        let i;
        for (i = 1; i <= matrix; i++) {
          c.push( i )
        }
          return c 
        }

    const cells= handleCells(matrix)
    const  celle=  cells.map((cel, i)=>(<div className={selected?"cell active":"cell"} key={i} id={i}></div>))   
    return (
        <div> {
         celle
       } </div>)
}
// export default Board

