import Head from "next/head";
import styles from './MainLayout.module.css';
import { NavBar } from "../NavBar";
import { FC,PropsWithChildren } from "react";

export const MainLayout: FC<PropsWithChildren>  = ({children}) => {
  return (
    <>
      <Head>
        <title>Page</title>
        <meta name="description" content="Home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className={styles.main}>
        {children}
      </main>
    </>
  );
};

