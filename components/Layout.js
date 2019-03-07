import Head from "next/head";
import Footer from "../components/Footer";
import Header from "./Header";
import "../style/style.scss";

export default ({ children, title = "Home" }) => (
  <div>
    <Head>
      <title> Coach4Success :: {title} </title>
    </Head>
    <Header />
    {children}
    <Footer />
  </div>
);
