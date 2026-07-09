import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className={styles.intro}>
          <h1>CI/CD Demo with GitHub Actions</h1>
          <p>
            This is a simple Next.js project created to demonstrate a full CI/CD
            workflow using GitHub Actions.
          </p>
          <p>
            Our hosting platform is GitHub Pages, where each change is built and
            deployed automatically through the GitHub Actions pipeline.
          </p>
         <p>
            Our hosting platform is GitHub Pages, where each change is built and
            deployed automatically through the GitHub Actions pipeline.
          </p>
        </div>
       
      </main>
    </div>
  );
}
