
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from '../context/BudgetContext'

import Card from './Card'



export default function UncatBudgetCard (props) {

    const {getBudgetExpenses} = useBudgets()

    const amount = getBudgetExpenses(UNCATEGORIZED_BUDGET_ID).reduce(
        (total, expense) => total + expense.amount,
        0
      )

      if(amount === 0) return null

   return <Card name='Uncategorized' amount={amount} {...props} />
}
