/* eslint-disable no-unused-vars */
import style from './App.module.css';
import { Container } from './components/Container/Container';
import { Form } from './components/Form/Form';
// import { Correspondent } from './components/Correspondent/Correspondent';
import { GridHeader } from './components/Grid/GridHeader';
import { GridList } from './components/Gridlist/GridList';
// import { HeaderNumberDate }
//   from './components/HeaderNumberDate/HeaderNumberDate';
// import { SendersAccount } from './components/SendersAccount/SendersAccount';

const listAccount = [
  {
    numberccor: '2221335409090932',
    name: 'MasterCard',
  },
  {
    numberccor: '4710216477552728',
    name: 'Visa',
  },
  {
    numberccor: 'Discover Card',
    name: '6011383809641644',
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
          <Form />
          {/* <HeaderNumberDate />
          <SendersAccount />
          <Correspondent title={'Корреспондент: '} />
          <Correspondent title={'Наимен. дохода: '} /> */}
          <div className={style.grid}>
            <GridHeader />
            <GridList />
            <GridList />
            <GridList />
            <GridList />
            <GridList />
          </div>
        </Container>
      </main>
    </div>
  );
}

export default App;
