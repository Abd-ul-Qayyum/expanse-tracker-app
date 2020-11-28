import React, { useContext } from 'react';
import { GlobalContext } from './context/Global'
import Transaction from './Transaction'

function TransactionsList() {
    const { transactions } = useContext(GlobalContext);

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                <li className="null">
                    Description <span>Amount</span>
                </li>
                {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
            </ul>
        </>
    )
}

export default TransactionsList
