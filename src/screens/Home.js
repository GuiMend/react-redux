import React from 'react'
import styled from 'styled-components/native'
import Button from '../components/Button'
import Content from '../components/Content'

const Logo = styled.Image`
    width: 100%;
    margin-bottom: 36px;
`
const Title = styled.Text`
    padding: 30px 20px;
    text-align: center;
    font-size: 20px;
`

const Subtitle = styled.Text`
    padding: 8px 0;
    text-align: center;
    font-size: 14px;
`

const Wrapper = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 36px;
    left: 0;
    right: 0;
`

const Home = props =>
    <Content>
        <Logo
            source={require('../img/logo.png')}
        />
        <Title>Welcome to the best book listing app in the world!</Title>
        <Wrapper>
            <Button onPress={() => props.navigation.navigate('List')} title="Let's go!" />
            <Subtitle>Click the button to start your quest for the perfect book</Subtitle>
        </Wrapper>
    </Content>

export default Home