import Head from 'next/Head';

import { CompletedChallenges } from "../components/completedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';
import { ChallengeBox } from "../components/ChallengeBox";

import styles from '../styles/pages/Home.module.css';


import React from "react";
import { CountdownProvider } from '../contexts/CountdownContext';

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>ínicio | Move.it</title>
      </Head>

      <ExperienceBar />

      <CountdownProvider>

      <section>
        <div>
        <Profile />
        <CompletedChallenges />
        <Countdown />
        </div>
        <div>

          <ChallengeBox />

        </div>
      </section>

      </CountdownProvider>
    </div>
  )
}
