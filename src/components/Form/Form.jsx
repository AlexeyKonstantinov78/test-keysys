import _ from './Form.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const Form = ({ listAccount, arr }) => {
  const [select, setSelect] = useState('');
  const [invalid, setInvalid] = useState(true);

  const onClickSelect = ({ target }) => {
    if (target.value !== '') setInvalid(false);
    else {
      setInvalid(true);
    }
    setSelect(target.value);
  };

  return (
    <form className={_.form}>
      <div className={_.wrap}>
        <div className={_.number__date}>
          <div className={_.flex}>
            <label className={_.label} htmlFor='number'>
              Номер:{' '}
            </label>
            <input
              className={_.input}
              type='text'
              name='number'
              id={_.number}
              defaultValue={arr.number}
            />

            <label className={_.label + ' ' + _.min_content} htmlFor='date'>
              Дата:<span className={_.span}>*</span>{' '}
            </label>
            <input
              className={_.input + ' ' + _.input_bg_yellow}
              type='date'
              name='date'
              id='date'
              defaultValue={arr.date}
            />
          </div>
          <div className={_.flex}>
            <label
              className={
                _.label + ' ' + _.min_content + ' ' + _.label_date_exec
              }
              htmlFor='date_exec'>
              Дата проводки:{' '}
            </label>
            <input
              className={_.input + ' ' + _.input__date}
              type='date'
              name='date_exec'
              id='date_exec'
              defaultValue={arr.date_exec}
            />
          </div>
        </div>

        <div className={_.account + ' ' + _.flex}>
          <label className={_.label} htmlFor='account1'>
            Счет отправителя: <span className={_.span}>*</span>{' '}
          </label>
          <select
            name='select'
            className={_.select}
            onChange={onClickSelect}
            aria-invalid={invalid}>
            <option defaultValue=''></option>
            {listAccount.map((item) => (
              <option key={item.id} defaultValue={item.numberccor}>
                {item.numberccor + ' ' + item.name}
              </option>
            ))}
          </select>
          <input
            className={_.input}
            type='text'
            name='corr1_n'
            id='corr1_n'
            defaultValue={select}
          />
        </div>
        <div className={_.account + ' ' + _.flex}>
          <label className={_.label} htmlFor='corr2_n'>
            Корреспондент:{' '}
          </label>
          <input
            className={_.input}
            type='text'
            name='corr2_n'
            id='corr2_n'
            defaultValue={arr.corr1_n}
          />
        </div>
        <div className={_.account + ' ' + _.flex}>
          <label className={_.label} htmlFor='inc_n'>
            Наим.дохода:{' '}
          </label>
          <input
            className={_.input}
            type='text'
            name='inc_n'
            id='inc_n'
            defaultValue={arr.inc_n}
          />
        </div>
      </div>
    </form>
  );
};

Form.propTypes = {
  listAccount: PropTypes.array,
  arr: PropTypes.object,
};
