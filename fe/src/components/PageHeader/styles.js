import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 24px;

    a {
        text-decoration: none;
        display: flex;
        align-items: center;
        width: 50%;
        span {
            color: ${({ theme }) => theme.colors.primary.main};
            font-weight: bold;
        }

        img {
            margin-right: 8px;
            transform: rotate(-90deg);
        }
    }
    h1 {
        font-size: 24px;
        width: 50%;
    }
`;
