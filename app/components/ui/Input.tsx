"use client";

import clsx from "clsx";

type InputProps = {
  label?: string;
  error?: string;
  textarea?: boolean;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function Input({
  label,
  error,
  textarea = false,
  className,
  ...props
}: InputProps) {
  const baseClasses = clsx(
    "w-full border border-neutral-300 rounded-xl",
    "px-3 md:px-4 py-2 md:py-3",
    "text-body-md",
    "bg-[var(--color-neutral-100)]",
    "focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-1)] focus:border-transparent",
    "transition",
    error && "border-red-500",
    className
  );

  return (
    <div>
      {/* LABEL */}
      {label && (
        <label className="block text-heading-sm text-neutral-800 mb-2">
          {label}
        </label>
      )}

      {/* INPUT / TEXTAREA */}
      {textarea ? (
        <textarea
          className={clsx(baseClasses, "resize-none")}
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          className={baseClasses}
          {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
        />
      )}

      {/* ERROR */}
      {error && (
        <p className="text-body-sm text-red-500 mt-1">
          {error}
        </p>
      )}
    </div>
  );
}