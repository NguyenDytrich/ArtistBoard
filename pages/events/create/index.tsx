import { EditorState } from "draft-js";
import { getAuth } from "firebase/auth";
// import dynamic from "next/dynamic";
import { useState } from "react";
import {
  Badge,
  Button,
  ButtonGroup,
  Card,
  Col,
  Form,
  InputGroup,
  ListGroup,
  Row,
} from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  AttendanceOption,
  CalendarEventFormFields,
  EventPublishState,
} from "../../../components/calendar";
import { FieldHandler } from "../../../components/form";
import BaseLayout from "../../../components/form/BaseLayout";
import DateTimeField from "../../../components/form/DateTimeField";

// TODO (Dytrich): Wait or create custom WYSIWYG
// const Editor = dynamic(() => import("../../../components/form/Editor"), {
//   ssr: false,
// });

const CreateEventForm: React.FC = () => {
  // const [editorState, setEditorState] = useState(() =>
  //   EditorState.createEmpty()
  // );
  const auth = getAuth();
  const [user, laoding, error] = useAuthState(auth);

  const [fieldState, setFieldState] = useState<CalendarEventFormFields>({
    title: "",
    creator: user?.displayName || "",
    description: "",
    publishState: EventPublishState.DRAFT,
    start: new Date(),
    end: new Date(),
    tzinfo: "",
    rsvpForLocation: false,
    attendanceOption: AttendanceOption.IN_PERSON,
    location: "",
    eventUrl: "",
    infoUrl: "",
  });

  const onChange: FieldHandler<CalendarEventFormFields> = (values) => {
    setFieldState({ ...fieldState, ...values });
  };

  return (
    <BaseLayout>
      <Form>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <div className="d-flex">
              <h1>Create a new event </h1>
              <h5>
                <Badge
                  className="position-relative ms-3"
                  style={{ top: "0.75rem" }}
                >
                  draft
                </Badge>
              </h5>
            </div>
            {/* TODO: cover image */}
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                value={fieldState.title}
                onChange={(event) => onChange({ title: event.target.value })}
                type="text"
                placeholder="An Amazing Thing!"
              />
            </Form.Group>
            <Form.Group className="mt-2">
                <DateTimeField />
            </Form.Group>
            <Form.Group className="mt-2">
              <div>
                <Form.Check
                  checked={
                    fieldState.attendanceOption == AttendanceOption.IN_PERSON
                  }
                  onChange={() =>
                    onChange({ attendanceOption: AttendanceOption.IN_PERSON })
                  }
                  label="In-Person"
                  type="radio"
                  inline
                />
                <Form.Check
                  checked={
                    fieldState.attendanceOption == AttendanceOption.ONLINE
                  }
                  onChange={() =>
                    onChange({ attendanceOption: AttendanceOption.ONLINE })
                  }
                  label="Online"
                  type="radio"
                  inline
                />
                <Form.Check
                  checked={
                    fieldState.attendanceOption == AttendanceOption.HYBRID
                  }
                  onChange={() =>
                    onChange({ attendanceOption: AttendanceOption.HYBRID })
                  }
                  label="Hybrid"
                  type="radio"
                  inline
                />
              </div>
              <Form.Label>Venue</Form.Label>
              <Form.Control
                disabled={
                  fieldState.rsvpForLocation ||
                  fieldState.attendanceOption == AttendanceOption.ONLINE
                }
                type="text"
              />
              <div className="mt-1">
                <Form.Check
                  checked={fieldState.rsvpForLocation}
                  onChange={() =>
                    onChange({
                      rsvpForLocation: fieldState.rsvpForLocation
                        ? false
                        : true,
                    })
                  }
                  label="RSVP for location"
                  inline
                />
              </div>
            </Form.Group>
            {/* TODO: WYSIWYG in place of text input for Description */}
            <Form.Group className="mt-2">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group className="mt-2">
              <Form.Label>
                Event Website <small className="text-muted">(optional)</small>
              </Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mt-2">
              <Form.Label>Tags</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
          {/* TODO (Dytrich): not necessary for MVP
          <Col lg={4}>
              <h1>&#8205;</h1>
            <Form.Group>
              <Form.Label>Organizer</Form.Label>
              <div
                className="d-flex align-items-baseline"
                style={{ fontSize: "0.95em" }}
              >
                <span className="me-2">
                  Spam Musubi <small className="text-muted ms-1">(you)</small>
                </span>
                <Button size="sm" variant="link">
                  edit
                </Button>
              </div>
            </Form.Group>
            <Form.Group className="mt-3">
              <div className="d-flex align-items-baseline">
                <span>Participants</span>
                <Button size="sm" variant="link">
                  add
                </Button>
              </div>
              <ListGroup variant="flush" style={{ fontSize: "0.95em" }}>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <span>
                        Spam Musubi <small className="text-muted">(you)</small>
                      </span>
                    </Col>
                    <Col className="d-flex justify-content-end">
                      <Button size="sm" variant="link">
                        edit
                      </Button>
                      <Button size="sm" variant="link">
                        remove
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <span>Lisa Simpson</span>
                    </Col>
                    <Col className="d-flex justify-content-end">
                      <Button size="sm" variant="link">
                        edit
                      </Button>
                      <Button size="sm" variant="link">
                        remove
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            </Form.Group>
            <Form.Group className="mt-3 d-flex align-items-baseline">
              <span className="me-2">Editors</span>
              <Button size="sm" variant="link">
                add
              </Button>
            </Form.Group>
          </Col>
        */}
        </Row>
        <Row>
          <Form.Group className="d-flex justify-content-end mt-3">
            <Button className="me-auto btn-secondary">Cancel</Button>
            <Button className="me-1">Save Draft</Button>
            <Button className="ms-1">Submit</Button>
          </Form.Group>
        </Row>
      </Form>
    </BaseLayout>
  );
};

export default CreateEventForm;
