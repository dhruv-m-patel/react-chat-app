import Tester from '../../../tests/Tester';
import ChatRoom from './ChatRoom';

const tester = new Tester();

describe('ChatRoom', () => {
  test('it should render', () => {
    const snapshot = tester.getSnapshot(ChatRoom);
    expect(snapshot).toMatchSnapshot();
  });
});
