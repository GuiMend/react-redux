import React from 'react'
import { connect } from 'react-redux'
import { View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styled from 'styled-components/native'
import Button from '../components/Button'
import { Cover } from '../components/Book'

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


const Details = ({ book, loadingSelectedBook }) => (loadingSelectedBook
    ?
    <View><Description>Loading...</Description></View>
    :
    (<View>
        <BookHeader>
            <CoverInfo>
                <Cover coverURL={book.volumeInfo.imageLinks.smallThumbnail} />
                <GrayText>{book.volumeInfo.pageCount}</GrayText>
            </CoverInfo>
            <AdditionalInfo>
                <Title>
                    {book.volumeInfo.title}
                </Title>
                {book.volumeInfo.authors && <GrayText>by: {book.volumeInfo.authors.join(', ')}</GrayText>}
                {book.saleInfo.saleability === 'NOT_FOR_SALE' ?
                    <NotForSale>Not for sale</NotForSale> :
                    <Sale>
                        <Price>$9.99</Price>
                        <Icon name="star" size={20} color="#2C2605" />
                    </Sale>}
                <Actions>
                    <Button
                        disabled={book.saleInfo.saleability === 'NOT_FOR_SALE'}
                        title="BUY" />
                    <TouchableOpacity onPress={() => alert('I love you 2! <3')}>
                        <Icon backgroundColor='#DC4B5D' borderRadius={50} iconStyle={{ marginRight: 0, color: 'white' }} name="heart" size={20} color="#2C2605" />
                    </TouchableOpacity>
                </Actions>
            </AdditionalInfo>
        </BookHeader>
        <DescriptionWrapper>
            <Description>
                {book.volumeInfo.description ? book.volumeInfo.description : 'This book has no description'}
            </Description>
        </DescriptionWrapper>
    </View>)

)

const mapStateToProps = state => ({
    book: state.books.selectedBook,
    loadingSelectedBook: state.books.loadingSelectedBook
})

export default connect(mapStateToProps)(Details)