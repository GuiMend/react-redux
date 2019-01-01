import React from 'react'
import styled from 'styled-components/native'

const BookCover = styled.Image`
    width: ${props => props.small ? 100 : 120}px;
    height: ${props => props.small ? 130 : 150}px;
    margin-bottom: 30px;
    margin-left: ${props => props.lastInColumn ? 0 : 18}px;
    ${props => !props.small && `box-shadow: 0px 20px 33px rgba(184, 118, 12, 0.725119);`}
`

const Cover = ({ coverURL, ...rest }) => <BookCover {...rest} source={{ uri: coverURL }} />

export default Cover