import { Form } from "react-bootstrap";

import { FieldHandler, SignupFields } from "..";

export interface PasswordFields {
  password: string;
  passwordConf: string;
}

const PasswordField: React.FC<{
  className?: string;
  mt?: string | number;
  fields: PasswordFields;
  onChange: FieldHandler<SignupFields>;
}> = ({ className, mt, fields, onChange }) => {
  return (
    <Form.Group className={`${className} mt-${mt}`}>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control
          required
          value={fields.password}
          onChange={(event) => onChange({ password: event.target.value })}
          type="password"
          placeholder="Password"
        />
      </Form.Group>
      <Form.Group className={`mt-${mt}`}>
        <Form.Label>
          Confirm Password
        </Form.Label>
        <Form.Control
          required
          value={fields.passwordConf}
          onChange={(event) => onChange({ passwordConf: event.target.value })}
          type="password"
          placeholder="Password"
        />
      </Form.Group>
    </Form.Group>
  );
};

export default PasswordField;
