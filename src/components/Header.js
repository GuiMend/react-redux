import React from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/FontAwesome'

const Header = styled.View`
    width: 100%;
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

const Divider = styled.View`
    width: 33%;
    border-bottom-color: #9F8B0C;
    border-bottom-width: 1;
`

const Wrapper = styled.View`
    background-color: #FFDD0D;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ListHeader = props => (
    <Wrapper>
        <Header>
            {props.details ?
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Icon name="chevron-left" size={30} color="#2C2605" />
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={() => alert('No need for drawer, your books are here')}>
                    <Icon name="bars" size={30} color="#2C2605" />
                </TouchableOpacity>
            }

            {props.search ?
                <Input placeholder='Filter' onChangeText={text => props.onChangeText(text)} value={props.searchText} />
                :
                <Title>{props.title}</Title>
            }
            {props.search ?
                <TouchableOpacity onPress={() => props.toggleSearch()} >
                    <Text>OK</Text>
                </TouchableOpacity>
                :
                props.details ? <Icon name="search" size={30} color="#9F8B0C" /> :
                    <TouchableOpacity onPress={() => props.toggleSearch()}>
                        <Icon name="search" size={30} color="#2C2605" />
                    </TouchableOpacity>
            }
        </Header>
        <Divider />
    </Wrapper>
)

export default ListHeader