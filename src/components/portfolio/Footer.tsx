import { Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo/Name */}
          <div className="font-bold text-xl">
            Dev<span className="text-[hsl(var(--icon-blue))]">VictorSF</span>
          </div>

          {/* Navigation */}
          <nav className="flex gap-6">
            <a
              href="#sobre"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Sobre
            </a>
            <a
              href="#projetos"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Projetos
            </a>
            <a
              href="#contato"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contato
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Feito com{" "}
            <Heart size={14} className="text-[hsl(var(--icon-pink))]" /> ©{" "}
            {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};
