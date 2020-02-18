import React from 'react';
import classNames from 'classnames';
import { X } from 'react-feather';
import styles from './TextField.module.css';

export const TextField = (props) => {
  return (
    <div className={classNames(styles['text-field'], props.className)}>
      <input {...props.inputProps} className={classNames(styles.input, props.inputProps.className)} />
      { (props.inputProps.value || '').length > 0 &&
        <button onClick={props.onClear} className={styles.clear}><X /></button>
      }
    </div>
  );
}

export default TextField;