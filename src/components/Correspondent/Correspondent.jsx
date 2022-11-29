import style from './Correspondent.module.css';
import { OutputField } from '../OutputField/OutputField';
import PropTypes from 'prop-types';

export const Correspondent = ({ title, code }) => (
  <div className={style.correspondent}>
    <p className={style.title}>
      {title}
    </p>
    <div className={style.textbox}>
      <OutputField />
    </div>
  </div>
);

Correspondent.propTypes = {
  title: PropTypes.string,
  code: PropTypes.string,
};
