import { DumbellIcon, HeartIcon,  } from "@/public/Icons";
import YogaImage from '../public/yoga-program.avif'

export const programs = [
    {
      title: "Cardio Blast",
      href: "/programs/cardio-blast",
      description:
        "This high-intensity cardio program is designed to improve cardiovascular fitness and burn calories.",
      keyExercises: ["Running", "Cycling", "Jump Rope"],
      buttonText: "Start Program",
      duration: "4 weeks",
      intensity: "High",
      icon: HeartIcon,
      image: YogaImage,
      keyPoses: ["Cardio Pose 1", "Cardio Pose 2"],
      benefits: [
        "Improved cardiovascular health",
        "Calorie burning",
        "Enhanced endurance",
      ],
    },
    {
      title: "Strength Builder",
      href: "/programs/strength-builder",
      description:
        "Embark on a transformative journey to build robust strength and lean muscle with the best Strenght plan. ",
      keyExercises: ["Squats", "Deadlifts", "Bench Press"],
      buttonText: "Start Program",
      duration: "6 weeks",
      intensity: "Moderate",
      icon: DumbellIcon,
      image: YogaImage,
      keyPoses: ["Strength Pose 1", "Strength Pose 2"],
      benefits: [
        "Increased muscle strength",
        "Muscle definition",
        "Improved functional strength",
      ],
    },
    {
      title: "CrossFit Challenge",
      href: "/programs/crossfit-challenge",
      description:
        "Engage in the ultimate fitness adventure with our CrossFit Challenge program. ",
      keyExercises: ["Box Jumps", "Kettlebell Swings", "Rope Climbs"],
      buttonText: "Start Program",
      duration: "10 weeks",
      intensity: "Very High",
      icon: HeartIcon,
      image: YogaImage,
      keyPoses: ["CrossFit Pose 1", "CrossFit Pose 2"],
      benefits: [
        "Improved agility",
        "Enhanced strength",
        "Overall fitness advancement",
      ],
    },
    {
      title: "Yoga and Meditation",
      href: "/programs/yoga-and-meditation",
      description:
        "Discover harmony and flexibility through our Yoga and Meditation program. ",
      keyPoses: ["Sun Salutations", "Warrior Series", "Balancing Poses"],
      buttonText: "Start Program",
      duration: "8 weeks",
      intensity: "Low",
      icon: DumbellIcon,
      image: YogaImage,
      keyExercises: ["Yoga Pose 1", "Yoga Pose 2"],
      benefits: [
        "Increased flexibility",
        "Stress relief",
        "Mind-body connection",
      ],
    },
  ];
  