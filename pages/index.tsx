import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import { AnimatePresence, motion as m } from 'framer-motion';
import { useEffect, useState } from 'react';
import AnimatedCounterExample from '../components/AnimatedCounterExample';

const Home: NextPage = () => {
    const showLogs = () => {
        console.log('Hello World');
    };
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(counter + 1);
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, [counter]);
    return (
        <div className={(styles.container, '')}>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to <a href="https://nextjs.org">Next.js!</a>
                </h1>
                <div className="my-10">
                    <AnimatedCounterExample counter={counter} />
                </div>

                <button onClick={showLogs}>Show Logs</button>
            </main>

            <footer
                className={
                    (styles.footer,
                    'bg-light-3 py-10 text-center absolute bottom-0 right-1 w-full')
                }
            >
                this is a footer
            </footer>
        </div>
    );
};

export default Home;
