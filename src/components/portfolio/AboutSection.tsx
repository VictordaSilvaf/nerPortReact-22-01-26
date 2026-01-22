import { Code2, Palette, Globe, Smartphone } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Desenvolvimento Web",
    description:
      "Criação de aplicações web utilizando React, TypeScript, Node.js e tecnologias modernas.",
    color: "bg-[hsl(var(--icon-purple))]",
  },
  {
    icon: Smartphone,
    title: "Desenvolvimento Mobile",
    description:
      "Desenvolvimento de aplicativos iOS e Android com React Native.",
    color: "bg-[hsl(var(--icon-blue))]",
  },
  {
    icon: Globe,
    title: "Web Applications",
    description:
      "Aplicações web modernas, responsivas e otimizadas para performance e escalabilidade.",
    color: "bg-[hsl(var(--icon-teal))]",
  },
  {
    icon: Palette,
    title: "Mobile First",
    description:
      "Interfaces responsivas pensadas desde o mobile, garantindo ótima experiência em qualquer dispositivo.",
    color: "bg-[hsl(var(--icon-orange))]",
  },
];

export const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre Mim</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Com mais de 5 anos de experiência, transformo ideias em produtos
            digitais que encantam usuários e geram resultados.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="glass-panel rounded-3xl p-6 card-hover cursor-pointer select-none"
            >
              <div
                className={`w-14 h-14 ${skill.color} rounded-2xl flex items-center justify-center mb-4`}
              >
                <skill.icon size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-muted-foreground">{skill.description}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { value: "50+", label: "Projetos" },
            { value: "30+", label: "Clientes" },
            { value: "5+", label: "Anos Exp." },
            { value: "100%", label: "Dedicação" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 glass-panel rounded-2xl card-hover select-none cursor-pointer"
            >
              <div className="text-3xl md:text-4xl font-bold text-[hsl(var(--icon-blue))]">
                {stat.value}
              </div>
              <div className="text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
