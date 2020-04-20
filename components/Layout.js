import NavBar from "./NavBar";
import Head from "next/head";

const Layout = (props) => (
  <div className="app-container">
    <Head>
      <title>News Room</title>
      <link rel="icon" href="/favicon.ico" />
      <link type="text/css" rel="stylesheet" href="/nprogress.css" />
      <script
        src="https://kit.fontawesome.com/c0b4aec906.js"
        crossorigin="anonymous"
      ></script>
      <script type="text/javascript" src="/nprogress.js"></script>
    </Head>
    <NavBar />
    {props.children}

    <style jsx>{`
      .app-container {
        min-height: 100vh;
        padding: 0;
        height: auto;
        width: 100%;
        background-color: #f9f9f9;
        background-image: url("data:image/svg+xml,%3Csvg width='8' height='8' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%233fc1ec' fill-opacity='0.19' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
      }
    `}</style>
    <style jsx global>{`
      @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@900&display=swap");

      :root {
        --color-acento: #3fc1ec;
        --color-secundario: rgb(82, 82, 82);
        font-size: calc(0.5em + 1vw);
        font-size: 16px;
      }

      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
      @media (max-width: 700px) {
        :root {
          font-size: 12px;
        }
      }
    `}</style>
  </div>
);

export default Layout;
