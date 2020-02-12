import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Page from '../Page';

export default function ChatRoom() {
  return (
    <Page>
      <Row>
        <Col sm={{ offset: 1, span: 10 }} md={{ offset: 4, span: 4 }}>
          Chat room will appear here
        </Col>
      </Row>
    </Page>
  );
}
