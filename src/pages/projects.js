import QuadraKcomponent from "../components/projects/QuadraK";
import Bosques from "../components/projects/Bosques";
import Solos from "../components/projects/Solos";
import Ricaldone from "../components/projects/Ricaldone";
import { section } from "framer-motion/client";

export default function Projects() {
  return (
    <section>
      <QuadraKcomponent />
      <Bosques />
      <Solos />
      <Ricaldone />
    </section>

  );
}
