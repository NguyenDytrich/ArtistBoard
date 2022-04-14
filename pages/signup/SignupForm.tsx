import { FormEventHandler } from "react";
import { Button, Form } from "react-bootstrap";
import { FieldHandler, SignupFields } from "../../components/form";

import EmailField from "../../components/form/fields/EmailField";
import NameField from "../../components/form/fields/NameField";
import PasswordField from "../../components/form/fields/PasswordField";
import ProgramField from "../../components/form/fields/ProgramField";
import PronounField from "../../components/form/fields/PronounField";

const SignupForm: React.FC<{
  className?: string;
  validated: boolean;
  fields: SignupFields;
  onChange: FieldHandler<SignupFields>;
  onSubmit: FormEventHandler<HTMLFormElement>;
}> = ({ validated, className, fields, onChange, onSubmit }) => {
  return (
    <Form
      noValidate
      validated={validated}
      className={className}
      onSubmit={onSubmit}
    >
      <Form.Group className="d-flex">
        <NameField
          className="flex-grow-1"
          fields={fields}
          onChange={onChange}
        />
        <PronounField
          className="ms-3 col-4"
          value={fields.pronouns}
          onChange={onChange}
        />
      </Form.Group>
      <ProgramField className="mt-2" fields={fields} onChange={onChange} />
      <Form.Group className="d-flex mt-2">
        <EmailField
          className="flex-grow-1"
          value={fields.email}
          onChange={onChange}
        />
      </Form.Group>
      <PasswordField fields={fields} onChange={onChange} mt={2} />
      <Button className="w-100 mt-4" type="submit">
        Done
      </Button>
    </Form>
  );
};

export default SignupForm;
