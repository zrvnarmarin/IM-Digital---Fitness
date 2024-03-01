import TestImage from '../../public/CardioBlastImage.jpg'
import TestImageTwo from '../../public/gymImage.jpg'
import TestImageThree from '../../public/homePageSectiontwoImageTest.jpg'
import { LocationType } from '../types'

export const locations: LocationType[] = [
    {
        id: 1,
        href: 'voltino',
        locationName: 'Voltino',
        locationCity: 'Zagreb',
        address: 'Marmontova aleja 1',
        workingHours: [
            '09:00 - 17:00',
            '17:00 - 23:00'
        ],
        email: 'gymName@aeonstrength.com',
        locationCardImageSrc: TestImage,
        imagesSrc: [
            TestImage,
            TestImageTwo,
            TestImageThree,
            TestImage,
            TestImageTwo,
            TestImageThree,
            TestImage,
            TestImageTwo,
            TestImageThree
        ]
    },
    {
        id: 2,
        href: 'example-gym',
        locationName: 'Example Gym',
        locationCity: 'Zagreb',
        address: 'Some Address 2',
        workingHours: [
            '08:00 - 20:00',
            'Closed on Sundays'
        ],
        email: 'examplegym@example.com',
        locationCardImageSrc: TestImage,
        imagesSrc: [
            TestImage,
            TestImageTwo,
            TestImageThree,
            TestImage,
            TestImageTwo,
            TestImageThree,
            TestImage,
            TestImageTwo,
            TestImageThree
        ]
    },
    {
        id: 3,
        href: 'fintess-centar-xyz',
        locationName: 'Fitness Center XYZ',
        locationCity: 'Split',
        address: 'Some Address 3',
        workingHours: [
            '10:00 - 22:00',
            'Closed on Saturdays'
        ],
        locationCardImageSrc: TestImage,
        email: 'fitnesscenterxyz@example.com',
        imagesSrc: [
            TestImage,
            TestImageTwo,
            TestImageThree,
            TestImage,
            TestImageTwo,
            TestImageThree,
            TestImage,
            TestImageTwo,
            TestImageThree
        ]
    },
    {
        id: 4,
        href: 'gym-abc',
        locationName: 'Gym ABC',
        locationCity: 'Rijeka',
        address: 'Some Address 4',
        workingHours: [
            '06:00 - 22:00',
            'Closed on Mondays'
        ],
        email: 'gymabc@example.com',
        locationCardImageSrc: TestImage,
        imagesSrc: [
            TestImage,
            TestImageTwo,
            TestImageThree,
            TestImage,
            TestImageTwo,
            TestImageThree,
            TestImage,
            TestImageTwo,
            TestImageThree
        ]
    }
]
