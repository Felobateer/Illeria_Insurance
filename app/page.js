import styles from "./styles";
import Hero from "./components/hero";
import ServiceRow from "./components/service-row";
import About from "./components/about";
import GetInTouch from "./components/get-in-touch";
import InsurersAndJoin from "./components/insurers-join";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServiceRow />
      <About />
      <GetInTouch />
      <InsurersAndJoin />
    </main>
  );
}
