"use client";
import { Contact } from "./contact";
import About from "./about";
import Projects from "./projects";
import { Provider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import Header from "./header";
import Blogs from "./blog";
import Skills from "./skills";

export default function Home() {
  return (
    <Provider>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-start">
        <div className="lg:sticky lg:top-10 m-10 justify-center items-center">
          <Header />
          <Contact />
        </div>
        <div className="mx-10 py-10">
          <div className="font-bold text-2xl lg:hidden">About</div>
          <About />
          <div className="font-bold text-2xl lg:hidden">Skills</div>
          <Skills />
          <div className="font-bold text-2xl">Projects</div>
          <Projects />
          <div className="font-bold text-2xl">Blogs</div>
          <Blogs />
        </div>
      </div>
      <Toaster richColors position="bottom-center" />
    </Provider>
  );
}
