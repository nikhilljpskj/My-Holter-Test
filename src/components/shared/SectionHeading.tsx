import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  description,
  centered = true,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl mb-12 md:mb-16",
        centered && "mx-auto text-center",
        className
      )}
    >
      {badge && (
        <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4 tracking-wide uppercase">
          {badge}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
