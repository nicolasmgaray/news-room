import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();
  const { query, route } = router;

  const links = [
    { to: "/categories/[id]", catId: 1, title: "POLITICA" },
    { to: "/categories/[id]", catId: 2, title: "INTERNACIONAL" },
    { to: "/categories/[id]", catId: 5, title: "DEPORTES" },
    { to: "/categories/[id]", catId: 3, title: "TECNOLOGÍA" },
    { to: "/categories/[id]", catId: 4, title: "ESPECTACULOS" },
  ];

  return (
    <header>
      <div className="logo">
        <FontAwesomeIcon icon={faBullhorn} />
        <span> NEWSROOM</span>
      </div>
      <nav>
        <Link href={"/"}>
          <a className={"/" === route ? "active" : null}>HOME</a>
        </Link>
        {links.map((x) => (
          <Link href={x.to} as={`/categories/${x.catId}`}>
            <a
              className={
                x.to === route && query.id == x.catId ? "active" : null
              }
            >
              {x.title}
            </a>
          </Link>
        ))}
      </nav>
      <style jsx>{`
        header {
          font-size: 0.2rem;
          background: #222;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          width: 100%;
          padding: 1em;
          flex-wrap: wrap;
          position: sticky;
          top: 0;
          border-bottom: 0.1em solid var(--color-secundario);
        }

        .logo {
          font-weight: bold;
          font-size: 1.5em;
          background: var(--color-acento);
          font-family: "Raleway", sans-serif;
          border-radius: 10em;
          justify-content: center;
          align-items: center;
          padding: 1em 3em;
          margin: 3em;
          color: #222;
          display: flex;
          justify-content: space-around;
          align-items: center;
         
        }

        nav {
          font-size: 0.8em;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          flex-wrap: wrap;
          width: 100%;
          padding: 1em;
          justify-content: center;
          align-items: center;
          flex: 1 0 30em;
        }

        nav a {
          text-decoration: none;
          color: white;
          margin: 1em;
        }

        .active {
          border-bottom: 0.2em solid var(--color-acento);
          font-weight: bold;
        }
      `}</style>
    </header>
  );
};

export default NavBar;
