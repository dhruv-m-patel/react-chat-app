import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import classnames from 'classnames/bind';
import Page from '../Page';
import styles from './ChatRoom.css';
import MessageBoard from '../MessageBoard';
import SendMessageForm from '../SendMessageForm';
import Smartphone from '../Smartphone';

const cx = classnames.bind(styles);

export default function ChatRoom() {
  return (
    <Page>
      <Row>
        <Col xs={{ offset: 1, span: 10 }} sm={{ offset: 4, span: 4 }}>
          <Container className={cx('chatroom')}>
            <Smartphone>
              <MessageBoard />
              <SendMessageForm />
            </Smartphone>
          </Container>
        </Col>
      </Row>
    </Page>
  );
}
