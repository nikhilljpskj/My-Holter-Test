import { AnchorHTMLAttributes, ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";

type Variant = "primary" | "secondary" | "outline" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-sky-600 text-white shadow-soft hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-lift",
  secondary:
    "bg-rose-600 text-white shadow-soft hover:-translate-y-0.5 hover:bg-rose-700 hover:shadow-lift",
  outline:
    "border border-slate-200 bg-white text-slate-900 hover:-translate-y-0.5 hover:border-sky-200 hover:bg-sky-50",
  ghost: "text-slate-700 hover:bg-slate-100",
};

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500";

type ButtonLinkProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
} & (
  | ({ to: string } & Omit<LinkProps, "to">)
  | ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
);

export function ButtonLink({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonLinkProps) {
  const classes = `${base} ${styles[variant]} ${className}`;

  if ("to" in props) {
    return (
      <Link className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a className={classes} {...props}>
      {children}
    </a>
  );
}
