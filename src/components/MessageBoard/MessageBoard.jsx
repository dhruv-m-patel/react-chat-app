import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './MessageBoard.css';
import PageContext from '../../context/PageContext';

const cx = classnames.bind(styles);

export default function MessageBoard() {
  const pageContext = useContext(PageContext);

  return (
    <div className={cx(pageContext.theme, 'messageBoard')}>Message Board</div>
  );
}

// MessageBoard.propTypes = {

// };

// MessageBoard.defaultProps = {

// };
