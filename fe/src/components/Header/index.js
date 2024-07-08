import { Container, InputSearchContainer } from './style';
import logo from '../../assets/images/logo.svg';

export default function Header() {
    return (
        <Container>
            <img src={logo} alt="MyContacts" width="201" />

            <InputSearchContainer>
                <input type="text" placeholder="Pesquisar contato" />
            </InputSearchContainer>
        </Container>
    );
}
