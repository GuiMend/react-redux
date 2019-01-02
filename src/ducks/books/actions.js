import * as types from './actionTypes'

export const rateBookAction = (book, rating) => ({
    type: types.RATE_BOOK,
    book,
    rating
})

export const buyBookAction = book => ({
    type: types.BUY_BOOK,
    book
})

export const favBookAction = book => ({
    type: types.FAV_BOOK,
    book
})

export const fetchBooksAction = query => ({
    type: types.FETCH_BOOKS,
    query
})

export const fetchSelectedBookAction = query => ({
    type: types.FETCH_SELECTED_BOOK,
    query
})

export const selectBookAction = selectedBookQuery => ({
    type: types.SELECT_BOOK,
    selectedBookQuery
})

export const fetchSuccessAction = booksList => ({
    type: types.FETCH_SUCCEEDED,
    booksList
})

export const fetchFailedAction = error => ({
    type: types.FETCH_FAILED,
    error
})

export const selectBookSuccessAction = book => ({
    type: types.FETCH_SELECTED_BOOK_SUCCEEDED,
    book
})

export const selectBookFailedAction = error => ({
    type: types.FETCH_SELECTED_BOOK_FAILED,
    error
})
