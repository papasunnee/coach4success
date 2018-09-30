import Link from "next/link";
import Head from "next/head";
import "../style/style.scss";
import Header from "./Header";

export default ({ children, title = "" }) => (
  <div>
    <Head>
      <title>{title} :: Coach4Success</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <link
        rel="stylesheet"
        type="text/css"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,600,700"
        rel="stylesheet"
      />
    </Head>
    <header>
      <Header />
    </header>

    {children}

    <footer>{"I`m here to stay"}</footer>
  </div>
);
