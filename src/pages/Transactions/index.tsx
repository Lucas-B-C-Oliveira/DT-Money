import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { Summary } from './../../components/Summary/index';
import { SearchForm } from "./components/SearchForm";
import { PriceHighLight, TransactionsContainer, TransactionTable } from "./styles";

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

export function Transactions() {

  const { transactions } = useContext(TransactionsContext)


  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionTable>
          <tbody>

            {transactions.map(transaction => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td >
                    <PriceHighLight variant={transaction.type}>{transaction.price}</PriceHighLight>
                  </td>
                  <td >{transaction.category}</td>
                  <td >{transaction.createdAt}</td>
                </tr>
              )
            })}
          </tbody>
        </TransactionTable>
      </TransactionsContainer>

    </div>
  )
}