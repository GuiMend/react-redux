import * as types from './actionTypes'

const INITIAL_STATE = {
    myBooks: [],
    booksList: [],
    selectedBook: {},
    loading: false,
    loadingSelectedBook: false
}

const booksReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.BUY_BOOK:
            const buyBook = state.myBooks.filter(_ => _.id === action.book.id).length === 0 ?
                [...state.myBooks, { ...action.book, buy: true }] : state.myBooks.map(_ => _.id === action.book.id ? ({ ...action.book, buy: true }) : _)

            return { ...state, myBooks: buyBook }

        case types.RATE_BOOK:
            const rateBooks = state.myBooks.filter(_ => _.id === action.book.id).length === 0 ?
                [...state.myBooks, { ...action.book, rating: action.rating }] : state.myBooks.map(_ => _.id === action.book.id ? ({ ...action.book, rating: action.rating }) : _)

            return { ...state, myBooks: rateBooks }

        case types.FAV_BOOK:
            const favBooks = state.myBooks.filter(_ => _.id === action.book.id).length === 0 ?
                [...state.myBooks, { ...action.book, fav: true }] : state.myBooks.map(_ => _.id === action.book.id ? ({ ...action.book, fav: !_.fav }) : _)

            return { ...state, myBooks: favBooks }

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