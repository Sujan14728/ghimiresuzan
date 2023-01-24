import styles from "@/styles/Navbar.module.css";
import Link from "next/link";
const NavBar = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.wrapper}>
        <ul>
          <li>
            <Link href="/">
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link href="/blogs">
              <span>Blogs</span>
            </Link>
          </li>
          <li>
            <Link href="/sports">
              <span>Sports</span>
            </Link>
            <ul>
              <li>
                <Link href="#">Football</Link>
                <ul>
                  <li>
                    <Link href="#">Tables</Link>
                    <ul>
                      <li>
                        <Link href="/sports/football/tables/pl">
                          Premier League
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/project">
              <span>Project</span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
