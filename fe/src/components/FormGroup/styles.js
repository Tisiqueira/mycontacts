import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;

    & + & {
        margin-top: 16px;
    }

    small {
        color: ${({ theme }) => theme.colors.danger.main};
        font-size: 12px;
        display: block;
        margin-top: 8px;
    }
`;
