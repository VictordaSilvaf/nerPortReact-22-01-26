import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <nav className="max-w-6xl mx-auto glass-panel rounded-full px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="font-bold text-xl">
          Dev<span className="text-[hsl(var(--icon-blue))]">VictorSF</span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-8">
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
            className="px-6 py-2 bg-[hsl(var(--icon-blue))] text-white rounded-full font-medium icon-float"
          >
            Contato
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-xl hover:bg-muted transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-4 right-4 mt-2 glass-panel rounded-2xl p-4 animate-fade-in">
          <div className="flex flex-col gap-4">
            <a
              href="#sobre"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-xl transition-colors"
            >
              Sobre
            </a>
            <a
              href="#projetos"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-xl transition-colors"
            >
              Projetos
            </a>
            <a
              href="#contato"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 bg-[hsl(var(--icon-blue))] text-white rounded-xl font-medium text-center"
            >
              Contato
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
