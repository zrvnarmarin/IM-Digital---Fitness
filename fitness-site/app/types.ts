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
