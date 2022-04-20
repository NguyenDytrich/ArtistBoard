import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useAuthOrRedirect } from "../utils/hooks";
import BaseLayout from "../components/form/BaseLayout";
import { CalendarWeek } from "../components/calendar";
import { Row } from "react-bootstrap";

const Home: React.FC = () => {
  const ready = useAuthOrRedirect();

  return !ready ? null : (
    <>
      <BaseLayout>
        <Row>
          <CalendarWeek startDate={new Date()}/>
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
