import styled from 'styled-components';

type ContainerProps = {
    bgColor: string;
}

export const Container = styled.div<ContainerProps>`
    background-color: ${props => props.bgColor};
    width: 100%;
`;

export const Paragraph = styled.p`
    color: red;
`;