import style from './OutputField.module.css';
import PropTypes from 'prop-types';

export const OutputField = ({ item }) => (
  <div className={style.output__field}>{item}</div>
);

OutputField.propTypes = {
  item: PropTypes.string,
};
