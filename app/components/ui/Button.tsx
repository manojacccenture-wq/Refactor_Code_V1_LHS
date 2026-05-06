import clsx from "clsx";
import Link from "next/link";

type ButtonProps = {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "outline" | "ghost" | "product-ghost";
    size?: "sm" | "md" | "lg";
    disabled?: boolean;
    className?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    href?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  className,
  leftIcon,
  rightIcon,
  href,
  ...props
}: ButtonProps) {
  const btnClasses = clsx(
    "btn",
    `btn-${variant}`,
    `btn-${size}`,
    "inline-flex items-center gap-2",
    disabled && "btn-disabled",
    className
  );

  if (href) {
    return (
      <Link href={href} className={btnClasses}>
        {leftIcon && <span className="flex items-center">{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span className="flex items-center">{rightIcon}</span>}
      </Link>
    );
  }

  return (
    <button
      className={btnClasses}
      disabled={disabled}
      {...props}
    >
      {leftIcon && <span className="flex items-center">{leftIcon}</span>}

      <span>{children}</span>

      {rightIcon && <span className="flex items-center">{rightIcon}</span>}
    </button>
  );
}