import { Form } from "react-bootstrap";
import { FieldHandler, SignupFields } from "..";

const PronounField: React.FC<{
  value: string;
  className?: string;
  onChange: FieldHandler<SignupFields>;
}> = ({ value, onChange, className }) => {
  return (
    <Form.Group className={className}>
      <Form.Label>Pronouns</Form.Label>
      <Form.Control
        required
        value={value}
        onChange={(event) => onChange({ pronouns: event.target.value })}
        type="text"
        placeholder="they/them"
      />
    </Form.Group>
  );
};

export default PronounField;
