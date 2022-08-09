import {all} from 'redux-saga/effects';
import user from './user';

export default function* rootSaga():any {
  return yield all([user]);
}

