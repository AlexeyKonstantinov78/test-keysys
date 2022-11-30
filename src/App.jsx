import style from './App.module.css';
import { Container } from './components/Container/Container';
import { Form } from './components/Form/Form';
import { GridHeader } from './components/Grid/GridHeader';
import { GridList } from './components/Gridlist/GridList';
import { get, numRandom } from './util/util';
import { useEffect, useState } from 'react';

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

function App() {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    get('https://637f91dd2f8f56e28e90521b.mockapi.io/test')
      .then((res) => {
        setArr(res);
      });
  }, []);

  const index = numRandom();
  // console.log(arr[index].items);
  return (
    <div className={style.app}>
      <main className={style.main}>
        <Container>
          {arr.length > 0 &&
            <>
              <Form listAccount={listAccount} arr={arr[index]} />
              <div className={style.grid}>
                <GridHeader />
                {arr[index].items.map((item) => (
                  <GridList key={item.id} arr={item} />
                ))}
              </div>
            </>
          }
        </Container>
      </main>
    </div>
  );
}

export default App;
