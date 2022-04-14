import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SignupForm from "./SignupForm";
import { SignupFields } from "../../components/form";
import { useRouter } from "next/router";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useUnauthOrRedirect } from "../../utils/hooks";

const SignupPage: React.FC = () => {
  const [formFields, setFormFields] = useState<SignupFields>({
    firstName: "",
    lastName: "",
    pronouns: "",
    email: "",
    studentId: "",
    password: "",
    passwordConf: "",
    graduationYear: "",
    program: "",
  });

  const [validated, setValidated] = useState(false);
  const ready = useUnauthOrRedirect();

  const handleChange = (values: Partial<SignupFields>) => {
    setFormFields({
      ...formFields,
      ...values,
    });
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    setValidated(true);
    if (form.checkValidity()) {
      console.debug("Signup");
    } else {
      console.debug("Form errors");
    }
  };

  return !ready ? null : (
    <Container>
      <Row className="justify-content-center">
        <Col className="pt-5" lg={5} md={8}>
          <div className="d-flex justify-content-between align-items-baseline">
            <h2 className="pb-0 mb-0">Signup</h2>
          </div>
          <SignupForm
            validated={validated}
            className="pt-3"
            fields={formFields}
            onChange={handleChange}
            onSubmit={submit}
          />
        </Col>
      </Row>
      <Row className="justify-content-center mt-3">
        <span className="text-center text-muted fs-6">
          Already have an account?{" "}
          <Link href="/login">
            <a>Login in here.</a>
          </Link>
        </span>
      </Row>
    </Container>
  );
};

export default SignupPage;
