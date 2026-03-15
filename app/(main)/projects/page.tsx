import Image from "next/image";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="px-6 py-12 lg:px-10">
      <section>
        <h1 className="text-4xl font-semibold tracking-tight">Projects</h1>
        <p className="mt-3 max-w-2xl text-neutral-600 dark:text-neutral-300">
          A deeper look at selected projects across full-stack development,
          AI-powered applications, and product-focused engineering.
        </p>
      </section>

      <section className="pt-10">
        <div className="space-y-10">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-3xl border border-neutral-200 
                bg-white shadow-sm transition hover:shadow-lg 
                dark:border-neutral-800 dark:bg-neutral-900"
            >
              <div 
                className="grid grid-cols-1 lg:grid-cols-[320px_minmax(0,1fr)]"
              >
                <div className="relative min-h-[220px] lg:min-h-full">
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain"
                    />
                  )}
                </div>

                <div className="p-6 lg:p-8">
                  <div className="flex h-full flex-col">
                    <div>
                      <h2 className="text-2xl font-semibold tracking-tight">
                        {project.title}
                      </h2>

                      <p className="mt-4 max-w-2xl text-sm leading-7 
                        text-neutral-600 dark:text-neutral-300">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <img
                          key={t.name}
                          src={t.badge}
                          alt={t.name}
                          className="h-6 transition-transform hover:scale-105"
                        />
                      ))}
                    </div>

                    <div className="mt-6">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block rounded-lg border 
                        border-neutral-300 px-4 py-2 text-sm font-medium 
                        transition hover:bg-neutral-100 dark:border-neutral-700 
                        dark:hover:bg-neutral-800"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}