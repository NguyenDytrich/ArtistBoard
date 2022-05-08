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
        <Row>
          <Col lg={5} className="d-flex flex-column">
            <h1>Upcoming Events</h1>
            <PreviewCard
              className="mt-3"
              date={DateTime.fromObject({ year: 2022, month: 5, day: 3 })}
              title={"Oddball"}
              tagline="Capstone project"
              organizer="Dytrich Nguyen"
              url=""
            />
            <PreviewCard
              className="mt-3"
              date={DateTime.fromObject({ year: 2022, month: 5, day: 7 })}
              title={"Dance BFA"}
              organizer="Dance Department"
              url=""
            />
            <PreviewCard
              className="mt-3"
              date={DateTime.fromObject({ year: 2022, month: 5, day: 4 })}
              title={"Watch Party: Star Wars - A New Hope"}
              tagline="A very long tagline perhaps not very good"
              organizer="Luke Skywalker"
              url=""
            />
          </Col>
          <Col lg={7} style={{padding: "0 5em"}}>
            <h1>News - April 25, 2022</h1>
            <h2>Greetings Alums!</h2>
            <p>
              Welcome to our Fall 2021 Alumni Newsletter. We hope this 
              newsletter finds you well, and thriving even in this time
              of uncertainty. We launched this newsletter one year ago,
              with the hope of keeping in tough with you, our alumns.
            </p>
            <p>
              Stay connected with us by joining the LinkedIn Alumni Association page,
              creating an account with the Alumni Network Website, and making sure
              to follow the Alumni FB page. Do you have a preferred email or new mailing
              address? Update your contact information here.
            </p>
            <p>Questions or stories/updates to share? Email alumni@cornish.edu</p>
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
