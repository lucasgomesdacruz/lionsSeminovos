import Hero  from "@/components/Hero";
import Support from "@/components/Support";
import Benefits from "@/components/Benefits";
import BenefitsTwo from "@/components/BenefitsTwo";
import Categories from "@/components/Categories";
import Footer from "@/components/Footer";

import styles from "./styles.module.scss";

export default function Home() {

  return (
      <main className={styles.main}>
          <Hero />
          <Benefits />
          <Support />
          <BenefitsTwo />
          <Categories />
          <Footer />
      </main>
  );
}
