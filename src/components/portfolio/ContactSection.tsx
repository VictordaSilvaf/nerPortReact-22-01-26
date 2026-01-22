import {
  Mail,
  MapPin,
  Phone,
  Send,
  Linkedin,
  Github,
  Twitter,
  Instagram,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const ContactSection = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("access_key", "00481a33-5c02-4bfc-a737-058845bce1a8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      toast.success("Mensagem enviada com sucesso!");
      setResult("Mensagem enviada com sucesso!");
    } else {
      setResult("Error");
    }
  };

  return (
    <section id="contato" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vamos Conversar?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Estou sempre aberto a novas oportunidades e parcerias. Entre em
            contato!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-8">
            <div className="glass-panel rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-6">
                Informações de Contato
              </h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[hsl(var(--icon-blue))] rounded-xl flex items-center justify-center">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">
                      victordasilvafernandes@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[hsl(var(--icon-purple))] rounded-xl flex items-center justify-center">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Telefone</p>
                    <p className="font-medium">+55 (11) 96911-5001</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[hsl(var(--icon-teal))] rounded-xl flex items-center justify-center">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Localização</p>
                    <p className="font-medium">São Paulo, Brasil</p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">
                  Redes Sociais
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/victordasilvafernandes/"
                    target="_blank"
                    className="w-12 h-12 glass-panel rounded-xl flex items-center justify-center hover:bg-[hsl(var(--icon-blue))] hover:text-white transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://github.com/VictordaSilvaf"
                    target="_blank"
                    className="w-12 h-12 glass-panel rounded-xl flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://www.instagram.com/eu.victordev/"
                    target="_blank"
                    className="w-12 h-12 glass-panel rounded-xl flex items-center justify-center hover:bg-pink-700 hover:text-white transition-colors"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="glass-panel rounded-3xl p-8">
            <h3 className="text-xl font-semibold mb-6">Envie uma Mensagem</h3>

            <form onSubmit={onSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Nome</label>
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="w-full px-4 py-3 placeholder-gray-400 rounded-xl bg-background border border-border focus:border-[hsl(var(--icon-blue))] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Seu email"
                  className="w-full px-4 py-3 placeholder-gray-400 rounded-xl bg-background border border-border focus:border-[hsl(var(--icon-blue))] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Mensagem
                </label>
                <textarea
                  rows={4}
                  placeholder="Como posso ajudar?"
                  className="w-full px-4 py-3 placeholder-gray-400 rounded-xl bg-background border border-border focus:border-[hsl(var(--icon-blue))] focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[hsl(var(--icon-blue))] text-white rounded-xl font-medium flex items-center justify-center gap-2 icon-float"
              >
                <Send size={18} />
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
