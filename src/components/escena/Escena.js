import { Escena } from './Escena.styled';

const MyEscena = (props) => (
    <Escena>
        <img className={'background ' + props.className} src={props.src} alt=""/>
        <p className={props.className}>
            {props.text}
        </p>
    </Escena>
)
export default MyEscena;
