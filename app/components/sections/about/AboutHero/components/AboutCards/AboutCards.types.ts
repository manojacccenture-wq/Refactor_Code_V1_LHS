export interface AboutCardProps {
  title: string;
  description: string;
  image: string;
  icon: string;
  index?: number; // ⚠️ added for stagger control
}