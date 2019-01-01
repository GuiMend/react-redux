import React from 'react'
import styled from 'styled-components/native'

const ButtonWrapper = styled.TouchableOpacity`
    backgroundColor: ${props => props.disabled ? 'gray' : '#4A90E2'};
    color: red;
    box-shadow: 0px 7px 15px rgba(60, 120, 191, 0.422639);
    border-radius: 100px;
    margin: 8px;
    width: 50%;
`

const ButtonText = styled.Text`
    color: ${props => props.disabled ? 'lightgray' : 'white'};
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    text-align: center;
    margin: 10px;
`

const Button = ({ onPress, title, disabled }) => (
    <ButtonWrapper onPress={onPress} disabled={disabled} >
        <ButtonText disabled={disabled}>
            {title}
        </ButtonText>
    </ButtonWrapper>
)

export default Button