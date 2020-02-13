import Tester from '../../../tests/Tester';
import MessageBoard from './MessageBoard';

const tester = new Tester();

describe('MessageBoard', () => {
  test('it should render', () => {
    const { component } = tester.getShallowInstance(
      MessageBoard,
      {
        messages: [
          { senderId: 'sender', parts: [{ payload: { content: 'Foo' } }] },
          { senderId: 'receiver', parts: [{ payload: { content: 'Bar' } }] },
          { senderId: 'sender', parts: [{ payload: { content: 'Bar' } }] },
          { senderId: 'receiver', parts: [{ payload: { content: 'Baz' } }] },
        ],
      },
    );

    expect(component).toBeDefined();
    expect(component.find('li').length).toEqual(4);
    expect(component.find('li').at(0).childAt(0).text()).toEqual('sender');
    expect(component.find('li').at(0).childAt(1).text()).toEqual('Foo');
    expect(component.find('li').at(1).childAt(0).text()).toEqual('receiver');
    expect(component.find('li').at(1).childAt(1).text()).toEqual('Bar');
    expect(component.find('li').at(2).childAt(0).text()).toEqual('sender');
    expect(component.find('li').at(2).childAt(1).text()).toEqual('Bar');
    expect(component.find('li').at(3).childAt(0).text()).toEqual('receiver');
    expect(component.find('li').at(3).childAt(1).text()).toEqual('Baz');
  });
});
