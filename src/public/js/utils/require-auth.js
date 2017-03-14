import store from "./store";

export default (nextState, replace, callback) => {

  const state = store.getState();

  if (!state.auth.accessToken) {
    replace('login');
  }

  callback();
}