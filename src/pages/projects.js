import Newsletter from "../components/Newsletter";
import QuadraKcomponent from "../components/projects/QuadraK";
import Bosques from "../components/projects/Bosques";
import Solos from "../components/projects/Solos";
import Ricaldone from "../components/projects/Ricaldone";

export default function Projects() {
  return (
    <section>
      <QuadraKcomponent />
      <Bosques />
      <Solos />
      <Ricaldone />
      <Newsletter />
    </section>
  );
}
