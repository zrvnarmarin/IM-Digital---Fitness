import { StaticImageData } from "next/image";

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

export type InstructorType = {
  imageSrc: StaticImageData;
  id: number;
  href: string;
  name: string;
  gender: string;
  certifications: string[];
  experience: number;
  specializations: string[];
  availability: {
    date: string;
    training: {
      id: number;
      hours: string;
      trainingType: string;
    }[];
  }[];
  description: string;
};

export type LocationType = {
  href: string;
  id: number;
  locationName: string;
  locationCity: string;
  address: string;
  workingHours: string[];
  email: string;
  imageCardSrc: StaticImageData;
  imagesSrc: StaticImageData[]
}