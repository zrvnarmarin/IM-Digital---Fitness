import { DumbellIcon, HeartIcon } from "@/public/Icons";
import YogaImage from "../public/yoga-program.avif";

export const programs = [
  {
    title: "Cardio Blast",
    href: "/programs/cardio-blast",
    description:
      "This high-intensity cardio program is designed to improve cardiovascular fitness and burn calories.",
    price: '$130.00',
    duration: "4 weeks",
    intensity: "High",
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
    title: "Calisthenics",
    href: "/programs/calisthenics",
    description:
      "This high-intensity cardio program is designed to improve cardiovascular fitness and burn calories.",
    price: '$130.00',
    duration: "4 weeks",
    intensity: "High",
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
    price: '$130.00',
    duration: "6 weeks",
    intensity: "Moderate",
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
    title: "CrossFit ",
    href: "/programs/crossfit-challenge",
    description:
      "Engage in the ultimate fitness adventure with our CrossFit Challenge program.",
    price: '$130.00',
    keyExercises: ["Box Jumps", "Kettlebell Swings", "Rope Climbs"],
    duration: "10 weeks",
    intensity: "Very High",
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
];

export const testimonials = [
  {
    id: 1,
    testimonial:
      "I can't believe how much (ime firme) has transformed my fitness journey. The personalized approach made all the difference. The meal plans and workouts are fantastic!",
    name: "Marin Z.",
    date: "August 2023",
  },
  {
    id: 2,
    testimonial:
      "Starting with (ime firme) was the best decision I made for my health. The flexibility of the programs and the expert guidance kept me motivated. Highly recommended!",
    name: "Ana M.",
    date: "August 2023",
  },
  {
    id: 3,
    testimonial:
      "As a beginner, I was unsure where to start, but (ime firme) made it easy. The team's support and the customizable plans ensured a positive and enjoyable fitness experience.",
    name: "Ivan K.",
    date: "August 2023",
  },
  {
    id: 4,
    testimonial:
      "Communicating with the nutritionists and trainers at (ime firme) was a game-changer. Their personalized advice helped me overcome challenges and stay on track.",
    name: "Elena S.",
    date: "August 2023",
  },
  {
    id: 5,
    testimonial:
      "I appreciate how (ime firme) considers dietary restrictions. My meal plan is not only effective but also delicious. Thank you for making fitness enjoyable!",
    name: "Marko P.",
    date: "August 2023",
  },
  {
    id: 6,
    testimonial:
      "(ime firme) provides outstanding support. The community forums and regular updates kept me engaged. I achieved my goals with the help of their dedicated team.",
    name: "Sara D.",
    date: "August 2023",
  },
  {
    id: 7,
    testimonial:
      "With a busy schedule, I needed a flexible fitness program. (ime firme) tailored a plan that fits seamlessly into my life. The results speak for themselves!",
    name: "Luka B.",
    date: "August 2023",
  },
  {
    id: 8,
    testimonial:
      "I've tried many programs, but (ime firme) stands out. The holistic approach and expert guidance set it apart. I'm grateful for the positive impact on my well-being.",
    name: "Katarina R.",
    date: "August 2023",
  },
  {
    id: 9,
    testimonial:
      "Thank you, (ime firme), for the affordable and quality fitness experience. The modern equipment and reasonable prices made it easy for me to stay committed.",
    name: "Nikola J.",
    date: "August 2023",
  },
  {
    id: 10,
    testimonial:
      "(ime firme) is a game-changer! The personalized solutions and commitment to success make it the go-to fitness program. I'm thrilled with the results.",
    name: "Tamara S.",
    date: "August 2023",
  },
];

export const services = [
  {
    id: 1,
    type: "Standard Plan",
    calls: "Calls Once a month",
    cost: "$125/month",
    details:
      "The Standard plan includes one (1) live video chat or phone call each month to review your next workout plan and answer any questions.",
    program:
      "Includes highly custom workouts, nutrition coaching, and direct connection with your personal coach with unlimited text messaging right through the Forge mobile app. The only difference between each program is the number of private coaching sessions with your personal trainer.",
    mealPlan:
      "After you enroll, you will choose between one of four meal plan paths: Balanced, lactose-free, gluten-free, or vegetarian. Your coach will teach you how to best integrate them into your lifestyle and add variety as you go. Meal plans are calorie-appropriate and based on a macro ratio of 40% carbohydrates, 30% protein, and 30% fat with a variance of 15-20%.",
    joinNow: "JOIN NOW",
  },
  {
    id: 2,
    type: "Complete Plan",
    calls: "Calls Twice a month",
    cost: "$175/month",
    details:
      "The Complete plan includes two (2) live video or phone coaching calls each month for even more support and inspiration.",
    program:
      "The Complete plan is ideal for individuals seeking more coaching and accountability than in the Standard Plan with double the video or phone chat sessions each month plus unlimited in-app messaging.",
    mealPlan:
      "After you enroll, you will choose between one of four meal plan paths: Balanced, lactose-free, gluten-free, or vegetarian. Your coach will teach you how to best integrate them into your lifestyle and add variety as you go. Meal plans are calorie-appropriate and based on a macro ratio of 40% carbohydrates, 30% protein, and 30% fat with a variance of 15-20%.",
    joinNow: "JOIN NOW",
  },
  {
    id: 3,
    type: "Premium Plan",
    calls: "Calls Once a week",
    cost: "$225/month",
    details:
      "With Premium, you get one (1) live video or phone coaching session each week with your trainer to keep you on track and help you make a sustainable lifestyle improvement.",
    program:
      "With the Premium plan, get the optimal level of personal coaching and accountability from your online personal trainer. Learn to build better habits and improve food relationships with weekly check-in calls and unlimited in-app messaging.",
    mealPlan:
      "After you enroll, you will choose between one of four meal plan paths: Balanced, lactose-free, gluten-free, or vegetarian. Your coach will teach you how to best integrate them into your lifestyle and add variety as you go. Meal plans are calorie appropriate and based on a macro ratio of 40% carbohydrates, 30% protein, and 30% fat with a variance of 15-20%.",
    joinNow: "JOIN NOW",
  },
];
