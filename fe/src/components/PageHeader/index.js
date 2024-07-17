import { Link } from 'react-router-dom';

import arrow from '../../assets/images/icons/arrow.svg';

import { Container } from './styles';

export default function PageHeader() {
    return (
        <Container>
            <Link to="/">
                <img src={arrow} alt="Back" />
                <span>Voltar</span>
            </Link>
            <h1>Novo contato</h1>
        </Container>
    );
}
