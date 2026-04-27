import { ReactNode } from "react";

type SectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  align?: "left" | "center";
};

export function Section({
  eyebrow,
  title,
  description,
  children,
  className = "",
  align = "center",
}: SectionProps) {
  return (
    <section className={`section ${className}`}>
      <div className="container">
        <div
          className={`section-heading reveal ${
            align === "center" ? "mx-auto text-center" : ""
          }`}
        >
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h2>{title}</h2>
          {description ? <p>{description}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
