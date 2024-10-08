import { Blogs as P } from "@/lib/blogs";
import Image from "next/image";

export default function Blogs() {
    return (
    <div className="flex flex-col m-4 md:flex-row" id="blogs">
      <ol>
        {P.map((project) => (
          <li key={project.title} className="h-auto w-auto my-5 justify-center items-center">
            <div className="flex flex-row">
              <div className="justify-center items-center m-1 h-7 w-24">
                <Image src={project.image} alt={project.title} width={400} height={200} unoptimized className="h-12 w-auto" />
              </div>
              <div className="mx-2">
                <a href={project.link} className="secondary">{project.title}</a>
                <p className="h-auto w-auto">{project.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
    )
}