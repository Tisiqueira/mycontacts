import { Link } from 'react-router-dom';

// eslint-disable-next-line object-curly-newline
import {
    Container,
    InputSearchContainer,
    Header,
    ListContainer,
    Card,
} from './styles';

import Modal from '../../components/Modal';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function ContactsList() {
    return (
        <Container>
            <Modal danger />
            <InputSearchContainer>
                <input type="text" placeholder="Pesquisar contato" />
            </InputSearchContainer>

            <Header>
                <strong>3 contatos</strong>
                <Link to="/new">Novo contato</Link>
            </Header>

            <ListContainer>
                <header>
                    <button type="button">
                        <span>Nome</span>
                        <img src={arrow} alt="Arrow" />
                    </button>
                </header>

                <Card>
                    <div className="info">
                        <div className="contact-name">
                            <strong>Tiago Alves</strong>
                            <small>instagram</small>
                        </div>
                        <span>tiago.siqueira@outlook.com</span>
                        <span>(11) 99999-9999</span>
                    </div>

                    <div className="actions">
                        <Link to="/edit/1234">
                            <img src={edit} alt="Edit" />
                        </Link>
                        <button type="button">
                            <img src={trash} alt="Trash" />
                        </button>
                    </div>
                </Card>
            </ListContainer>
        </Container>
    );
}
