import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './SendMessageForm.css';
import PageContext from '../../context/PageContext';

const cx = classnames.bind(styles);

export default function SendMessageForm() {
  const pageContext = useContext(PageContext);

  return (
    <div className={cx(pageContext.theme, 'sendMessageForm')}>Send Message Form</div>
  );
}

// SendMessageForm.propTypes = {

// };

// SendMessageForm.defaultProps = {

// };
