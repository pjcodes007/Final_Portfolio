import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import {projects} from './Project'
import { ProgressBar } from "./ProgressBar";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="w-full min-h-screen z-10 flex flex-col items-center pb-50 s">
      <h1 className="text-4xl font-bold text-white mb-16 text-center">
        Projects
      </h1>

      <div className="flex flex-col gap-30 w-full items-center">
        {projects.map((project, index) => {
          const [ref, inView] = useInView({
            triggerOnce: false,
            threshold: 1,
          });

          useEffect(() => {
            if (inView) {
              setActiveIndex(index);
            }
          }, [inView, index]);

          return (
            <div
              key={project.id}
              ref={ref}
              className="w-full max-w-7xl flex justify-center"
            >
              <ProjectCard
                project={project}
                isActive={index === activeIndex}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
