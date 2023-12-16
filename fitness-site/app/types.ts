export type Program = {
  title: string;
  href: string;
  description: string;
  keyExercises?: string[];
  keyPoses?: string[];
  buttonText: string;
  duration?: string;
  intensity?: string;
  icon: () => JSX.Element;
  image: any;
};

export type Service = {
  id: number;
  type: string;
  calls: string;
  cost: string;
  details: string;
  program: string;
  mealPlan: string;
};

export type NavbarLink = {
  name: string;
  link: string;
};

