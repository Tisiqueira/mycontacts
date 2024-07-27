/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable indent */
/* eslint-disable no-confusing-arrow */
// eslint-disable-next-line indent
// eslint-disable-next-line indent, implicit-arrow-linebreak
import styled from 'styled-components';

export const Overlay = styled.div`
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(7px);
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;

    display: flex;
    align-item: center;
    justify-content: center;
`;

export const Container = styled.div`
    width: auto;
    height: 25%;
    max-height: 40%;
    max-width: 450px;

    margin-top: 20%;
    background: #fff;
    border-radius: 4px;
    padding: 24px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

    h1 {
        font-size: 22px;
        // eslint-disable-next-line no-confusing-arrow
        color: ${({ theme, danger }) =>
            danger ? theme.colors.danger.main : theme.colors.dark[900]};
    }

    p {
        margin-top: 8px;
    }
`;

export const Footer = styled.footer`
    margin-top: 32px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .cancel-button {
        background: transparent;
        border: none;
        font-size: 16px;
        margin-right: 8px;
        color: ${({ theme }) => theme.colors.gray[900]};
    }
`;
