import _ from './Form.module.css';

export const Form = () => (
  <form className={_.form}>
    <div className={_.wrap}>
      <div className={_.number__date}>
        <div className={_.flex}>
          <label className={_.label} htmlFor='number'>
            Номер:{' '}
          </label>
          <input className={_.input} type='text' name='number' id={_.number} />

          <label className={_.label + ' ' + _.min_content} htmlFor='date'>
            Дата:<span className={_.span}>*</span>{' '}
          </label>
          <input
            className={_.input + ' ' + _.input_bg_yellow}
            type='date'
            name='date'
            id='date'
            defaultValue='2022-08-22'
          />
        </div>
        <div className={_.flex}>
          <label
            className={_.label + ' ' + _.min_content + ' ' + _.label_date_exec}
            htmlFor='date_exec'>
            Дата проводки:{' '}
          </label>
          <input
            className={_.input + ' ' + _.input__date}
            type='date'
            name='date_exec'
            id='date_exec'
            defaultValue='2022-08-22'
          />
        </div>
      </div>

      <div className={_.account + ' ' + _.flex}>
        <label className={_.label} htmlFor='account1'>
          Счет отправителя: <span className={_.span}>*</span>{' '}
        </label>
        <input
          className={
            _.input +
            ' ' +
            _.input_color_tomato +
            ' ' +
            _.input_bg_yellow +
            ' ' +
            _.input_account1
          }
          type='text'
          name='account1'
          id='account1'
        />
        <input className={_.input} type='text' name='corr1_n' id='corr1_n' />
      </div>
      <div className={_.account + ' ' + _.flex}>
        <label className={_.label} htmlFor='corr2_n'>
          Корреспондент:{' '}
        </label>
        <input className={_.input} type='text' name='corr2_n' id='corr2_n' />
      </div>
      <div className={_.account + ' ' + _.flex}>
        <label className={_.label} htmlFor='inc_n'>
          Наим.дохода:{' '}
        </label>
        <input className={_.input} type='text' name='inc_n' id='inc_n' />
      </div>
    </div>
  </form>
);
