import React from 'react'
import styled from 'styled-components/native'

const BookCover = styled.Image`
    width: 100px;
    height: 130px;
    margin-bottom: 30px;
    margin-left: ${props => props.firstInColumn ? 0 : 18}px;
    ${props => !props.small && `box-shadow: 0px 20px 33px rgba(184, 118, 12, 0.725119);`}
`

const Cover = ({ coverURL, ...rest }) => <BookCover {...rest} source={{ uri: coverURL }} />

export default Cover