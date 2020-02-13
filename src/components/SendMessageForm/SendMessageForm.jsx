import React, { useContext, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import classnames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons/faPaperPlane';
import styles from './SendMessageForm.css';
import PageContext from '../../context/PageContext';

const cx = classnames.bind(styles);

export default function SendMessageForm({
  user,
}) {
  const [message, setMessage] = useState();

  const pageContext = useContext(PageContext);

  const handleSendMessage = useCallback((e) => {
    e.preventDefault();
    console.log('message: ', message);
    if (message) {
      user.sendSimpleMessage({
        text: message,
        roomId: user.rooms[0].id,
      });
      setMessage('');
    }
  }, [user, message]);

  const handleMessageChange = useCallback(({ target }) => {
    setMessage(target.value);
  }, []);

  return (
    <div className={cx(pageContext.theme, 'sendMessageForm')}>
      <Form onSubmit={handleSendMessage}>
        <InputGroup>
          <Form.Control type="text" onKeyUp={handleMessageChange} />
          <InputGroup.Append>
            <Button type="submit" size="xs" variant="outline-primary" defaultValue={message} onClick={handleSendMessage}>
              <FontAwesomeIcon icon={faPaperPlane} size="1x" />
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
    </div>
  );
}

SendMessageForm.propTypes = {
  user: PropTypes.shape({
    sendSimpleMessage: PropTypes.func.isRequired,
    rooms: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
      }),
    ),
  }).isRequired,
};

SendMessageForm.defaultProps = {

};
