import { FormEventHandler } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import {
  ValidationState,
  LoginFields,
  FieldHandler,
} from "../../components/form";

const LoginForm: React.FC<{
  className: string;
  validation: ValidationState<LoginFields>;
  value: LoginFields;
  onChange: FieldHandler<LoginFields>;
  onSubmit: FormEventHandler<HTMLFormElement>;
  loading?: boolean;
}> = ({ className, loading, onSubmit, onChange, value, validation }) => {
  return (
    <Form noValidate className={className} onSubmit={onSubmit}>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          className={validation.email ? "is-invalid" : ""}
          value={value.email}
          onChange={(event) => onChange({ email: event.target.value })}
          type="email"
          placeholder="your@email.com"
        />
        <div className="invalid-feedback">{validation.email}</div>
      </Form.Group>
      <Form.Group className="pt-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          className={validation.password ? "is-invalid" : ""}
          value={value.password}
          onChange={(event) => onChange({ password: event.target.value })}
          type="password"
          placeholder="Password"
        />
        <div
          className={`invalid-feedback ${
            validation.password && validation.password.length > 25
              ? "text-end"
              : ""
          }`}
        >
          {validation.password}
        </div>
      </Form.Group>
      <div className="text-end">
        <small>
          <a href="_blank">Reset password</a>
        </small>
      </div>
      <Form.Group className="d-flex justify-content-center pt-3">
        <Button disabled={loading} type="submit" className="w-100">
          {loading ? <Spinner animation="border" /> : "Login"}
        </Button>
      </Form.Group>
    </Form>
  );
};

export default LoginForm;
