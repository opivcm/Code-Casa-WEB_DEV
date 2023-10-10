import React from 'react'
import './TicTacToe.css'
//const circle_icon = "circle.png";
//<img src={circle_icon} alt="Circle icon" />


export const TicTacToe = () => {
  return (
    <div className='container'>
      <h1 className="title">TIC TAC TOE GAME IN <span>REACT</span></h1>
      <div className="board">
        <div className='row1'>
          <div className='boxes'></div>
          <div className='boxes'></div>
          <div className='boxes'></div>
        </div>
        <div className='row2'>
          <div className='boxes'></div>
          <div className='boxes'></div>
          <div className='boxes'></div>
        </div>
        <div className='row3'>
          <div className='boxes'></div>
          <div className='boxes'></div>
          <div className='boxes'></div>
        </div>
      </div>
      <button className="reset">Reset</button>
    </div>
  )
}

export default TicTacToe

