import { useContext } from 'react';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { TransactionsContext } from '../../TransactionsContexts';
import { Container } from './styles';

export function Summary() {
  const { transactions } = useContext(TransactionsContext);

  const summary = transactions.reduce(
    (acc, transaction) => {
      switch (transaction.type) {
        case 'deposit':
          acc.deposits += transaction.amount;
          acc.total += transaction.amount;
          break;
        case 'withdraw':
          acc.withdraws += transaction.amount;
          acc.total -= transaction.amount;
          break;
      }

      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    },
  );

  return (
    <Container>
      <div>
        <header>
          <p>Income</p>
          <img src={incomeImg} alt="Income" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.deposits)}
        </strong>
      </div>

      <div>
        <header>
          <p>Outcome</p>
          <img src={outcomeImg} alt="Outcome" />
        </header>
        <strong>
          -{' '}
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.withdraws)}
        </strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Income" />
        </header>
        <strong>R$ {summary.total}</strong>
      </div>
    </Container>
  );
}
