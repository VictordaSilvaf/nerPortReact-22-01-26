import { FloatingIcon } from "./FloatingIcon";
import {
  Palette,
  Code2,
  Briefcase,
  Mail,
  Zap,
  Heart,
  type LucideIcon,
} from "lucide-react";

const cards: {
  align?: "justify-end" | "justify-start";
  label?: string;
  icon: LucideIcon;
  iconColor?: string;
  colorClass: string;
}[] = [
  {
    align: "justify-start",
    label: "Design",
    icon: Palette,
    colorClass: "bg-[hsl(var(--icon-blue))]",
  },
  {
    icon: Zap,
    colorClass: "bg-[hsl(var(--icon-green))]",
  },
  {
    align: "justify-start",
    label: "Frontend",
    icon: Code2,
    colorClass: "bg-[hsl(var(--icon-purple))]",
  },
  {
    icon: Heart,
    colorClass: "bg-[hsl(var(--icon-red))]",
  },
  {
    align: "justify-start",
    label: "Backend",
    icon: Briefcase,
    colorClass: "bg-[hsl(var(--icon-yellow))]",
  },
  {
    align: "justify-end",
    label: "Projects",
    icon: Code2,
    iconColor: "text-black",
    colorClass: "bg-[hsl(var(--icon-white))]",
  },
  {
    align: "justify-start",
    label: "Contact",
    icon: Mail,
    colorClass: "bg-[hsl(var(--icon-green))]",
  },
  {
    align: "justify-end",
    label: "Skills",
    icon: Zap,
    iconColor: "text-black",
    colorClass: "bg-[hsl(var(--icon-white))]",
  },
];

export const HeroSection = () => {
  const currentDate = new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen max-w-7xl mx-auto flex justify-center items-end relative">
      <div className="absolute top-28 left-5 text-sm text-foreground/60">
        <p className="uppercase font-medium text-zinc-800">{currentDate}</p>
      </div>

      <div className="flex items-center justify-center px-4 py-5 relative">
        <div className="w-230 h-180 grid grid-cols-2 grid-rows-4 z-10">
          {cards.map((card, index) => {
            const isLeft = index % 2 === 0;
            const row = Math.floor(index / 2);

            const sideOffset = row === 0 || row === 3 ? 130 : 50;

            return (
              <div
                key={index}
                style={{
                  paddingLeft: isLeft ? sideOffset : 0,
                  paddingRight: !isLeft ? sideOffset : 0,
                }}
                className={`
                  relative
                  w-full
                  h-full
                  flex
                  items-center
                  ${card.align}
                `}
              >
                {card.label && (
                  <FloatingIcon
                    icon={card.icon}
                    label={card.label}
                    colorClass={card.colorClass}
                    size="md"
                    iconColor={card.iconColor ?? null}
                  />
                )}
              </div>
            );
          })}
        </div>
        <div className="bg-zinc-800 w-112.5 h-112.5 rounded-full absolute z-0 shadow-2xl"></div>
        <div className="absolute w-112.5 h-112.5 right-0 pl-30 mb-10 z-0">
          <h1 className="font-black text-4xl">Prazer, Victor</h1>
          <p className="mt-2 font-normal">Desenvolvedor FULLSTACK</p>
        </div>
      </div>
    </div>
  );
};
