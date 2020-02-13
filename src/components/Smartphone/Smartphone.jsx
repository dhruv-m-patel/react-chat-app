import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import PageContext from '../../context/PageContext';
import styles from './Smartphone.css';

const cx = classnames.bind(styles);

export default function Smartphone({
  className,
  children,
  ...rest
}) {
  const pageContext = useContext(PageContext);

  return (
    <div {...rest} className={cx(pageContext.theme, 'smartphone', className)}>
      <div className={cx('content')}>
        {children}
      </div>
    </div>
  );
}

Smartphone.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Smartphone.defaultProps = {
  className: undefined,
  children: undefined,
};
