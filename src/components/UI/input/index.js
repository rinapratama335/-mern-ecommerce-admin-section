import { Form } from "react-bootstrap";

const Input = (props) => {
  return (
    <Form.Group>
      <Form.Control
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
      <Form.Text className="text-muted">{props.errorMessage}</Form.Text>
    </Form.Group>
  );
};

export default Input;
