"use client";
import { Contact } from "./contact";
import About from "./about";
import Projects from "./projects";
import { Provider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import Header from "./header";
import Blogs from "./blog";
import Skills from "./skills";
import { ParallaxProvider } from "react-scroll-parallax";

export default function Home() {
  return (
    <Provider>
      <div className="flex top-1 sticky">
        <Header />
      </div>
      <div className="grid grid-cols-2 justify-center items-start">
        <div className="sticky top-20 m-10">
          <Contact />
        </div>
        <div className="mr-10 py-10">
          <About />
          <ParallaxProvider>
            <Skills />
          </ParallaxProvider>
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
