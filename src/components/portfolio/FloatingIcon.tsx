import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface FloatingIconProps {
  icon: LucideIcon;
  label: string;
  colorClass: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  iconColor: string | null;
}

const sizeClasses = {
  sm: "w-12 h-12 text-xs",
  md: "w-16 h-16 text-sm",
  lg: "w-20 h-20 text-base",
};

const iconSizes = {
  sm: 18,
  md: 24,
  lg: 28,
};

export const FloatingIcon = ({
  icon: Icon,
  label,
  colorClass,
  className,
  size = "md",
  iconColor,
}: FloatingIconProps) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-2 icon-float group shadow-none! relative z-10",
        className,
      )}
    >
      <div
        className={cn(
          "rounded-2xl flex items-center justify-center shadow-lg",
          sizeClasses[size],
          colorClass,
        )}
      >
        <Icon size={iconSizes[size]} className={iconColor ?? "text-white"} />
      </div>
      <span className="font-medium text-foreground/80 group-hover:text-foreground transition-colors">
        {label}
      </span>
    </div>
  );
};
