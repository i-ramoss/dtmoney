import { useEffect } from 'react';

import { api } from '../../services/api';

import { Container } from './styles';

export function TransactionsTable() {
  useEffect(() => {
    api.get('/transactions').then(response => console.log(response.data))
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Website development</td>
            <td className="deposit">R$12.000</td>
            <td>Development</td>
            <td>03/02/2022</td>
          </tr>
          <tr>
            <td>Rentx</td>
            <td className="withdraw">- R$3.500</td>
            <td>Car</td>
            <td>25/01/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}