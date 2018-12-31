import React, { Component } from 'react'
import styled from 'styled-components/native'
import { Text } from 'react-native'
import ListHeader from '../components/ListHeader'

const Wrapper = styled.View`
    margin: 16px;
`

class List extends Component {
    state = {
        searchText: '',
        title: 'Design Books',
        search: false,
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
        this.props.navigation.setParams({
            toggleSearch: this.toggleSearch,
            onChangeText: this.onChangeText,
            ...this.state
        })
    }

    render() {
        return (
            <Wrapper>
                <Text>Lists!</Text>
            </Wrapper>
        )
    }
}

export default List