import React, { useEffect } from 'react'
import {Board }from './components/Board'
import {Score} from './components/Score'
import {Steps} from './components/Steps'
import { Randomizer } from './utils/randomizer'
import ScoreBoard from './components/ScoreBoard'
import { checkGameOver } from './utils/checkComplete'
import './App.css';


let items=[]
let m_jumps;
let max_mushroom;
let m_steps;


function App() {
    
    let width= prompt('Enter square width')
    let height =prompt('Enter square height')

    if (height === null || width === null || isNaN(width) === true || isNaN(height) === true) {
          height = 10
          width = 10
        }
    
    const sqW=  width;
    const sqH= height

    let matrixSize= sqH*sqW;
    m_jumps = width;
   
   function populateItem(matrixSize){
      for(let i = 1; i <= matrixSize; i++){
          items.push(i)
      }
   }
   populateItem(matrixSize)

   useEffect(()=>{
     const handleLoading =(height, width)=>{
      let square = document.getElementById('root')
      square.style.height = 40 * height + "px"
      square.style.width = 40 * width + "px"
      let random_data= Randomizer(items)
      let truncated = random_data.slice(0, Math.max(height, width))
    

      for(let i=0; i< truncated.length;i++){
        let sprite_position= document.getElementById(truncated[i])
        sprite_position.innerHTML= "<img src='green-sprites.jpeg' alt='mario' class='maze-image'/>"
        sprite_position.classList.toggle('active')
      }

      let filtered_data = random_data.filter(function (obj) {
        return truncated.indexOf(obj) === -1;
      });

      let item = filtered_data[Math.floor(Math.random() * filtered_data.length)];
      let mario_position = document.getElementById(item)
      mario_position.classList.toggle('mario')
      mario_position.innerHTML = "<img src='mario.png' alt='mario' class='maze-image'/>";
      max_mushroom = document.getElementsByClassName('active').length
     }
     document.addEventListener('load', handleLoading(height,width))
   },[height, width, sqH, sqW])

   useEffect(()=>{

    function onKeyPress(event) {
      event.preventDefault()
      if (event.keyCode === 37 || event.keyCode === 38 || event.keyCode === 39 || event.keyCode === 40) {
        if (m_steps === undefined) {
          m_steps = 0
        }
        m_steps = m_steps + 1;
      }
      Steps(event, m_jumps, m_steps)
     checkGameOver(m_steps)
      Score(m_steps, max_mushroom);

   }
      document.addEventListener("keydown", onKeyPress);

    return () => {
      document.addEventListener("keydown", onKeyPress);
    };

  },[])

  return (
    <div  className = "App" >
      <h2>Hackerbay Maze Game </h2>
     <p> You need to eat all the green sprites on the board. </p>
      <Board matrix={matrixSize} />
      <ScoreBoard />
    </div>
  )
}

export default App