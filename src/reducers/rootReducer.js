import { combineReducers } from 'redux';

import configReducer from './config';

let DEFAULT_STATE = {
  config: configReducer(),
};

if (typeof window !== 'undefined' && window.__PRELOADED_STATE__) {
  DEFAULT_STATE = window.__PRELOADED_STATE__;
  const stateData = document.getElementById('stateData');
  document.head.removeChild(stateData);
}

export default combineReducers({
  config: configReducer,
});
export { DEFAULT_STATE };
