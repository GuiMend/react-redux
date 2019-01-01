const url = query => `https://www.googleapis.com/books/v1/volumes?q=${query}`

function* getBooks(query) {
    const response = yield fetch(url(query), {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'applitacion/json'
        },
        body: ''
    })
    const books = yield response.status === 200 ? JSON.parse(response._bodyInit) : []
    return books
}

function* getSelectedBook(query) {
    const response = yield fetch(query, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'applitacion/json'
        },
        body: ''
    })
    const book = yield response.status === 200 ? JSON.parse(response._bodyInit) : []
    return book
}

export default {
    getBooks,
    getSelectedBook
}