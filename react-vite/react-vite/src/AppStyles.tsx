import styled from 'styled-components';

type ContainerProps = {
    bgColor: string;
}

export const Container = styled.div<ContainerProps>`
    background-color: ${props => props.bgColor};
    width: 100%;

    span {
        font-weight: bold;
        color: aquamarine;

        .link {
            color: white;

            &:hover {
                color: black;
            }
        }
    }


    @media (max-width: 600px) {
        background-color: pink;
    }
`;

export const Paragraph = styled.p`
    color: red;
`;