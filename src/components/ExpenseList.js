import React from 'react'
import Item from './ExpenseItem.js'
import { MdDelete } from 'react-icons/md'

const ExpenseList = ({ expenses }) => {
  return (
    <ul>
      <ul className='list'>
        {expenses.map((expense) => {
          return <Item key={expense.id} expense={expense} />
        })
        }
      </ul>
      {expenses.length > 0 && <button className="btn">
        Clear Expenses
        <MdDelete className='btn-icon' />
      </button>}
    </ul>
  )
}

export default ExpenseList