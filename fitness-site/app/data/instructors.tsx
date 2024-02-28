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
      href: 'john-doe',
      imageSrc: InstructorJohnDoe,
      gender: "Male",
      certifications: ["PTC", "GEIC"],
      experience: 5,
      specializations: ["Strength Training", "HIIT"],
      availability: [
        {
          date: 'February 26, Monday',
          training: [
            {
              id: 1,
              hours: '08:00',
              trainingType: 'Yoga'
            },
            {
              id: 2,
              hours: '11:00',
              trainingType: 'Yoga'
            },
            {
              id: 3,
              hours: '14:30',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '15:00',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '17:45',
              trainingType: 'Yoga'
            },
          ]
        },
        {
          date: 'February 27, Monday',
          training: [
            {
              id: 1,
              hours: '08:00',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '11:00',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '14:30',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '15:00',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '17:45',
              trainingType: 'Yoga'
            },
          ]
        },
        {
          date: 'February 27, Monday',
          training: [
            {
              id: 1,
              hours: '08:00',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '11:00',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '14:30',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '15:00',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '17:45',
              trainingType: 'Yoga'
            },
          ]
        },
      ],
      description: `For nearly two decades, Michael S. Parker has worked as a fitness professional and executive level manager. He has earned multiple credentials from the National Academy of Sports Medicine, National Exercise & Sports Trainers Association and the Spencer Institute. He is a Certified Fitness Nutrition Coach and Lifestyle & Weight Management Specialist. He also holds a business degree from University of Phoenix.`,
    },
    {
      id: 2,
      name: "Jane Smith",
      href: 'jane-smith',
      imageSrc: InstructorJaneSmith,
      gender: "Female",
      certifications: ["CPT", "Yoga Instructor"],
      experience: 8,
      specializations: ["Yoga", "Pilates"],
      availability: [
        {
          date: 'February 26, Monday',
          training: [
            {
              id: 1,
              hours: '08:00',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '11:00',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '14:30',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '15:00',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '17:45',
              trainingType: 'Yoga'
            },
          ]
        },
        {
          date: 'February 27, Monday',
          training: [
            {
              id: 1,
              hours: '08:00',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '11:00',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '14:30',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '15:00',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '17:45',
              trainingType: 'Yoga'
            },
          ]
        },
        {
          date: 'February 27, Monday',
          training: [
            {
              id: 1,
              hours: '08:00',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '11:00',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '14:30',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '15:00',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '17:45',
              trainingType: 'Yoga'
            },
          ]
        },
      ],
      description:
        "For nearly two decades, Michael S. Parker has worked as a fitness professional and executive level manager. He has earned multiple credentials from the National Academy of Sports Medicine, National Exercise & Sports Trainers Association and the Spencer Institute. He is a Certified Fitness Nutrition Coach and Lifestyle & Weight Management Specialist. He also holds a business degree from University of Phoenix.",
    },
    {
      id: 3,
      name: "Michael Johnson",
      href: 'michael-johnson',
      imageSrc: InstructorMichaelJohnson,
      gender: "Male",
      certifications: ["CPT", "CrossFit Trainer"],
      experience: 7,
      specializations: ["CrossFit", "Functional Training"],
      availability: [
        {
          date: 'February 26, Monday',
          training: [
            {
              id: 1,
              hours: '08:00',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '11:00',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '14:30',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '15:00',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '17:45',
              trainingType: 'Yoga'
            },
          ]
        },
        {
          date: 'February 27, Monday',
          training: [
            {
              id: 1,
              hours: '08:00',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '11:00',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '14:30',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '15:00',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '17:45',
              trainingType: 'Yoga'
            },
          ]
        },
        {
          date: 'February 27, Monday',
          training: [
            {
              id: 1,
              hours: '08:00',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '11:00',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '14:30',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '15:00',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '17:45',
              trainingType: 'Yoga'
            },
          ]
        },
      ],
      description:
        "For nearly two decades, Michael S. Parker has worked as a fitness professional and executive level manager. He has earned multiple credentials from the National Academy of Sports Medicine, National Exercise & Sports Trainers Association and the Spencer Institute. He is a Certified Fitness Nutrition Coach and Lifestyle & Weight Management Specialist. He also holds a business degree from University of Phoenix.",
    },
    {
      id: 4,
      name: "Emily Brown",
      href: 'emily-brown',
      imageSrc: InstructorEmilyBrown,
      gender: "Female",
      certifications: ["CPT", "Zumba Instructor"],
      experience: 6,
      specializations: ["Zumba", "Dance Fitness"],
      availability: [
        {
          date: 'February 26, Monday',
          training: [
            {
              id: 1,
              hours: '08:00',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '11:00',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '14:30',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '15:00',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '17:45',
              trainingType: 'Yoga'
            },
          ]
        },
        {
          date: 'February 27, Monday',
          training: [
            {
              id: 1,
              hours: '08:00',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '11:00',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '14:30',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '15:00',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '17:45',
              trainingType: 'Yoga'
            },
          ]
        },
        {
          date: 'February 27, Monday',
          training: [
            {
              id: 1,
              hours: '08:00',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '11:00',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '14:30',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '15:00',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '17:45',
              trainingType: 'Yoga'
            },
          ]
        },
      ],
      description:
        "For nearly two decades, Michael S. Parker has worked as a fitness professional and executive level manager. He has earned multiple credentials from the National Academy of Sports Medicine, National Exercise & Sports Trainers Association and the Spencer Institute. He is a Certified Fitness Nutrition Coach and Lifestyle & Weight Management Specialist. He also holds a business degree from University of Phoenix.",
    },
    {
      id: 5,
      name: "Christopher Lee",
      href: 'christopher-lee',
      imageSrc: InstructorChristopherLee,
      gender: "Male",
      certifications: ["CPT", "Boxing Coach"],
      experience: 9,
      specializations: ["Boxing", "Kickboxing"],
      availability: [
        {
          date: 'February 26, Monday',
          training: [
            {
              id: 1,
              hours: '08:00',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '11:00',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '14:30',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '15:00',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '17:45',
              trainingType: 'Yoga'
            },
          ]
        },
        {
          date: 'February 27, Monday',
          training: [
            {
              id: 1,
              hours: '08:00',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '11:00',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '14:30',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '15:00',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '17:45',
              trainingType: 'Yoga'
            },
          ]
        },
        {
          date: 'February 27, Monday',
          training: [
            {
              id: 1,
              hours: '08:00',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '11:00',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '14:30',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '15:00',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '17:45',
              trainingType: 'Yoga'
            },
          ]
        },
      ],
      description:
        "For nearly two decades, Michael S. Parker has worked as a fitness professional and executive level manager. He has earned multiple credentials from the National Academy of Sports Medicine, National Exercise & Sports Trainers Association and the Spencer Institute. He is a Certified Fitness Nutrition Coach and Lifestyle & Weight Management Specialist. He also holds a business degree from University of Phoenix.",
    },
    {
      id: 6,
      name: "Sophia Nguyen",
      href: 'sophia-nguyen',
      imageSrc: InstructorSophiaNguyen,
      gender: "Female",
      certifications: ["CPT", "Pilates Instructor"],
      experience: 4,
      specializations: ["Pilates", "Barre"],
      availability: [
        {
          date: 'February 26, Monday',
          training: [
            {
              id: 1,
              hours: '08:00',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '11:00',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '14:30',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '15:00',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '17:45',
              trainingType: 'Yoga'
            },
          ]
        },
        {
          date: 'February 27, Monday',
          training: [
            {
              id: 1,
              hours: '08:00',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '11:00',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '14:30',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '15:00',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '17:45',
              trainingType: 'Yoga'
            },
          ]
        },
        {
          date: 'February 27, Monday',
          training: [
            {
              id: 1,
              hours: '08:00',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '11:00',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '14:30',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '15:00',
              trainingType: 'Yoga'
            },
            {
              id: 1,
              hours: '17:45',
              trainingType: 'Yoga'
            },
          ]
        },
      ],
      description:
        "For nearly two decades, Michael S. Parker has worked as a fitness professional and executive level manager. He has earned multiple credentials from the National Academy of Sports Medicine, National Exercise & Sports Trainers Association and the Spencer Institute. He is a Certified Fitness Nutrition Coach and Lifestyle & Weight Management Specialist. He also holds a business degree from University of Phoenix.",
    },
    {
      id: 7,
      href: 'david-wilson',
      name: "David Wilson",
      imageSrc: InstructorDavidWilson,
      gender: "Male",
      certifications: ["CPT", "Endurance Coach"],
      experience: 8,
      specializations: ["Marathon Training", "Cycling"],
      availability: [
        {
          date: 'February 26, Monday',
          training: [
            {
              id: 1,
              hours: '08:00',
              trainingType: 'Calisthenics'
            },
            {
              id: 2,
              hours: '11:00',
              trainingType: 'Yoga'
            },
            {
              id: 3,
              hours: '14:30',
              trainingType: 'Cardio'
            },
            {
              id: 4,
              hours: '15:00',
              trainingType: 'Cardio'
            },
            {
              id: 5,
              hours: '17:45',
              trainingType: 'Yoga'
            },
          ]
        },
        {
          date: 'February 27, Monday',
          training: [
            {
              id: 1,
              hours: '09:00',
              trainingType: 'Strength Training'
            },
            {
              id: 2,
              hours: '09:50',
              trainingType: 'Yoga'
            },
            {
              id: 3,
              hours: '13:30',
              trainingType: 'Calisthenics'
            },
            {
              id: 4,
              hours: '19:00',
              trainingType: 'Yoga'
            },
            {
              id: 5,
              hours: '20:45',
              trainingType: 'Calisthenics'
            },
          ]
        },
        {
          date: 'February 28, Monday',
          training: [
            {
              id: 1,
              hours: '10:00',
              trainingType: 'Yoga'
            },
            {
              id: 2,
              hours: '12:45',
              trainingType: 'Yoga'
            },
            {
              id: 3,
              hours: '15:30',
              trainingType: 'Yoga'
            },
            {
              id: 4,
              hours: '16:30',
              trainingType: 'Yoga'
            },
            {
              id: 5,
              hours: '21:45',
              trainingType: 'Yoga'
            },
          ]
        },
      ],
      description:
        "For nearly two decades, Michael S. Parker has worked as a fitness professional and executive level manager. He has earned multiple credentials from the National Academy of Sports Medicine, National Exercise & Sports Trainers Association and the Spencer Institute. He is a Certified Fitness Nutrition Coach and Lifestyle & Weight Management Specialist. He also holds a business degree from University of Phoenix.",
    },
  ];
  