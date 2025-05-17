import content from './content.json';

export const services = [
        {
            link: '/service#life',
            title: content.serviceRow.types[0].title,
            description: content.serviceRow.types[0].description
        }, 
        {
            link: '/service#health',
            title: content.serviceRow.types[1].title,
            description: content.serviceRow.types[1].description
        }, {
            link: '/service#final-expense',
            title: content.serviceRow.types[2].title,
            description: content.serviceRow.types[2].description
        }, {
            link: '/service#medicare',
            title: content.serviceRow.types[3].title,
            description: content.serviceRow.types[3].description
        }
    ];
 
export const lang = [
        {id: 0, name: 'EN'},
        {id: 1, name: 'ES'},
        {id: 2, name: 'AR'},
        {id: 3, name: 'HI'},
    ]

export const quotes = [
        { id: 0, name: content.serviceRow.types[0].title },
        { id: 1, name: content.serviceRow.types[1].title  },
        { id: 2, name: content.serviceRow.types[2].title },
        { id: 3, name: content.serviceRow.types[3].title  },
        { id: 4, name: content.serviceRow.types[4].title  },
        { id: 5, name: content.serviceRow.types[5].title },
        { id: 6, name: content.serviceRow.types[6].title }
    ];

export const us_states = [
    { id: 0, name: "Alabama" },
    { id: 1, name: "Alaska" },
    { id: 2, name: "Arizona" },
    { id: 3, name: "Arkansas" },
    { id: 4, name: "California" },
    { id: 5, name: "Colorado" },
    { id: 6, name: "Connecticut" },
    { id: 7, name: "Delaware" },
    { id: 8, name: "Florida" },
    { id: 9, name: "Georgia" },
    { id: 10, name: "Hawaii" },
    { id: 11, name: "Idaho" },
    { id: 12, name: "Illinois" },
    { id: 13, name: "Indiana" },
    { id: 14, name: "Iowa" },
    { id: 15, name: "Kansas" },
    { id: 16, name: "Kentucky" },
    { id: 17, name: "Louisiana" },
    { id: 18, name: "Maine" },
    { id: 19, name: "Maryland" },
    { id: 20, name: "Massachusetts" },
    { id: 21, name: "Michigan" },
    { id: 22, name: "Minnesota" },
    { id: 23, name: "Mississippi" },
    { id: 24, name: "Missouri" },
    { id: 25, name: "Montana" },
    { id: 26, name: "Nebraska" },
    { id: 27, name: "Nevada" },
    { id: 28, name: "New Hampshire" },
    { id: 29, name: "New Jersey" },
    { id: 30, name: "New Mexico" },
    { id: 31, name: "New York" },
    { id: 32, name: "North Carolina" },
    { id: 33, name: "North Dakota" },
    { id: 34, name: "Ohio" },
    { id: 35, name: "Oklahoma" },
    { id: 36, name: "Oregon" },
    { id: 37, name: "Pennsylvania" },
    { id: 38, name: "Rhode Island" },
    { id: 39, name: "South Carolina" },
    { id: 40, name: "South Dakota" },
    { id: 41, name: "Tennessee" },
    { id: 42, name: "Texas" },
    { id: 43, name: "Utah" },
    { id: 44, name: "Vermont" },
    { id: 45, name: "Virginia" },
    { id: 46, name: "Washington" },
    { id: 47, name: "West Virginia" },
    { id: 48, name: "Wisconsin" },
    { id: 49, name: "Wyoming" },
    { id: 50, name: "District of Columbia" },
    { id: 51, name: "Puerto Rico" },
    { id: 52, name: "Guam" },
    { id: 53, name: "American Samoa" },
    { id: 54, name: "U.S. Virgin Islands" },
    { id: 55, name: "Northern Mariana Islands" }
];

export const months = [
        { id: 0, name: "January" },
        { id: 1, name: "February" },
        { id: 2, name: "March" },
        { id: 3, name: "April" },
        { id: 4, name: "May" },
        { id: 5, name: "June" },
        { id: 6, name: "July" },
        { id: 7, name: "August" },
        { id: 8, name: "September" },
        { id: 9, name: "October" },
        { id: 10, name: "November" },
        { id: 11, name: "December" }
    ];

export const years = () => {
        const currentYear = new Date().getFullYear();
        const yearList = [];
        for (let i = currentYear; i >= 1900; i--) {
            yearList.push({ id: i, name: i });
        }
        return yearList;
    }

export const days = () => {
        const currentYear = new Date().getFullYear();
        const month = new Date().getMonth();
        const year = new Date().getFullYear();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const dayList = [];
        for (let i = 1; i <= daysInMonth; i++) {
            dayList.push({ id: i, name: i });
        }
        return dayList;
    }

export const healthOptions = [
        { id: 0, name: "Super Preferred" },
        { id: 1, name: "Preferred" },
        { id: 2, name: "Regular Plus" },
        { id: 3, name: "Regular" }
    ];

export const termOptions = [
        { id: 0, name: "5 Years" },
        { id: 1, name: "10 Years" },
        { id: 2, name: "15 Years" },
        { id: 3, name: "20 Years" },
        { id: 4, name: "25 Years" },
        { id: 5, name: "30 Years" }
    ];

export const amountOptions = [
        { id: 0, name: "$25,000" },
        { id: 1, name: "$50,000" },
        { id: 2, name: "$75,000" },
        { id: 3, name: "$100,000" },
        { id: 4, name: "$125,000" },
        { id: 5, name: "$150,000" },
        { id: 6, name: "$175,000" },
        { id: 7, name: "$200,000" },
        { id: 8, name: "$225,000" },
        { id: 9, name: "$250,000" },
        { id: 10, name: "$300,000" },
        { id: 11, name: "$350,000" },
        { id: 12, name: "$400,000" },
        { id: 13, name: "$450,000" },
        { id: 14, name: "$500,000" },
        { id: 15, name: "$600,000" },
        { id: 16, name: "$700,000" },
        { id: 17, name: "$750,000" },
        { id: 18, name: "$800,000" },
        { id: 19, name: "$900,000" },
        { id: 20, name: "$1 Million" },
        { id: 21, name: "$1,250,000"  },
        { id: 22, name: "$1,500,000"  },
        { id: 23, name: "$1,750,000" },
        { id: 24, name: "$2 Million" },
        { id: 25, name: "$2,500,000" },
        { id: 26, name: "$3 Million" },
        { id: 27, name: "$3,500,000" },
        { id: 28, name: "$4 Million" },
        { id: 30, name: "$5 Million" },
        { id: 31, name: "$6 Million" },
        { id: 32, name: "$7 Million" },
        { id: 33, name: "$8 Million" },
        { id: 34, name: "$9 Million" },
        { id: 35, name: "$10 Million" }
    ];

