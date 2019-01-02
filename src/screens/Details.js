import React from 'react'
import { connect } from 'react-redux'
import { ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Header from '../components/Header'
import styled from 'styled-components/native'
import Button from '../components/Button'
import { Cover } from '../components/Book'
import { buyBookAction, favBookAction, rateBookAction } from '../ducks/books/actions'

const BookHeader = styled.View`
    margin-top: 18px;
    margin-right: 18px;
    display: flex;
    flex-direction: row;
`

const CoverInfo = styled.View`
    margin-right: 16px;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const AdditionalInfo = styled.View`
    width: 0;
    flexGrow: 1;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
`

const DescriptionWrapper = styled.View`
    background: #FFF;
    height: 100%;
    min-height: 450px;
`

const GrayText = styled.Text`
    line-height: 25px;
    font-size: 14px;
    color: #9F8B0C;
`

const NotForSale = styled.Text`
    margin-top: 16px;    
    line-height: 25px;
    font-size: 14px;
    color: #9F8B0C;
`

const Title = styled.Text`
    font-weight: bold;
    line-height: 25px;
    font-size: 20px;
    color: #2C2605;
`

const Description = styled.Text`
    margin: 16px;
    line-height: 30px;
    font-size: 14px;
    color: #4F565D;
`

const Price = styled.Text`
    font-weight: bold;
    line-height: 25px;
    font-size: 20px;
    color: #2C2605;
`

const Sale = styled.View`
    margin-top: 16px;
    margin-bottom: 90px;
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const Actions = styled.View`
    position: absolute;
    bottom: 15px;
    left: 0;
    right: 0;
    margin-top: 25px;    
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const LoadingWrapper = styled.View`
    margin-top: 16px;
`

const Rating = styled.View`
    display: flex;
    flex-direction: row;
`

const IconWrapper = styled.TouchableOpacity`
    border-radius: 50px;
    background-color: ${props => props.fav ? '#DC4B5D' : '#9F8B0C'};
    border-width: 7px;
    border-color:  ${props => props.fav ? '#DC4B5D' : '#9F8B0C'};
`


class Details extends React.Component {
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        return { header: <Header {...params} details={true} navigation={navigation} search={false} /> }
    }

    render() {
        const { book, loadingSelectedBook, myBooks, buyBook, rateBook, favBook } = this.props
        const currentBook = myBooks.filter(_ => _.id === book.id).length === 0 ? book : myBooks.filter(_ => _.id === book.id)[0]

        if (loadingSelectedBook) return <LoadingWrapper><ActivityIndicator size="large" color="#9F8B0C" /></LoadingWrapper>
        return (
            <ScrollView>
                <BookHeader>
                    <CoverInfo>
                        <Cover coverURL={currentBook.volumeInfo.imageLinks.smallThumbnail} />
                        <GrayText>{currentBook.volumeInfo.pageCount}</GrayText>
                    </CoverInfo>
                    <AdditionalInfo>
                        <Title>
                            {currentBook.volumeInfo.title}
                        </Title>
                        {currentBook.volumeInfo.authors && <GrayText>by: {currentBook.volumeInfo.authors.join(', ')}</GrayText>}
                        <Sale>
                            {currentBook.saleInfo.saleability === 'NOT_FOR_SALE' ? <NotForSale>Not for sale</NotForSale> : <Price>R${currentBook.saleInfo.listPrice.amount}</Price>}
                            <Rating>
                                <TouchableOpacity onPress={() => rateBook(currentBook, 1)}>
                                    <Icon name="star" size={20} color={currentBook.rating >= 1 ? "#4C4309" : "#E4C81B"} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => rateBook(currentBook, 2)}>
                                    <Icon name="star" size={20} color={currentBook.rating >= 2 ? "#4C4309" : "#E4C81B"} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => rateBook(currentBook, 3)}>
                                    <Icon name="star" size={20} color={currentBook.rating >= 3 ? "#4C4309" : "#E4C81B"} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => rateBook(currentBook, 4)}>
                                    <Icon name="star" size={20} color={currentBook.rating >= 4 ? "#4C4309" : "#E4C81B"} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => rateBook(currentBook, 5)} >
                                    <Icon name="star" size={20} color={currentBook.rating >= 5 ? "#4C4309" : "#E4C81B"} />
                                </TouchableOpacity>
                            </Rating>
                        </Sale>
                        <Actions>
                            <Button
                                onPress={() => buyBook(currentBook)}
                                disabled={currentBook.saleInfo.saleability === 'NOT_FOR_SALE' || currentBook.buy}
                                title={currentBook.buy ? 'Have it :)' : 'BUY'} />
                            <IconWrapper
                                onPress={() => favBook(currentBook)}
                                fav={currentBook.fav}
                            >
                                <Icon color={currentBook.fav ? '#FFFFFF' : '#E4C81B'} name="heart" size={20} />
                            </IconWrapper>
                        </Actions>
                    </AdditionalInfo>
                </BookHeader>
                <DescriptionWrapper>
                    <Description>
                        {currentBook.volumeInfo.description ? currentBook.volumeInfo.description : 'This book has no description'}
                    </Description>
                </DescriptionWrapper>
            </ScrollView>
        )
    }
}

const mapStateToProps = state => ({
    book: state.books.selectedBook,
    loadingSelectedBook: state.books.loadingSelectedBook,
    myBooks: state.books.myBooks
})

const mapDispatchToProps = dispatch => ({
    buyBook: book => dispatch(buyBookAction(book)),
    rateBook: (book, rating) => dispatch(rateBookAction(book, rating)),
    favBook: book => dispatch(favBookAction(book))
})

export default connect(mapStateToProps, mapDispatchToProps)(Details)