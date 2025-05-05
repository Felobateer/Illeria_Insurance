import styles from "./styles";
import Hero from "./components/hero";
import ServiceRow from "./components/service-row";
import About from "./components/about";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServiceRow />
      <About />
    </main>
  );
}
