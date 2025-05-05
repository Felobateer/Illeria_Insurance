import styles from "./styles";
import Hero from "./components/hero";
import ServiceRow from "./components/service-row";
import About from "./components/about";
import GetInTouch from "./components/get-in-touch";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServiceRow />
      <About />
      <GetInTouch />
    </main>
  );
}
