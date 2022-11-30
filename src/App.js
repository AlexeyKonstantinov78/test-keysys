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
    number: 321231, // номер
    date: '2021-10-08', // дата
    date_exec: '2021-10-08', // дата проводки
    caccount1: '32132132321322', // Счет отправителя
    corr1_n: 'ОАО МетизЛенГлавПром', // наименование отправителя
    corr2_n: 'ООО Компания Мяс', //
    inc_n: 23320, //
    items: [
      {
        id: '1', //
        summ: '32132132', //
        rcaccount: '341614029088230', //
        dt: 531513, //
        kt: 56435313, //
      },
      {
        id: '2', //
        summ: '2132131', //
        rcaccount: '2720666848650993', //
        dt: 15435, //
        kt: 5641543, //
      },
      {
        id: '3', //
        summ: '3132', //
        rcaccount: '2563256019744047', //
        dt: 5155, //
        kt: 541531, //
      },
    ], // список
  },
];
console.log(arr[0].items);
function App() {
  return (
    <div className={style.app}>
      <main className={style.main}>
        <Container>
          <Form listAccount={listAccount} arr={arr[0]} />
          <div className={style.grid}>
            <GridHeader />
            {arr[0].items.map((item) => (
              <GridList key={item.id} arr={item} />
            ))}
          </div>
        </Container>
      </main>
    </div>
  );
}

export default App;
