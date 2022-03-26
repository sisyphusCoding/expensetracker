
import { useBudgets } from '../context/BudgetContext'

import Card from './Card'


export default function TotalCard () {

    const {expenses , budgets } = useBudgets()


    const amount = expenses.reduce(
        (total, expense) => total + expense.amount,
        0
      )

    const max = budgets.reduce(
        (total, budget) => total + budget.amount,
        0
      )

      if(max === 0) return null

  return <Card name='Total' amount={amount} max={max} hideBtn />
}
