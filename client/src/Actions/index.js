
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

//const MY_API_KEY = 'some key to access data';


export const requestPosts = () => ({type: REQUEST_POSTS,});
export const receivedPosts = json => ({type: RECEIVE_POSTS,json: json.articles,});

export function fetchPosts(channel) {
 return function (dispatch) {
   dispatch(requestPosts());
   return fetch(`/Appliances`)
   .then(
      response => response.json(),
      error => console.log('An error occurred.', error),
  )
   .then((json) => {
      dispatch(receivedPosts(json));
   },
  );
 };
}

//----------------------

let nextTodoId = 0;

export const addTodo = text => ({
  type: "ADD_TODO",
  id: nextTodoId++,
  complete: false,
  text
});

export const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  id
});

export const filter = filter => ({
  type: "FILTER_TODO",
  filter
});

export const typeFilter = {
  SHOW_COMPLETE: "SHOW_COMPLETE",
  SHOW_ACTIVE: "SHOW_ACTIVE",
  SHOW_ALL: "SHOW_ALL"
};