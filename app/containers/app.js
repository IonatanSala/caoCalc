import React, { Component } from 'react';
import { createStore, combineReducers} from 'redux';
import { Provider } from 'react-redux';

import { subjects } from '../reducers/subject';
import CaoCalcApp from './caoCalcApp';

let reducers = combineReducers({
  subjects,
});

let store = createStore(reducers);

export default class App extends Component {
  render() {
    console.log(store.getState());
    return (
      <Provider store={store} >
        <CaoCalcApp />
      </Provider>
    );
  }
}
