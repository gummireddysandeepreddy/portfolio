import Image from "next/image";
import { Contact } from "./contact";
import About from "./about";
import Projects from "./projects";

export default function Home() {
  return (
    <div className="grid grid-cols-2 justify-center items-start">
      <div className="sticky top-20 m-10">
        <Contact />
      </div>
      <div className="overflow-auto mr-10 pr-10 my-10 py-10">
        <About />
        <Projects />
      </div>
    </div>
  );
}
