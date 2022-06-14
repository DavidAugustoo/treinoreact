import styled from 'styled-components';

type ButtonProps = {
    bg: string;
    small?: boolean;
}

export const Button = styled.button<ButtonProps>`
    background-color: ${props => props.bg};
    color: white;
    font-size: ${props => props.small ? '15px' : '30px'};
`;