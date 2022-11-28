import { InputDate } from '../InputDate/InputDate';
import { OutputField } from '../OutputField/OutputField';
import style from './HeaderNumberDate.module.css';

export const HeaderNumberDate = () => (
  <div className={style.number__container}>
    <div className={style.flex}>
      <p className={style.number}>Номер: </p>
      <div className={style.output__field1}>
        <OutputField />
      </div>
      <InputDate text='Дата:' data='2022-08-22' />
    </div>
    <InputDate
      className={style.input2}
      text='Дата проводки: '
      data='2022-08-22'
    />
  </div>
);
