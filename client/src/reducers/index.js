import { REQUEST_POSTS, RECEIVE_POSTS } from '../Actions/index.js';



const reducer = (state = {}, action) => {
    switch (action.type) {
      case REQUEST_POSTS:
         return { ...state, loading: true };
      case RECEIVE_POSTS:
         return { ...state, json: action.json, loading: false };
      default:
         return state;
    }
  };
  export default reducer;