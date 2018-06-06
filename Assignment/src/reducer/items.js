import { combineReducers } from 'redux';
import { SET_AUTHENTICATION, REQUEST_ITEMS, RECEIVE_ITEMS, UPDATE_SRC } from '../actions/items';

function searchStr(state = '', action) {
  switch (action.type) {
    case UPDATE_SRC:
      return action.searchStr;
    default:
      return state;
  }
}

function items(state = {
  isFetching: false,
  searchStr: '',
  items: [],
  login: false,
}, action) {
  switch (action.type) {
    case REQUEST_ITEMS:
      return Object.assign({}, state, {
        searchStr: action.searchStr,
        isFetching: true,
      });
    case RECEIVE_ITEMS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items,
      });
    default:
      return state;
  }
}

function itemsBySearchString(state = {}, action) {
  switch (action.type) {
    case RECEIVE_ITEMS:
    case REQUEST_ITEMS:
      return Object.assign({}, state, {
        [action.searchStr]: items(state[action.searchStr], action),
      });
    default:
      return state;
  }
}

function validateLoginState(state = false, action) {
  switch (action.type) {
    case SET_AUTHENTICATION:
      return action.login;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  itemsBySearchString,
  searchStr,
  validateLoginState,
});
// export default combineReducers({
//   itemsBySearchString,
//   searchStr,
//   validateLoginState,
// });

export default rootReducer;
