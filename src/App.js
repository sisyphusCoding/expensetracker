import React from 'react';
import './css/App.css';
import Card from './components/Card';
import AddBudgetModal from './components/AddBudgetModal';

import  UncatBudgetCard  from './components/UncatBudgetCard'

import {useState} from 'react'
import { Budgetsprovider, UNCATEGORIZED_BUDGET_ID, useBudgets } from './context/BudgetContext';
import AddExpenseModal from './components/AddExpenseModal';
import TotalCard from './components/TotalCard';

import ViewExpenseModal from './components/ViewExpenseModal';

function App() {

const [show,setShow] = useState(false)
const [modal,setModal] = useState(false)

const [viewtheexpense,setViewtheexpense] = useState(false)
const {budgets  , getBudgetExpenses} = useBudgets()
const [addExpenseModalBudgetId,setAddExpenseModalBudgetId] = useState()
const [viewExpenseModalId,setViewExpenseModalId] = useState()


const openAddExpenseModal = (budgetId) => {
  setModal(true)
  setAddExpenseModalBudgetId(budgetId)
}






  return (
    <div className='AppWRAPPER'   >
      <div className="App">
          <header className='header'>
            <h1>Budgets</h1>
            <div className="btnWrap">
            <button onClick={()=> setShow(true) } >Add Budget</button>
            <button onClick={openAddExpenseModal}> Add Expense</button>
            </div>
          </header>
          <div className='wrapSec' >
            {budgets.map(budget => {
              const amount = getBudgetExpenses(budget.id).reduce(
                (total, expense) => total + expense.amount,
                0
              )
              return(

               <Card onView = {()=> { setViewtheexpense(true) ; setViewExpenseModalId(budget.id)}}  onAddExpenseClick = {() => openAddExpenseModal(budget.id)} key ={budget.id} name= {budget.name} amount= {amount} max={budget.max} ></Card>
               
               )
             })} 
            
            
            <UncatBudgetCard onAddExpenseClick = {openAddExpenseModal} onView = { ()=> {setViewtheexpense(true) ; setViewExpenseModalId(UNCATEGORIZED_BUDGET_ID)} }    />
            <TotalCard />
            
          </div>
        </div>
      <div class="BudgetWRAPPER">
        {
          show? < AddBudgetModal  handleClose = {()=> setShow(false) }   /> : null
        } 
      </div>
      <div class="ExpenseWRAPPER">
      {
          modal? < AddExpenseModal defaultBudgetId = {addExpenseModalBudgetId}  handleCloseM = {()=> setModal(false) }   /> : null
        }

      </div>

      <div className="viewWRAPPER">
      
       {viewtheexpense?  < ViewExpenseModal budgetId={viewExpenseModalId}  handleClose={() => setViewtheexpense(false)}   />   : null}

      </div>
      
    </div>
  );
}

export default App;
