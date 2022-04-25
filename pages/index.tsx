import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useAuthOrRedirect } from "../utils/hooks";
import BaseLayout from "../components/form/BaseLayout";
import { Card, Col, Row } from "react-bootstrap";
import Script from "next/script";
import PreviewCard from "../components/calendar/event/PreviewCard";
import { DateTime } from "luxon";

const Home: React.FC = () => {
  const ready = useAuthOrRedirect();

  return !ready ? null : (
    <>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/holder/2.9.8/holder.js" />
      <BaseLayout>
        <h1>Upcoming Events</h1>
        <Row lg={3} className="gx-2 align-items-stretch">
          <Col>
            <PreviewCard
              className="h-100"
              date={DateTime.fromObject({ year: 2022, month: 5, day: 3 })}
              title={"Oddball"}
              tagline="Capstone project"
              organizer="Dytrich Nguyen"
              url=""
            />
          </Col>
          <Col>
            <PreviewCard
              className="h-100"
              date={DateTime.fromObject({ year: 2022, month: 5, day: 7 })}
              title={"Dance BFA"}
              organizer="Dance Department"
              url=""
            />
          </Col>
          <Col>
            <PreviewCard
              className="h-100"
              date={DateTime.fromObject({ year: 2022, month: 5, day: 4 })}
              title={"Watch Party: Star Wars - A New Hope"}
              tagline="A very long tagline perhaps not very good"
              organizer="Luke Skywalker"
              url=""
            />
          </Col>
        </Row>
        <h1>Collab Postings</h1>
        <Row lg={3}>
          <Col>
            <Card>
              <Card.Body>
                <h3>Looking for Designer</h3>
                <p>
                  Looking for a designer to help my website look really good!
                </p>
              </Card.Body>
              <Card.Footer>Posted April 27th, 22</Card.Footer>
            </Card>
          </Col>
        </Row>
        <h1>Find Collaborators</h1>
        <Row lg={3}>
          <Col>
            <Card>
              <Card.Body>
                <h3>Guitarist</h3>
              </Card.Body>
              <Card.Footer>Posted April 27th, 22</Card.Footer>
            </Card>
          </Col>
        </Row>
      </BaseLayout>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  );
};

export default Home;
