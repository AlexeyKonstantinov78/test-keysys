import style from './App.module.css';
import { Container } from './components/Container/Container';
import { HeaderNumberDate }
  from './components/HeaderNumberDate/HeaderNumberDate';

function App() {
  return (
    <div className={style.app}>
      <main className={style.main}>
        <Container>
          <HeaderNumberDate />
        </Container>
      </main>
    </div>
  );
}

export default App;
