import styled from 'styled-components';

export const Overlay = styled.div`
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blue(7px);
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
    width: 100%;
    height: 50%;
    max-width: 450px;
    background: #fff;
    padding: 24px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
`;
