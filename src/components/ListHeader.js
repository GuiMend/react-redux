import React from 'react'
import { TouchableOpacity, TextInput, Button } from 'react-native'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/FontAwesome'

const Header = styled.View`
    background-color: #FFDD0D;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 32px 16px 10px;
    height: 90px;
`

const Title = styled.Text`
    font-size: 20px;
`

const Text = styled.Text`
    color: #2C2605;
    font-size: 20px;
`

const Input = styled.TextInput`
    height: 40px;
    flex-grow: 1;
    margin: 0 32px;
    font-size: 20px;
`

const ListHeader = props => (
    <Header>
        <TouchableOpacity onPress={() => alert('No need for drawer, your books are here')}>
            <Icon name="bars" size={30} color="#2C2605" />
        </TouchableOpacity>
        {props.search ?
            <Input placeholder='Search' onChangeText={text => props.onChangeText(text)} value={props.searchText} />
            :
            <Title>{props.title}</Title>
        }
        {props.search ?
            <TouchableOpacity onPress={() => props.toggleSearch()} >
                <Text>OK</Text>
            </TouchableOpacity>
            :
            <TouchableOpacity>
                <Icon name="search" size={30} color="#2C2605" onPress={() => props.toggleSearch()} />
            </TouchableOpacity>}
    </Header>
)

export default ListHeader