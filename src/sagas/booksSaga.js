import { put, takeLatest } from 'redux-saga/effects'
import api from './api'
import * as types from '../ducks/books/actionTypes'

function* fetchBooks(action) {
    try {
        const booksList = yield api.getBooks(action.query)
        yield put({ type: types.FETCH_SUCCEEDED, booksList })
    } catch (error) {
        yield put({ type: types.FETCH_FAILED, error })
    }
}

function* fetchSelectedBook(action) {
    try {
        const selectedBook = yield api.getSelectedBook(action.query)
        yield put({ type: types.FETCH_SELECTED_BOOK_SUCCEEDED, selectedBook })
    } catch (error) {
        yield put({ type: types.FETCH_SELECTED_BOOK_FAILED, error })
    }
}

export function* watchFetchBooks() {
    yield takeLatest(types.FETCH_BOOKS, fetchBooks)
}

export function* watchSelectedBook() {
    yield takeLatest(types.FETCH_SELECTED_BOOK, fetchSelectedBook)
}