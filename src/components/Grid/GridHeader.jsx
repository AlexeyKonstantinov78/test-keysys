import style from './GridHeader.module.css';

export const GridHeader = () => (
  <div className={style.grid}>
    <div className={style.gri1}>№</div>
    <div className={style.gri2}>Сумма</div>
    <div className={style.gri3}>Счет получателя</div>
    <div className={style.gri4}>Дт</div>
    <div className={style.gri5}>Кт</div>
  </div>
);
