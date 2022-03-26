import React from 'react'
import { useRef } from 'react';
import { useBudgets , UNCATEGORIZED_BUDGET_ID } from '../context/BudgetContext';
import  '../css/AddExpenseModal.css'


import { useState } from 'react';

export default function AddExpenseModal({ show , handleCloseM , defaultBudgetId}) {


const descriptionRef= useRef()
const amountRef = useRef()
const budgetIdRef =useRef()
const {addExpense , budgets} = useBudgets()

const handleSubmitM = (e) => {
  
  e.preventDefault()

  addExpense(
    {
      description: descriptionRef.current.value,
      amount: parseFloat(amountRef.current.value),
      budgetId: budgetIdRef.current.value

    }

  )
  
  fadeOut()
}


const fadeOut = () => {

  const modal = document.querySelector('.modal')
  modal.style.transform = 'translate3d(0,-100vh,0)'
  modal.style.transition = 'all 400ms cubic-bezier(1,-0.39,1,-0.22)'

setTimeout(()=>{

    handleCloseM()
  modal.style.transform = 'translate3d(0,0vh,0)'
  modal.style.transition = ''
} , 400)

}


const triggerSelect = () => {
  const select = document.querySelector('.selectMenu')
  select.click()
}



const [displaySelect,setDisplaySelect] = useState(false)


  return (
    <>
    <div className = "modal" >
        <div className="modalHeader">
            <h2>New Expense</h2>
            <h1  onClick= { fadeOut } className='closeM'>X</h1>
        </div>   
        <form  onSubmit={  handleSubmitM }  >
            <label>Description</label>
            <input ref={descriptionRef} type="text" required/>  
            <label>Amount</label>
            <p>
            <span class="minus">-</span>
            <input ref={amountRef} type="number"
              required
              min={0}
              step={0.01} /> 
            <span class="addie">+</span>
            </p>
            <div  className='innerForm'>
                  <select ref= {budgetIdRef}  defaultValue={defaultBudgetId} className='selectMenu'>
                    <option id={UNCATEGORIZED_BUDGET_ID}>Uncatagorized</option>
                   {budgets.map(budget =>(
                    <option key={budget.id} value={budget.id} >{budget.name}</option>
                   ))}
                </select>
                <i className='fas fa-caret-down' onClick={triggerSelect}></i>
            </div>
            <button type="submit" className="modalBTN">ADD </button>
        </form>
    </div>

    </>
  );
};


