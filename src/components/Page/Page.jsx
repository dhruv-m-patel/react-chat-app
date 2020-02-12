import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import store from 'store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOn } from '@fortawesome/free-solid-svg-icons/faToggleOn';
import { faToggleOff } from '@fortawesome/free-solid-svg-icons/faToggleOff';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import classnames from 'classnames/bind';
import DefaultHelmet from '../DefaultHelmet';
import styles from './Page.css';

const cx = classnames.bind(styles);

export default function Page({
  title,
  description,
  children,
}) {
  const [hasSwitchedToDarkMode, setHasSwitchedToDarkMode] = useState(undefined);

  const switchToDarkMode = useCallback(() => {
    setHasSwitchedToDarkMode(!hasSwitchedToDarkMode);
    store.set('enableDarkMode', !hasSwitchedToDarkMode);
  }, [hasSwitchedToDarkMode]);

  // Set dark mode initially based on whether user prefers it using os preferences or previously turned it on
  useEffect(() => {
    if (hasSwitchedToDarkMode === undefined) {
      let shouldSetDarkModeInitially = false;
      const darkModeSetting = store.get('enableDarkMode');
      if (darkModeSetting === undefined && typeof window !== 'undefined') {
        shouldSetDarkModeInitially = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      } else {
        shouldSetDarkModeInitially = darkModeSetting;
      }

      setHasSwitchedToDarkMode(shouldSetDarkModeInitially);
      store.set('enableDarkMode', shouldSetDarkModeInitially);
    }
  }, [hasSwitchedToDarkMode])

  return (
    <Container fluid className={cx('page', { darkTheme: hasSwitchedToDarkMode, lightTheme: !hasSwitchedToDarkMode })}>
      <DefaultHelmet title={title} description={description} />
      <div className={cx('navBar')}>
        <Row>
          <Col xs={{ span: 10 }}>
            <div className={cx('app')}>
              <header className={cx('appHeader')}>
                <img src="/images/react.svg" className={cx('appLogo')} alt="logo" />
                React Chat App
              </header>
            </div>
          </Col>
          <Col xs={{ span: 2 }}>
            <div className={cx('textRight')}>
              Dark Mode
              <FontAwesomeIcon
                icon={hasSwitchedToDarkMode ? faToggleOn : faToggleOff}
                size="2x"
                onClick={switchToDarkMode}
                className={cx('clickable', 'padTop10px')}
              />
            </div>
          </Col>
        </Row>
      </div>
      <br />
      <Container className={cx('content')} fluid>
        {children}
      </Container>
    </Container>
  );
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
};

Page.defaultProps = {
  title: undefined,
  description: undefined,
}
