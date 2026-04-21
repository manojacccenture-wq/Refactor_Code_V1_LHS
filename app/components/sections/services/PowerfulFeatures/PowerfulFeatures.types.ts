export interface Tab {
  id: string;
  label: string;
  icon: string;
  description?: string;
}

export interface TabContent {
  badge: string;
  title: string;
  description: string;
  differencePoints: DifferencePoint[];
  features: {
    title: string;
    description: string;
  }[];
}



type DifferencePoint = {
  number: string;
  title: string;
  description: string;
};

export interface Feature {
  title: string;
  description: string;
};

export interface Props {

  badge: string;
  title: string;
  description: string;
  differencePoints: DifferencePoint[];
  features: Feature[];
};
