
import Button from "@/app/components/ui/Button";
import clsx from "clsx";

type CTASectionProps = {
  title: string;
  buttonText: string;
  onClick?: () => void;
  className?: string;
};

export default function CTASection({
  title,
  buttonText,
  onClick,
  className,
}: CTASectionProps) {
  return (
    <section className={clsx("w-full px-4 py-8 md:px-6", className)}>
      
      <div
        className="
          max-w-6xl mx-auto
          rounded-2xl md:rounded-3xl
          px-4 py-8 md:px-12 md:py-14
          flex flex-col md:flex-row
          items-start md:items-center
          justify-between gap-6
        bg-primary-gradient

          shadow-lg
        "
      >
        {/* TEXT */}
        <h2 className="max-w-2xl text-neutral-200 leading-tight  font-bold">
          {title}
        </h2>

        {/* BUTTON */}
        <Button
          variant="secondary"
          onClick={onClick}
     
        >
          {buttonText}
        </Button>
      </div>

    </section>
  );
}