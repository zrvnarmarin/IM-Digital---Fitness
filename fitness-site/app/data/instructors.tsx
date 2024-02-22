import InstructorJohnDoe from '../../public/images/instructors/instructor1.png'
import InstructorJaneSmith from '../../public/images/instructors/instructor2.png'
import InstructorMichaelJohnson from '../../public/images/instructors/instructor3.png'
import InstructorEmilyBrown from '../../public/images/instructors/instructor4.png'
import InstructorChristopherLee from '../../public/images/instructors/instructor5.png'
import InstructorSophiaNguyen from '../../public/images/instructors/instructor6.png'
import InstructorDavidWilson from '../../public/images/instructors/instructor7.png'
import { InstructorType } from '../types'

export const instructors: InstructorType[] = [
    {
      id: 1,
      name: "John Doe",
      imageSrc: InstructorJohnDoe,
      gender: "Male",
      certifications: ["PTC", "GEIC"],
      experience: 5,
      specializations: ["Strength Training", "HIIT"],
      availability: ["Monday 5-9pm", "Wednesday 9am-12pm", "Saturday 10am-2pm"],
      description: `For nearly two decades, Michael S. Parker has worked as a fitness professional and executive level manager. He has earned multiple credentials from the National Academy of Sports Medicine, National Exercise & Sports Trainers Association and the Spencer Institute. He is a Certified Fitness Nutrition Coach and Lifestyle & Weight Management Specialist. He also holds a business degree from University of Phoenix.`,
    },
    {
      id: 2,
      name: "Jane Smith",
      imageSrc: InstructorJaneSmith,
      gender: "Female",
      certifications: ["CPT", "Yoga Instructor"],
      experience: 8,
      specializations: ["Yoga", "Pilates"],
      availability: ["Tuesday 6-10am", "Thursday 4-8pm", "Sunday 9am-1pm"],
      description:
        "For nearly two decades, Michael S. Parker has worked as a fitness professional and executive level manager. He has earned multiple credentials from the National Academy of Sports Medicine, National Exercise & Sports Trainers Association and the Spencer Institute. He is a Certified Fitness Nutrition Coach and Lifestyle & Weight Management Specialist. He also holds a business degree from University of Phoenix.",
    },
    {
      id: 3,
      name: "Michael Johnson",
      imageSrc: InstructorMichaelJohnson,
      gender: "Male",
      certifications: ["CPT", "CrossFit Trainer"],
      experience: 7,
      specializations: ["CrossFit", "Functional Training"],
      availability: ["Monday 6-8am", "Wednesday 5-9pm", "Friday 10am-2pm"],
      description:
        "For nearly two decades, Michael S. Parker has worked as a fitness professional and executive level manager. He has earned multiple credentials from the National Academy of Sports Medicine, National Exercise & Sports Trainers Association and the Spencer Institute. He is a Certified Fitness Nutrition Coach and Lifestyle & Weight Management Specialist. He also holds a business degree from University of Phoenix.",
    },
    {
      id: 4,
      name: "Emily Brown",
      imageSrc: InstructorEmilyBrown,
      gender: "Female",
      certifications: ["CPT", "Zumba Instructor"],
      experience: 6,
      specializations: ["Zumba", "Dance Fitness"],
      availability: ["Tuesday 7-9pm", "Thursday 6-8am", "Saturday 11am-1pm"],
      description:
        "For nearly two decades, Michael S. Parker has worked as a fitness professional and executive level manager. He has earned multiple credentials from the National Academy of Sports Medicine, National Exercise & Sports Trainers Association and the Spencer Institute. He is a Certified Fitness Nutrition Coach and Lifestyle & Weight Management Specialist. He also holds a business degree from University of Phoenix.",
    },
    {
      id: 5,
      name: "Christopher Lee",
      imageSrc: InstructorChristopherLee,
      gender: "Male",
      certifications: ["CPT", "Boxing Coach"],
      experience: 9,
      specializations: ["Boxing", "Kickboxing"],
      availability: ["Monday 7-10pm", "Wednesday 6-9am", "Saturday 8-11am"],
      description:
        "For nearly two decades, Michael S. Parker has worked as a fitness professional and executive level manager. He has earned multiple credentials from the National Academy of Sports Medicine, National Exercise & Sports Trainers Association and the Spencer Institute. He is a Certified Fitness Nutrition Coach and Lifestyle & Weight Management Specialist. He also holds a business degree from University of Phoenix.",
    },
    {
      id: 6,
      name: "Sophia Nguyen",
      imageSrc: InstructorSophiaNguyen,
      gender: "Female",
      certifications: ["CPT", "Pilates Instructor"],
      experience: 4,
      specializations: ["Pilates", "Barre"],
      availability: ["Tuesday 9am-12pm", "Thursday 3-6pm", "Sunday 10am-1pm"],
      description:
        "For nearly two decades, Michael S. Parker has worked as a fitness professional and executive level manager. He has earned multiple credentials from the National Academy of Sports Medicine, National Exercise & Sports Trainers Association and the Spencer Institute. He is a Certified Fitness Nutrition Coach and Lifestyle & Weight Management Specialist. He also holds a business degree from University of Phoenix.",
    },
    {
      id: 7,
      name: "David Wilson",
      imageSrc: InstructorDavidWilson,
      gender: "Male",
      certifications: ["CPT", "Endurance Coach"],
      experience: 8,
      specializations: ["Marathon Training", "Cycling"],
      availability: ["Monday 6-8am", "Wednesday 6-9pm", "Friday 7-9am"],
      description:
        "For nearly two decades, Michael S. Parker has worked as a fitness professional and executive level manager. He has earned multiple credentials from the National Academy of Sports Medicine, National Exercise & Sports Trainers Association and the Spencer Institute. He is a Certified Fitness Nutrition Coach and Lifestyle & Weight Management Specialist. He also holds a business degree from University of Phoenix.",
    },
  ];
  