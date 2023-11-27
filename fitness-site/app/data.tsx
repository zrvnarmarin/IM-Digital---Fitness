import { DumbellIcon, HeartIcon } from "@/public/Icons";
import YogaImage from "../public/yoga-program.avif";

export const programs = [
  {
    title: "Cardio Blast",
    href: "/programs/cardio-blast",
    description:
      "This high-intensity cardio program is designed to improve cardiovascular fitness and burn calories.",
    duration: "4 weeks",
    intensity: "High",
    icon: HeartIcon,
    image: YogaImage,
    benefits: [
      "Improved cardiovascular health",
      "Calorie burning",
      "Enhanced endurance",
    ],
    categories: [
      {
        name: "High-Intensity Cardio",
        description:
          "Designed to elevate heart rate and improve cardiovascular fitness.",
      },
      {
        name: "Aerobic Exercises",
        description:
          "Includes activities like running, cycling, and jump rope for sustained endurance.",
      },
    ],
  },
  {
    title: "Strength Builder",
    href: "/programs/strength-builder",
    description:
      "Embark on a transformative journey to build robust strength and lean muscle with the best Strength plan.",
    duration: "6 weeks",
    intensity: "Moderate",
    icon: DumbellIcon,
    image: YogaImage,
    benefits: [
      "Increased muscle strength",
      "Muscle definition",
      "Improved functional strength",
    ],
    categories: [
      {
        name: "Strength Training",
        description:
          "Focuses on resistance exercises to build muscle and strength.",
      },
      {
        name: "Compound Movements",
        description:
          "Incorporates multi-joint exercises like squats, deadlifts, and bench press.",
      },
    ],
  },
  {
    title: "CrossFit Challenge",
    href: "/programs/crossfit-challenge",
    description:
      "Engage in the ultimate fitness adventure with our CrossFit Challenge program.",
    keyExercises: ["Box Jumps", "Kettlebell Swings", "Rope Climbs"],
    duration: "10 weeks",
    intensity: "Very High",
    icon: HeartIcon,
    image: YogaImage,
    benefits: [
      "Improved agility",
      "Enhanced strength",
      "Overall fitness advancement",
    ],
    categories: [
      {
        name: "High-Intensity Interval Training (HIIT)",
        description:
          "Short, intense bursts of exercise followed by brief rest periods.",
      },
      {
        name: "Olympic Weightlifting",
        description:
          "Focuses on complex lifts like the snatch and clean and jerk.",
      },
      {
        name: "Gymnastics",
        description:
          "Incorporates bodyweight exercises like pull-ups and handstands.",
      },
      {
        name: "Functional Movements",
        description:
          "Emphasizes natural, multi-joint movements for improved functionality.",
      },
    ],
  },
  {
    title: "Yoga Practices",
    href: "/programs/yoga-practices",
    description: "Discover harmony and flexibility through our Yoga program. ",
    duration: "8 weeks",
    intensity: "Low",
    icon: DumbellIcon,
    image: YogaImage,
    benefits: [
      "Flexibility: Improves range of motion and reduces stiffness.",
      "Strength: Engages various muscle groups, promoting overall body strength.",
      "Balance: Enhances stability and core strength through balancing poses.",
      "Stress Reduction: Incorporates mindfulness and relaxation techniques.",
    ],
    categories: [
      {
        name: "Hatha Yoga",
        description: "Focuses on physical postures and breathing exercises.",
      },
      {
        name: "Vinyasa Yoga",
        description: "Emphasizes flowing movements synchronized with breath.",
      },
      {
        name: "Ashtanga Yoga",
        description:
          "Follows a set sequence of postures with a focus on breath and movement.",
      },
      {
        name: "Bikram Yoga",
        description:
          "Practiced in a heated room, consists of a fixed sequence of 26 postures.",
      },
      {
        name: "Yin Yoga",
        description:
          "Involves passive, long-held poses to target connective tissues.",
      },
      {
        name: "Kundalini Yoga",
        description:
          "Aims to awaken spiritual energy through breath, mantra, and postures.",
      },
    ],
  },
];
