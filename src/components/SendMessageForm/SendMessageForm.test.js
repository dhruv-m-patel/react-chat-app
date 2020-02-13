import Tester from '../../../tests/Tester';
import SendMessageForm from './SendMessageForm';

const tester = new Tester();

describe('SendMessageForm', () => {
  test('it should render', () => {
    const { component } = tester.getShallowInstance(
      SendMessageForm,
      {
        user: {
          sendSimpleMessage: jest.fn(),
          rooms: [{ id: '123' }],
        },
      },
    );

    expect(component).toBeDefined();
  });
});
