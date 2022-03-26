import React from 'react'
import { useRef } from 'react';
import { useBudgets } from '../context/BudgetContext';
import  '../css/AddBudget.css'



export default function AddBudgetModal({  handleClose}) {


const nameRef= useRef()
const maxRef =useRef()
const {addBudget} = useBudgets()

const handleSubmit = (e) => {
  
  e.preventDefault()

  addBudget(
    {
      name: nameRef.current.value,
      max: parseFloat(maxRef.current.value)

    }

  )
  
  fadeOut()
}


const fadeOut = () => {

  
  const modal = document.querySelector('.modal')
 
  modal.style.transform = 'translate3d(0,-100vh,0)'

  modal.style.transition = 'all 400ms cubic-bezier(1,-0.39,1,-0.22)'

setTimeout(()=>{
  handleClose()
  modal.style.transform = 'translate3d(0,0vh,0)'
  modal.style.transition = ''
} , 400)

}



  return (
    <>
    <div className = "modal" >
        <div className="modalHeader">
            <h2>New Budget</h2>
            <h1  onClick= { fadeOut } className='closeM'>X</h1>
        </div>   
        <form  onSubmit={ handleSubmit }  >
            <label>Name</label>
            <input ref={nameRef} type="text" required/>  
            <label>Maximum Spending</label>
            <p>
            <span class="minus">-</span>
            <input ref={maxRef} min={0} step={.01} type="number" pattern="[0-9]+" required /> 
            <span class="addie">+</span>
            </p>
            <button type="submit" className="modalBTN">ADD </button>
        </form>
    </div>

    </>
  );
};


