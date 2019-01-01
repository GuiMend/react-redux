import * as types from './actionTypes'

const INITIAL_STATE = {
    booksList: [],
    selectedBook: {},
    loading: false,
    loadingSelectedBook: false
}

const booksReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.FETCH_BOOKS:
            return { ...state, loading: true }

        case types.FETCH_SUCCEEDED:
            return { ...state, booksList: action.booksList, loading: false }

        case types.FETCH_FAILED:
            return { ...state, booksList: [] }

        case types.FETCH_SELECTED_BOOK:
            return { ...state, loadingSelectedBook: true }

        case types.FETCH_SELECTED_BOOK_SUCCEEDED:
            return { ...state, selectedBook: action.selectedBook, loadingSelectedBook: false }

        case types.FETCH_SELECTED_BOOK_FAILED:
            return { ...state, selectedBook: [], loadingSelectedBook: false }

        default:
            return state
    }
};

export default booksReducer