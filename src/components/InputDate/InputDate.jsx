import style from './InputDate.module.css';
import PropTypes from 'prop-types';


export const InputDate = ({ text, data }) => (
  <div className={style.flex}>
    <p className={style.number__text2}>{text}
      <span className={style.span}>*</span>
    </p>
    <input type="date" name="data" defaultValue={data} />
  </div>
);

InputDate.propTypes = {
  text: PropTypes.string,
  data: PropTypes.any,
};
