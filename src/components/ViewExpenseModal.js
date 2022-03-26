import React from 'react'
import { useRef } from 'react';
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from '../context/BudgetContext';

import { currencyFormatter } from '../util'
import  '../css/ViewExpenseModal.css'

export default function ViewExpenseModal({handleClose,budgetId}) {

const {budgets ,getBudgetExpenses , deleteBudget ,deleteExpense} = useBudgets()

const expenses = getBudgetExpenses(budgetId)

const budget = UNCATEGORIZED_BUDGET_ID === budgetId
                ? {name: "Uncategorized" , id : UNCATEGORIZED_BUDGET_ID}
                : budgets.find(b => b.id === budgetId)

const fadeOut = () => {

  
  const modalv = document.querySelector('.modalV')
 
  modalv.style.transform = 'translate3d(0,-50vh,0)'

  modalv.style.transition = 'all 400ms cubic-bezier(1,-0.39,1,-0.22)'

setTimeout(()=>{
  handleClose()
  modalv.style.transform = 'translate3d(0,0vh,0)'
  modalv.style.transition = ''
} , 400)

}



  return (
    <>
    <div className = "modalV" >
        <div className="modalHeaderV">
            <h2>Expense - {budget?.name} {budgetId !== UNCATEGORIZED_BUDGET_ID &&  <span onClick={() => { deleteBudget(budget) ; fadeOut()}} >DEL</span> }</h2>
            <h1 className='closeMV' onClick = {()=>fadeOut()}> X </h1>
        </div>   
        <main className='expenseLi'>
          {expenses.map(expense =>
            <div className='eachExpense' key={expense.id}>
              <h4>{expense.description}</h4>
              <span > 
                <h4>{currencyFormatter.format(expense.amount)}</h4>
                <h1 className='del' onClick={ () =>  deleteExpense(expense) }  > X </h1>
              </span>
            </div>
            
            )}
        </main>
    </div>

    </>
  );
};


