import Image from "next/image";
import styles from "../styles/Home.module.css";

import { getAuth, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Button } from "react-bootstrap";
import TopNav from "../components/form/nav/TopNav";
import { useAuthOrRedirect } from "../utils/hooks";

const Home: React.FC = () => {

  const ready = useAuthOrRedirect();

  return !ready ? null : (
    <Fragment>
      <TopNav />
      <div className={styles.container}>
        <main>
          <div>
            <p>Some content</p>
          </div>
        </main>
        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
      </div>
    </Fragment>
  );
};

export default Home;
