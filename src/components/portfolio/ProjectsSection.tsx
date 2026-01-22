import { projects } from "@/data/projects";
import { ExternalLink, Github } from "lucide-react";

export const ProjectsSection = () => {
  return (
    <section id="projetos" className="py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meus Projetos</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Uma seleção dos meus trabalhos mais recentes e impactantes.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card rounded-3xl overflow-hidden card-hover border border-border cursor-pointer select-none"
            >
              {/* Project image placeholder with gradient */}
              <div
                className={`h-48 bg-linear-to-br ${project.color} flex items-center justify-center`}
              >
                <div className="w-16 h-16 bg-white/20 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                  <span className="text-3xl text-white font-bold">
                    {project.title.charAt(0)}
                  </span>
                </div>
              </div>

              {/* Project info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-[hsl(var(--icon-blue))] transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors icon-float">
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </button>
                  <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors icon-float">
                    <Github size={16} />
                    <span>Código</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
