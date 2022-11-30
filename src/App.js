/* eslint-disable no-unused-vars */
import style from './App.module.css';
import { Container } from './components/Container/Container';
import { Form } from './components/Form/Form';
import { GridHeader } from './components/Grid/GridHeader';
import { GridList } from './components/Gridlist/GridList';
import { get } from './util/util';
import axios from 'axios';

const listAccount = [
  {
    id: 1,
    numberccor: 2221335409090932,
    name: 'MasterCard',
  },
  {
    id: 2,
    numberccor: 4710216477552728,
    name: 'Visa',
  },
  {
    id: 3,
    numberccor: 6011383809641644,
    name: 'Discover Card',
  },
];

const arr = [
  {
    number: '', // номер
    date: '2021-10-01', // дата
    date_exec: '2021-10-01', // дата проводки
    caccount1: '', // Счет отправителя
    corr1_n: '', // наименование отправителя
    corr2_n: '', //
    inc_n: '', //
    items: [
      {
        id: '1', //
        summ: '', //
        rcaccount: '', //
        dt: '', //
        kt: '', //
      },
      {
        id: '2', //
        summ: '', //
        rcaccount: '', //
        dt: '', //
        kt: '', //
      },
      {
        id: '3', //
        summ: '', //
        rcaccount: '', //
        dt: '', //
        kt: '', //
      },
    ], // список
  },
];

function App() {
  return (
    <div className={style.app}>
      <main className={style.main}>
        <Container>
          <Form listAccount={listAccount} />
          <div className={style.grid}>
            <GridHeader />
            <GridList />
          </div>
        </Container>
      </main>
    </div>
  );
}

export default App;
