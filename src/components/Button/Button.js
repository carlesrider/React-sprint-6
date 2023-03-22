import { Button } from './Button.styled';

const MyButton = (props) => (
    <Button onClick={props.onClick}>
        {props.text}
    </Button>
)
export default MyButton;
