import { Form } from "react-bootstrap";

import { FieldHandler, SignupFields } from "..";

export interface NameFields {
  firstName: string;
  lastName: string;
};

const NameField: React.FC<{
  className?: string;
  fields: NameFields;
  onChange: FieldHandler<SignupFields>;
}> = ({ className, fields, onChange }) => {
  return (
    <Form.Group className={className}>
      <Form.Label>Name</Form.Label>
      <div className="input-group">
        <Form.Control
          required
          value={fields.firstName}
          onChange={(event) => onChange({ firstName: event.target.value })}
          type="text"
          placeholder="First"
        />
        <Form.Control
          required
          value={fields.lastName}
          onChange={(event) => onChange({ lastName: event.target.value })}
          type="text"
          placeholder="Last"
        />
      </div>
    </Form.Group>
  );
};

export default NameField;
