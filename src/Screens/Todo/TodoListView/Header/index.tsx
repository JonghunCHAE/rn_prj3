import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
    height: 40px;
    justify-content: center;
    align-items: center;
`;

const TitleLabel = Styled.Text`
    font-size: 24px;
    font-weight: bold;
`;

interface Props {}

const Header = ({ }: Props) => {
    return (
        <Container>
            <TitleLabel>할 일 목록 어플리케이션</TitleLabel>
        </Container>
    );
};

export default Header;