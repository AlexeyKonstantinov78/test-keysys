import style from './GridList.module.css';
import PropTypes from 'prop-types';

export const GridList = ({ arr }) => (
  <div className={style.grid}>
    <div className={style.gri1}>{arr.id}</div>
    <div className={style.gri2}>{arr.summ}</div>
    <div className={style.gri3}>{arr.rcaccount}</div>
    <div className={style.gri4}>{arr.dt}</div>
    <div className={style.gri5}>{arr.kt}</div>
  </div>
);

GridList.propTypes = {
  arr: PropTypes.object,
};
