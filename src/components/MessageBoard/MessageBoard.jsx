import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './MessageBoard.css';
import PageContext from '../../context/PageContext';

const cx = classnames.bind(styles);

export default function MessageBoard({
  messages,
}) {
  const pageContext = useContext(PageContext);

  return (
    <div className={cx(pageContext.theme, 'messageBoard')}>
      <ul className={cx('messageList')}>
        {messages.map(message => message && (
          <li key={message.parts[0].payload.content} className={cx('message', message.senderId)}>
            <div className={cx('sender')}>
              {message.senderId}
            </div>
            <div className={cx('text')}>
              {message.parts[0].payload.content}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

MessageBoard.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      senderId: PropTypes.string,
      parts: PropTypes.arrayOf(
        PropTypes.shape({
          payload: PropTypes.shape({
            content: PropTypes.string,
          }),
        }),
      ).isRequired,
    }),
  ),
};

MessageBoard.defaultProps = {
  messages: [],
};
