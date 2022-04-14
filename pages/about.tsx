import { Col, Row } from "react-bootstrap";
import BaseLayout from "../components/form/BaseLayout";

const About: React.FC = () => {
  return (
    <BaseLayout>
      <Row className="justify-content-center">
        <Col sm={8} md={7}>
          <h1>About ArtistBoard</h1>
          <p>
            Hi! I'm Dytrich, the creator of ArtistBoard. I created this website
            in lieu of a good way for visual &amp; performing arts students to
            collaborate and share information about their events.
          </p>
        </Col>
      </Row>
    </BaseLayout>
  );
};

export default About;
