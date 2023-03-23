import { Button } from './Button.styled';

const MyButton = (props) => (
    <Button onClick={props.onClick} disabled={props.disabled}>
        {props.text}
    </Button>
)
export default MyButton;
