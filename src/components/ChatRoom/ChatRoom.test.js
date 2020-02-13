import Tester from '../../../tests/Tester';
import ChatRoom from './ChatRoom';
import MessageBoard from '../MessageBoard';
import SendMessageForm from '../SendMessageForm'

const tester = new Tester();

describe('ChatRoom', () => {
  test('it should render', () => {
    const { component } = tester.getShallowInstance(
      ChatRoom,
      {
        instanceLocator: 'value',
        receiver: 'receiver',
        instanceUrl: 'url',
      },
    );

    expect(component).toBeDefined();
    expect(component.find(MessageBoard).length).toEqual(1);
    expect(component.find(SendMessageForm).length).toEqual(1);
  });
});
