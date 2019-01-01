import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components/native'
import { Text, RefreshControl, TouchableOpacity } from 'react-native'
import ListHeader from '../components/ListHeader'
import { fetchBooksAction, fetchSelectedBookAction } from '../ducks/books/actions'
import { Cover } from '../components/Book'

const Wrapper = styled.ScrollView`
    margin: 16px;
`

const BooksWrapper = styled.View`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
`

class List extends Component {
    state = {
        searchText: '',
        title: 'Design Books',
        search: false
    }

    _onRefresh = () => {
        this.props.onFetchBooks(this.state.title)
    }


    toggleSearch = () => {
        this.setState(prevState => {
            this.updateNav({ search: !prevState.search })
            return ({ search: !prevState.search })
        })
    }

    onChangeText = text => {
        this.setState({ searchText: text })
        this.updateNav({ searchText: text })
    }

    updateNav = props => this.props.navigation.setParams({ ...props })

    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;

        return params ? { header: <ListHeader {...params} /> } : { header: null }
    }

    componentDidMount() {
        this.props.onFetchBooks(this.state.title)
        this.props.navigation.setParams({
            toggleSearch: this.toggleSearch,
            onChangeText: this.onChangeText,
            ...this.state
        })
    }

    render() {
        const { loading, books, selectBook, navigation } = this.props
        const { searchText } = this.state
        return (
            <Wrapper
                refreshControl={
                    <RefreshControl
                        refreshing={loading}
                        onRefresh={this._onRefresh}
                    />
                }
            >
                {books.items && books.items.length === 0 && <Text>No books were found... :(</Text>}
                <BooksWrapper>
                    {books.items && books.items.length !== 0 && books.items
                        .filter(book => book.volumeInfo.title.toLowerCase().includes(searchText.toLowerCase()))
                        .map((book, i) =>
                            <TouchableOpacity key={i} onPress={() => {
                                selectBook(book.selfLink)
                                navigation.navigate('Details')
                            }}>
                                <Cover firstInColumn={i % 3 === 0} small={true} coverURL={book.volumeInfo.imageLinks.smallThumbnail} />
                            </TouchableOpacity>
                        )}
                </BooksWrapper>
            </Wrapper>
        )
    }
}

const mapStateToProps = state => ({
    books: state.books.booksList,
    loading: state.books.loading
})

const mapDispatchToProps = dispatch => ({
    onFetchBooks: query => dispatch(fetchBooksAction(query)),
    selectBook: book => dispatch(fetchSelectedBookAction(book))
})

export default connect(mapStateToProps, mapDispatchToProps)(List)