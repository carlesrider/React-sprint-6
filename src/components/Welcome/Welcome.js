import { Welcome } from './Welcome.styled';
import Button from '../Button/Button';

const MyWelcome = (props) => (
    <Welcome>
        <h1>{props.text}</h1>
        <Button onClick={props.onClick} text={props.buttonText} />
    </Welcome>
)
export default MyWelcome;
