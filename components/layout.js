import Navbar from "@components/navbar";
import Head from "next/head";

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/icon/logo.ico" />
        <title>{title.toUpperCase()}</title>
      </Head>
      <Navbar />
      {children}
    </>
  );
}
