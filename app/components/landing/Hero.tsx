import React from "react";

import Button from "~/components/ui/Button";

import styles from "./hero.module.css";

function Hero() {
    return(
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.heroLeft}>
                    <p className={styles.subHeading}>Take control of your Parkinson&apos;s</p>
                    <h1 className={styles.textHeading}>
                        <p className={styles.textHeadingTop}>Symptom tracking </p>
                        <p className={styles.textHeadingBottom}>designed just for you.</p>
                    </h1>
                    <p className={styles.textDesc}>
                        Parkinson’s Pulse is an innovative symptom tracker and care tool for Parkinson’s
                        patients, giving patients and caregivers a new way to access symptom insights and deliver tailored care.
                    </p>
                    <div className={styles.buttons}>
                        <Button variant="primary" as="a" href="/auth/signup">Get started now</Button>
                        <Button variant="tertiary"  as="a" href="/learn">Learn more about Parkinson&apos;s Pulse</Button>
                    </div>
                </div>
                <div className={styles.heroRight}>
                    <div className={styles.imageBox}>
                        <img className={styles.image} alt="A stylised rendition of the dashboard UI." src="/landing_hero1.webp"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
