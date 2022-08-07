import Image from "next/image";
import styles from "../styles/Home.module.css";
import Mycarousel from "../components/home/Mycarousel";
import Link from "next/link";
import SomeContents from "../components/home/SomeContents";
import React, { useEffect } from "react";

export default function Home({ setCurrent }) {
  useEffect(() => {
    setCurrent("home");
  }, []);
  return (
    <div className={styles.container}>
      <Mycarousel />

      <main className={styles.main}>
        <SomeContents />

        <div className={styles.grid}>
          <Link href="/donate" passHref>
            <div className={styles.card}>
              <h2>Donate &rarr;</h2>
              <p>
                Help innovators and problem-solvers in their daring journey.
              </p>
            </div>
          </Link>

          <Link href="/make_request" className={styles.card} passHref>
            <div className={styles.card}>
              <h2>Request &rarr;</h2>
              <p>
                Have an idea? But, lack of funds! No worries. Make a request.
              </p>
            </div>
          </Link>

          <Link href="/donate" className={styles.card} passHref>
            <div className={styles.card}>
              <h2>Join the community &rarr;</h2>
              <p>
                Just donate 5 ethers and join the community by becoming a voter.
              </p>
            </div>
          </Link>
          <Link href="/about" className={styles.card} passHref>
            <div className={styles.card}>
              <h2>About us &rarr;</h2>
              <p>
                Want to know more about our community before joining. Great,
                visit here.
              </p>
            </div>
          </Link>

          <Link href="/requests" className={styles.card} passHref>
            <div className={styles.card}>
              <h2>See requests &rarr;</h2>
              <p>To view requests made by the community members, visit here.</p>
            </div>
          </Link>
          <Link href="/" className={styles.card} passHref>
            <div className={styles.card}>
              <h2>Stay anonymous &rarr;</h2>
              <p>
                Donate and make request both with your identity and also
                anonymously.
              </p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
