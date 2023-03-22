import { Escena } from './Escena.styled';

const MyEscena = (props) => (
    <Escena className={props.className}>
        {props.text}
    </Escena>
)
export default MyEscena;
