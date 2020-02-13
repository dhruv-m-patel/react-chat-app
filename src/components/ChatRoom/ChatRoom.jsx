import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import classnames from 'classnames/bind';
import Chatkit from '@pusher/chatkit-client';
import Page from '../Page';
import styles from './ChatRoom.css';
import MessageBoard from '../MessageBoard';
import SendMessageForm from '../SendMessageForm';
import Smartphone from '../Smartphone';
import useEffectWithDeepCompare from '../../lib/hooks/useEffectWithDeepCompare';

const cx = classnames.bind(styles);

export default function ChatRoom({
  instanceLocator,
  receiver,
  instanceUrl,
}) {
  const [chatManager, setChatManager] = useState();
  const [newMessage, setNewMessage] = useState();
  const [messages, setMessages] = useState([]);
  const [chatUser, setChatUser] = useState();

  // Initialize chatManager instance to interact with Chatkit API
  useEffect(() => {
    const chatManagerInstance = new Chatkit.ChatManager({
      instanceLocator: instanceLocator,
      userId: receiver,
      tokenProvider: new Chatkit.TokenProvider({
        url: instanceUrl
      }),
    });
    setChatManager(chatManagerInstance);
  }, [instanceLocator, receiver, instanceUrl]);

  // When chatManager becomes available, connect it and set chatUser and subscribe to messages
  useEffectWithDeepCompare(() => {
    if (chatManager) {
      chatManager.connect()
        .then((user) => {
          if (!chatUser) {
            setChatUser(user);
          }
          user.subscribeToRoomMultipart({
            roomId: user.rooms[0].id,
            hooks: {
              onMessage: (message) => {
                setNewMessage(message);
              }
            },
          });
        });
    }
  }, [chatManager, chatUser]);

  // When a new message is received, add it to collection of messages cached
  useEffectWithDeepCompare(() => {
    if (newMessage) {
      setMessages([].concat(messages, newMessage));
    }
  }, [newMessage]);

  return (
    <Page>
      <Row>
        <Col xs={{ offset: 1, span: 10 }} sm={{ offset: 4, span: 4 }}>
          <Container className={cx('chatroom')}>
            <Smartphone>
              <MessageBoard messages={messages} />
              <SendMessageForm user={chatUser} />
            </Smartphone>
          </Container>
        </Col>
      </Row>
    </Page>
  );
}

ChatRoom.propTypes = {
  instanceLocator: PropTypes.string.isRequired,
  receiver: PropTypes.string.isRequired,
  instanceUrl: PropTypes.string.isRequired,
};
