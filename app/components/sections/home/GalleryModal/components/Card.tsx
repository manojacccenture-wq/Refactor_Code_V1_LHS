import FeatureCard from "@/app/components/ui/FeatureCard";
import { slides } from "@/app/components/sections/home/GalleryModal/data/slides.data";
import { Icon } from "@/app/components/sections/home/GalleryModal/components/Icon";

export const Card = ({
  slide,
  children,
}: {
  slide: (typeof slides)[number];
  children?: React.ReactNode;
}) => {

  return (
    <FeatureCard
      variant={slide.variant}
      title={slide.title}
      description={slide.description}
      icon={<Icon />}
    >
      {children}
    </FeatureCard>
  );
};