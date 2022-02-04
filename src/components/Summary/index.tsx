import { useContext } from 'react';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { TransactionsContext } from '../../TransactionsContexts';
import { Container } from './styles';

export function Summary() {
  const transactions = useContext(TransactionsContext);
  console.log(
    '🚀 ~ file: index.tsx ~ line 11 ~ Summary ~ transactions',
    transactions,
  );

  return (
    <Container>
      <div>
        <header>
          <p>Income</p>
          <img src={incomeImg} alt="Income" />
        </header>
        <strong>R$ 1000,00</strong>
      </div>

      <div>
        <header>
          <p>Outcome</p>
          <img src={outcomeImg} alt="Outcome" />
        </header>
        <strong>- R$ 300,00</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Income" />
        </header>
        <strong>R$ 700,00</strong>
      </div>
    </Container>
  );
}
