import { OutputField } from '../OutputField/OutputField';
import style from './SendersAccount.module.css';

export const SendersAccount = () => (
  <div className={style.flex}>
    <p className={style.title}>
      Счет отправителя:<span className={style.span}>*</span>{' '}
    </p>
    <select className={style.select}>
      <option value></option>
    </select>
    <div className={style.textbox}>
      <OutputField />
    </div>
  </div>
);
