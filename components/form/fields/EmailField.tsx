import { Form } from "react-bootstrap";
import { FieldHandler, SignupFields } from "..";

const EmailField: React.FC<{
  value: string;
  className?: string;
  onChange: FieldHandler<SignupFields>;
}> = ({ value, onChange, className }) => {
  return (
    <Form.Group className={className}>
      <Form.Label>Email</Form.Label>
      <Form.Control
        required
        value={value}
        onChange={(event) => onChange({ email: event.target.value })}
        type="email"
        placeholder="your@email.com"
      />
    </Form.Group>
  );
};

export default EmailField;
