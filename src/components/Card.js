
import React from 'react'
import  '../css/Card.css'

import { currencyFormatter } from '../util'



export default function Card({name , amount , max , onAddExpenseClick , hideBtn ,onView }) {
  return (
    <div className="cardWrap" style={ (amount > max) ?  {background: `rgba(0,0,0,0.09)`} : {background: `rgba(255,255,255,.0)`}  }  >
        <header>
        <h1>{name}</h1>
        <h4> {currencyFormatter.format(amount)}  
         {max ? <span className='maxAmount'> / {currencyFormatter.format(max)} </span> : null} </h4>
        </header>
        {max ?  
        <div className="progressBar">
         <span className='fill' style={ { width  : (amount  / max ) * 100 +'%', background: `${getColor(amount,max)}` } } > </span> 
        </div> : null}
        
        {!hideBtn? 
        <div class="cardbtnWrap">

          <button  onClick={onAddExpenseClick}  >Add Expense</button>
          <button  onClick = {onView}> View Expense </button> 
        
        </div> 
        : null}
    </div>
  )
}


const getColor =  (amount,max) => {

const ratio =  (amount / max ) 

  return `rgba(255,255,255,${ratio})`

}