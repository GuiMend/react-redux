import React from 'react'
import styled from 'styled-components/native'

const ButtonWrapper = styled.TouchableOpacity`
    backgroundColor: #4A90E2;
    color: red;
    box-shadow: 0px 7px 15px rgba(60, 120, 191, 0.422639);
    border-radius: 100px;
    margin: 8px;
    ${props => props.big && `width: 50%;`}
`

const ButtonText = styled.Text`
    color: white;
    font-style: normal;
    font-weight: bold;
    font-size: ${props => props.big ? `16` : `13`}px;
    text-align: center;
    margin: ${props => props.big ? `10` : `8`}px;
`

const Button = ({ onPress, title, big = false }) => (
    <ButtonWrapper onPress={onPress} big={big}>
        <ButtonText big={big}>
            {title}
        </ButtonText>
    </ButtonWrapper>
)

export default Button