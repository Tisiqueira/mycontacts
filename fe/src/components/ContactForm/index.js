/* eslint-disable react/jsx-indent-props */
import PropTypes from 'prop-types';

import { Form, ButtonContainer } from './styles';
import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

export default function ContactForm({ buttonLabel }) {
    return (
        <Form>
            <FormGroup>
                <Input placeholder="Nome" />
            </FormGroup>
            <FormGroup
                error="O formato do e-mail é inválido"
            >
                <Input placeholder="Email" error />
            </FormGroup>
            <FormGroup>
                <Input placeholder="Telefone" />
            </FormGroup>

            <FormGroup>
                <Select>
                    <option value="instagram">Instagram</option>
                </Select>
            </FormGroup>

            <FormGroup>
                <ButtonContainer>
                    <Button type="submit">{buttonLabel}</Button>
                </ButtonContainer>
            </FormGroup>
        </Form>
    );
}

ContactForm.propTypes = {
    buttonLabel: PropTypes.string.isRequired,
};
