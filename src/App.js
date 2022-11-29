import style from './App.module.css';
import { Container } from './components/Container/Container';
import { Correspondent } from './components/Correspondent/Correspondent';
import { GridHeader } from './components/Grid/GridHeader';
import { GridList } from './components/Gridlist/GridList';
import { HeaderNumberDate }
  from './components/HeaderNumberDate/HeaderNumberDate';
import { SendersAccount } from './components/SendersAccount/SendersAccount';

function App() {
  return (
    <div className={style.app}>
      <main className={style.main}>
        <Container>
          <HeaderNumberDate />
          <SendersAccount />
          <Correspondent title={'Корреспондент: '} />
          <Correspondent title={'Наимен. дохода: '} />
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
