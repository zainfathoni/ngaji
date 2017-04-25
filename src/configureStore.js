import { createStore } from 'redux';
import ngaji from './reducers';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';

const configureStore = () => {
  const persistedState = loadState();
  const store = createStore(ngaji, persistedState);

  store.subscribe(
    throttle(() => {
      saveState({
        items: store.getState().items
      })
    }, 1000)
  );

  return store;
}

export default configureStore;