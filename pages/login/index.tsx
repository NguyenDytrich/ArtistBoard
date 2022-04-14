import Link from "next/link";
import { FormEvent, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import LoginForm from "./LoginForm";
import { ValidationState, LoginFields } from "../../components/form";
import { useRouter } from "next/router";

const LoginPage: React.FC = () => {
  const [formFields, setFormFields] = useState<LoginFields>({
    email: "",
    password: "",
  });

  const [validation, setValidation] = useState<ValidationState<LoginFields>>({
    validated: false,
  });

  const [loading, setLoading] = useState(false);

  const auth = getAuth();
  const router = useRouter();

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();

    let errs: Partial<LoginFields> = {};

    if (!formFields.email)
      errs = { ...errs, email: "Please enter a valid email address." };
    if (!formFields.password)
      errs = { ...errs, password: "Please enter a password." };
    if (errs.email || errs.password) {
      setValidation({
        ...errs,
        validated: true,
      });
      return;
    }

    try {
      await signInWithEmailAndPassword(
        auth,
        formFields.email,
        formFields.password
      );
      router.push("/");
    } catch (e: unknown) {
      switch (e.code) {
        case "auth/invalid-email":
          errs = { ...errs, email: "Please enter a valid email address." };
          break;
        case "auth/user-not-found":
          errs = { ...errs, email: "Account does not exist for this email." };
          break;
        case "auth/wrong-password":
          errs = { ...errs, password: "Incorrect password." };
          break;
        case "auth/too-many-requests":
          errs = { ...errs, password: "Too many incorrect attempts. Reset your password, or try again later." };
        default:
          console.error(e.code);
          break;
      }
      setValidation({
        ...errs,
        validated: true,
      });
    }
  };

  const onChange = (value: Partial<LoginFields>) =>
    setFormFields({ ...formFields, ...value });

  return (
    <Container>
      <Row className="justify-content-center">
        <Col className="pt-5" lg={5} md={8}>
          <h2 className="pb-0 mb-0">Welcome to ArtistBoard</h2>
          <span className="text-muted">login to continue</span>
          <LoginForm
            validation={validation}
            value={formFields}
            className="pt-3"
            onChange={onChange}
            onSubmit={onSubmit}
            loading={loading}
          />
        </Col>
      </Row>
      <Row className="justify-content-center pt-3">
        <span className="text-center text-muted fs-6">
          Don't have an account?{" "}
          <Link href="/signup">
            <a>Create an account here.</a>
          </Link>
        </span>
      </Row>
    </Container>
  );
};

export default LoginPage;
