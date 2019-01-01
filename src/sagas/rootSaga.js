import { call, all } from 'redux-saga/effects'
import { watchFetchBooks, watchSelectedBook } from './booksSaga'

export default function* rootSaga() {
    yield all([
        call(watchFetchBooks),
        call(watchSelectedBook)
    ])
}