import { connect } from 'react-redux';
import ChatRoom from './ChatRoom';

function mapStateToProps({ config }) {
  return {
    instanceLocator: config.instanceLocator,
    receiver: config.receiverUser,
    instanceUrl: config.authToken,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom);
