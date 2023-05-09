const express = require('express')
const router = express.Router()

var header = {
    name: {
        firstname: 'John',
        lastname: 'Smith',
    },
    position: 'Junior Fullstack JS Developer',
    salary: '600$ in a month',
    address: "Моя адреса",
}

var footer = {
    social: {
        email: {
            text: 'dmytro@mail.com',
            href: 'mailto:dmytro@mail.com',
        },
        phone: {
            text: '+380670000123',
            href: 'tel:+380670000123',
        },
        linkedin: {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/dmytro-test',
        },
    },
}
// ================================================================
router.get('/', function (req, res) {
    res.render('index', {})
})
// ================================================================
router.get('/summary', function (req, res) {
    res.render('summary', {
        page: {
            title: 'Resume | Summary'
        },
        header,
        main: {
            summary: {
                title: 'Summary',
                text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
                work on a new project I learn the domain and try to understand the idea of the project. Good team
                player, every colleague is a friend to me.`,
            },
            experience: {
                title: 'Other experience',
                text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
                tournament position, goals etc), analyzing by simple mathematics models and preparing probability
                for such events like: money line - first win / draw / second win, totals etc.`,
            },
        },
        footer,
    })
})
// ================================================================
router.get('/skills', function (req, res) {
    res.render('skills', {
        page: {
            title: 'Resume | Skills'
        },
        header,
        main: {
            skills: [
                { name: "HTML", point: 10, isTop: true, },
                { name: "Handlebars", point: 9, isTop: true, },
                { name: "VS Code", point: 8, isTop: false, },
                { name: "GIT", point: 10, },
                { name: "React.js", point: 0, },
                { name: "PHP", point: null, },
            ],
            hobbies: [
                { name: "Hobby 1", isMain: true },
                { name: "Hobby 2", isMain: true },
                { name: "Hobby 3", isMain: false },
            ]
        },
        footer,
    })
})
// ================================================================
router.get('/education', function (req, res) {
    res.render('education', {
        page: {
            title: 'Resume | Education'
        },
        header,
        main: {
            educations: [
                {
                    name: "Інститут психології і підприємництва",
                    isEnd: true,
                },
                {
                    name: "Київський університет культури",
                    isEnd: true,
                },
                {
                    name: "Університет економіки та права",
                    isEnd: false,
                },
            ],
            certificates: [
                { name: "Сертифікат 2", id: 2, },
                { name: "Сертифікат 1", id: 1, },
                { name: "Сертифікат 3", id: 3, },
            ]
        },

        footer,
    })
})

// ================================================================
router.get('/work', function (req, res) {
    res.render('work', {
        layout: "big",

        page: {
            title: 'Resume | Work'
        },
        header,
        main: {
            works: [{
                position: 'Junior Fullstack JS Developer',
                company: {
                    name: 'IT Brains',
                    url: 'https://it-brains.com.ua/'
                },
                duration: {
                    from: '10.10.2022',
                    to: null
                },
                projectAmount: 3,
                projects: [
                    {
                        name: 'Resume',
                        url: 'https://resume.com.ua/',
                        about: "Airlib competitor.",
                        stacks: [
                            { name: "React.js" },
                            { name: 'HTML/CSS' },
                            { name: 'Node.js' },
                        ],
                        awards: [
                            { name: 'MEAN Stack development experience (Mongo dB, Express, Node, Angular)' },
                            { name: 'Have experience with using Node.js to interact with MongoDB.' },
                        ],
                        stackAmount: 5,
                        awardAmount: 7,
                    },
                ],
            }
            ],
        },

        footer,
    })
})

// ================================================================
router.get('/person', function (req, res) {
    res.render('person', {
        layout: "person",
        person: {
            name: 'Emma Johnson',
            age: 32,
            gender: 'Female',
            address: {
                street: '123 Main St',
                city: 'New York',
                state: 'NY',
                zip: '10001',
                country: 'USA',
            },
            education: [
                {
                    degree: 'Bachelor of Science',
                    major: 'Computer Science',
                    university:
                        'Massachusetts Institute of Technology',
                    graduationYear: 2012,
                },
            ],
            workExperience: [
                {
                    company: 'Google',
                    title: 'Software Engineer',
                    startDate: '2012-06-01',
                    endDate: '2016-12-31',
                    responsibilities: [
                        'Developed new features for Google Maps',
                        'Worked on improving search algorithms',
                    ],
                    year_founded: 1990,
                    industry: 'Technology',
                    employees: [
                        {
                            name: 'John Smith',
                            position: 'CEO',
                            department: 'Executive',
                            projects: [
                                {
                                    name: 'Project Alpha',
                                    description:
                                        'Developing new software platform',
                                    status: 'In Progress',
                                    teams: [
                                        {
                                            team_name: 'Awesome Team',
                                            team_leader: {
                                                name: 'John Smith',
                                                title: 'Team Leader',
                                                email: 'john.smith@example.com',
                                            },
                                            team_members: [
                                                {
                                                    name: 'Alice Johnson',
                                                    title: 'Software Engineer',
                                                    email:
                                                        'alice.johnson@example.com',
                                                    skills: ['Java', 'Python', 'SQL'],
                                                    projects: [
                                                        {
                                                            name: 'Project A',
                                                            description:
                                                                'Lorem ipsum dolor sit amet',
                                                            technologies: [
                                                                'Java',
                                                                'Spring Framework',
                                                            ],
                                                            team_members: [
                                                                {
                                                                    name: 'Bob Lee',
                                                                    title:
                                                                        'Software Engineer',
                                                                },
                                                                {
                                                                    name: 'Cindy Chen',
                                                                    title: 'UI Designer',
                                                                },
                                                            ],
                                                        }
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    })
})

// ================================================================
router.get('/bio', function (req, res) {
    res.render('bio', {
        layout: "basic",
        title: "Biography",
        name: 'Albert Einstein',
        birthdate: 'March 14, 1879',
        birthplace:
            'Ulm, Kingdom of Württemberg, German Empire',
        deathdate: 'April 18, 1955',
        deathplace: 'Princeton, New Jersey, United States',
        nationality: 'Swiss, German, American',
        occupation: 'Theoretical Physicist',
        known_for: [
            'Theory of Relativity',
            'E=mc²',
            'Photoelectric Effect',
            'Brownian Motion',
        ],
        education: [
            {
                degree: 'Doctor of Philosophy',
                field: 'Physics',
                institution: 'University of Zurich',
                year: 1905,
            },
        ],
        notable_publications: [
            {
                title: 'On the Electrodynamics of Moving Bodies',
                year: 1905,
                publisher: 'Annalen der Physik',
            },
            {
                title:
                    'Does the Inertia of a Body Depend Upon Its Energy Content?',
                year: 1905,
                publisher: 'Annalen der Physik',
            },
        ],
        partners: [
            {
                name: 'Mileva Marić',
                relationship: 'First wife',
                years: '1903-1919',
            },
            {
                name: 'Elsa Einstein',
                relationship:
                    "Second wife, also Einstein's first cousin",
                years: '1919-1936',
            },
        ],
        awards: [
            {
                title: 'Nobel Prize in Physics',
                year: 1921,
                description:
                    'Awarded for his explanation of the photoelectric effect',
            },
        ],
        influences: [
            'Isaac Newton',
            'James Clerk Maxwell',
            'Hermann Minkowski',
        ],
        influenced: [
            'Niels Bohr',
            'Erwin Schrödinger',
            'Werner Heisenberg',
            'Richard Feynman',
        ],
        quotes: [
            'Imagination is more important than knowledge.',
            'I have no special talent. I am only passionately curious.',
            'The important thing is not to stop questioning.',
            'The most beautiful thing we can experience is the mysterious. It is the source of all true art and all science.',
        ],
        major_discoveries: [
            {
                title: 'Photoelectric Effect',
                year: 1905,
                description:
                    'Einstein explained the photoelectric effect, where electrons are emitted from a metal surface when it is illuminated by light.',
            },
        ],
        contributions: {
            title: 'Inventions',
            description:
                'Leonardo designed and invented a wide variety of machines and devices, including a helicopter, a diving suit, and a self-propelled cart. Many of his inventions were centuries ahead of their time.',
            year: 'Late 15th to early 16th century',
            field: 'Invention',
        },
    })
})

// ================================================================
router.get('/program', function (req, res) {
    //             ↙ cюди вводимо назву файлу з сontainer
    res.render('program', {
        layout: "basic",
        title: "Program",
        program: {
            excursion: {
                name: 'Cultural Tour',
                location: {
                    city: 'Paris',
                    country: 'France',
                },
                date: '2023-06-15',
                program: [
                    {
                        name: 'Museum Visit',
                        type: 'Art',
                        duration: 3,
                        details: {
                            museum: {
                                name: 'The Louvre',
                                location: {
                                    address: 'Rue de Rivoli',
                                    city: 'Paris',
                                    country: 'France',
                                },
                                exhibits: [
                                    {
                                        name: 'Mona Lisa',
                                        artist: 'Leonardo da Vinci',
                                        description: 'Iconic portrait painting',
                                        audio_guide: true,
                                    },
                                    {
                                        name: 'Winged Victory of Samothrace',
                                        artist: null,
                                        description:
                                            'Ancient Greek statue of Nike, the goddess of victory',
                                        audio_guide: true,
                                    },
                                ],
                            },
                            guide: {
                                name: 'Francois',
                                language: 'French',
                                rating: 4.8,
                            },
                        },
                    },
                    {
                        name: 'Cultural Show',
                        type: 'Music and Dance',
                        duration: 2,
                        details: {
                            venue: {
                                name: 'Moulin Rouge',
                                location: {
                                    address: '82 Boulevard de Clichy',
                                    city: 'Paris',
                                    country: 'France',
                                },
                            },
                            performers: [
                                {
                                    name: 'Mireille Mathieu',
                                    type: 'Chanson singer',
                                },
                                {
                                    name: "Ballet de l'Opéra National de Paris",
                                    type: 'Classical ballet company',
                                },
                            ],
                            guide: {
                                name: 'Sophie',
                                language: 'English',
                                rating: 4.6,
                            },
                        },
                    },
                ],
            },
        },
    })
})

// ================================================================
router.get('/web', function (req, res) {
    //             ↙ cюди вводимо назву файлу з сontainer
    res.render('web', {
        layout: "basic",
        title: "Web",
        web: {
            languages: [
                {
                    name: 'HTML',
                    version: 'HTML5',
                    description:
                        'Hypertext Markup Language is the standard markup language for creating web pages and web applications.',
                    elements: [
                        {
                            name: 'div',
                            description:
                                'Defines a division or a section in an HTML document.',
                            attributes: [
                                {
                                    name: 'id',
                                    description:
                                        'Specifies a unique id for an HTML element.',
                                },
                                {
                                    name: 'class',
                                    description:
                                        'Specifies one or more class names for an HTML element.',
                                },
                            ],
                        },
                        {
                            name: 'p',
                            description:
                                'Defines a paragraph in an HTML document.',
                            attributes: [
                                {
                                    name: 'id',
                                    description:
                                        'Specifies a unique id for an HTML element.',
                                },
                                {
                                    name: 'class',
                                    description:
                                        'Specifies one or more class names for an HTML element.',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'CSS',
                    version: 'CSS3',
                    description:
                        'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in HTML or XML.',
                    properties: [
                        {
                            name: 'color',
                            description: 'Sets the color of the text.',
                            values: [
                                {
                                    value: 'red',
                                    description:
                                        'Sets the text color to red.',
                                },
                                {
                                    value: 'blue',
                                    description:
                                        'Sets the text color to blue.',
                                },
                            ],
                        },
                        {
                            name: 'background-color',
                            description:
                                'Sets the background color of an element.',
                            values: [
                                {
                                    value: 'white',
                                    description:
                                        'Sets the background color to white.',
                                },
                                {
                                    value: 'black',
                                    description:
                                        'Sets the background color to black.',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'JavaScript',
                    version: 'ES6',
                    description:
                        'JavaScript is a programming language used to create interactive effects within web browsers.',
                    functions: [
                        {
                            name: 'alert()',
                            description:
                                'Displays an alert box with a specified message and an OK button.',
                            parameters: [
                                {
                                    name: 'message',
                                    type: 'string',
                                    description:
                                        'The message to display in the alert box.',
                                },
                            ],
                        },
                        {
                            name: 'getElementById()',
                            description:
                                'Returns the element with the specified ID.',
                            parameters: [
                                {
                                    name: 'id',
                                    type: 'string',
                                    description:
                                        'The ID of the element to find.',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    })
})
// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/task21', function (req, res) {
    // res.render генерує нам HTML сторінку

    //            ↙ cюди вводимо назву файлу з сontainer
    res.render('task21', {
        layout: "basic",
        title: "task21",
        heading: {
            main: {
                title: 'JavaScript',
                text: 'JavaScript is a popular high-level, dynamic, and interpreted programming language.',
                button_text: {
                    solid: 'Open page',
                    outline: 'Add to cart',
                },
            },
            second: {
                title: 'Stack Overflow',
                text: 'First-class functions',
                button_text: {
                    solid: 'Open page',
                    outline: 'Add to cart',
                },
            },
            subblock: {
                title: 'JavaScript Weekly',
                text: 'Prototype-based inheritance newsletter',
                button_text: {
                    solid: 'Open page',
                    outline: 'Add to cart',
                },
            },
        },
        nested_display: {
            title: 'HTML',
            children_display: {
                title: 'Outdated HTML tags',
                text: 'tags that have been identified as deprecated and not recommended for use in HTML version 5',
                button: {
                    text: 'Орen',
                },
            },
            header_text: 'Sections',
            button: {
                text: 'Learn more',
            },
        },
        paragraph: {
            title: 'About modules',
            text: 'Modules with import/export statements',

            button: {
                text: 'Open link page',
                url: 'https://google.com',
            },
            list_name: [
                {
                    text: 'Github',
                    url: 'https://github.com/',
                },
                {
                    text: 'Bootstrap',
                    url: 'https://getbootstrap.com/',
                },
            ],
        },
    })
    //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/shophome', function (req, res) {
    // res.render генерує нам HTML сторінку

    //            ↙ cюди вводимо назву файлу з сontainer
    res.render('shophome', {
        layout: 'shop',
        navigation: {
            links: [
                {
                    text: 'Home',
                    href: 'https://github.com/',
                },
                {
                    text: 'Contacts',
                    href: 'https://www.google.com/',
                },
                {
                    text: 'Help',
                    href: 'https://www.youtube.com/',
                },
            ],
        },

        newsBlock: {
            title: 'Latest News',
            cards: [
                {
                    title: 'COVID-19 Vaccinations Begin in Europe',
                    description:
                        'As the world continues to grapple with the ongoing COVID-19 pandemic, Europe begins its vaccination rollout, with healthcare workers and the elderly among the first to receive the vaccine.',
                    isTop: false,
                    isNew: false,
                },
                {
                    title: 'Tesla Stock Surges After Record Sales',
                    description:
                        "Tesla's stock price jumps 10% following the company's announcement of record sales in the last quarter, thanks in part to strong demand for its electric vehicles.",
                    isTop: true,
                    isNew: true,
                },
                {
                    title:
                        'New Study Shows Benefits of Meditation for Mental Health',
                    description:
                        'A new study published in the Journal of the American Medical Association finds that practicing mindfulness meditation can lead to improved mental health outcomes for people struggling with depression and anxiety.',
                    isTop: false,
                    isNew: false,
                },
                {
                    title: 'NASA Launches New Mars Rover',
                    description:
                        "NASA's Perseverance rover successfully launches on a mission to explore Mars, with the goal of collecting samples of the planet's surface and searching for signs of ancient microbial life.",
                    isTop: false,
                    isNew: true,
                },
                {
                    title:
                        'GameStop Shares Soar as Reddit Traders Rally',
                    description:
                        'Shares of GameStop surge as amateur traders on the social media platform Reddit rally to drive up the price, in what some are calling a battle between Wall Street and Main Street.',
                    isTop: false,
                    isNew: false,
                },
                {
                    title:
                        'UK Announces Plan to Ban Sale of Gas-Powered Cars by 2030',
                    description:
                        'In an effort to combat climate change, the UK government announces a plan to ban the sale of new gas-powered cars and vans by 2030, with hybrid vehicles to follow in 2035.',
                    isTop: true,
                    isNew: false,
                },
                {
                    title:
                        'New Study Shows Link Between Exercise and Longevity',
                    description:
                        'A new study published in the Journal of the American Medical Association suggests that regular exercise can help people live longer, with participants who exercised regularly having a lower risk of premature death.',
                    isTop: false,
                    isNew: false,
                },
                {
                    title: 'Amazon Expands Grocery Delivery Service',
                    description:
                        'Amazon announces an expansion of its grocery delivery service, with plans to offer free delivery to Prime members on orders over $35 and to expand its selection of fresh and organic produce.',
                    isTop: false,
                    isNew: true,
                },
            ],
        },

        goodsBlock: {
            tabs: [
                {
                    isActive: true,
                    isDisabled: false,
                    text: 'Electronics',
                },
                {
                    isActive: false,
                    isDisabled: false,
                    text: 'Home & Kitchen',
                },
                {
                    isActive: false,
                    isDisabled: false,
                    text: 'Clothing & Accessories',
                },
                {
                    isActive: false,
                    isDisabled: true,
                    text: 'Toys & Games',
                },
            ],
            cards: [
                {
                    image: 'https://picsum.photos/400/200',
                    title: 'iPhone 13',
                    description:
                        'The latest iPhone model features a new A15 Bionic chip, improved camera system, and longer battery life.',
                    isHot: false,
                    isNew: false,
                },
                {
                    image: 'https://picsum.photos/400/200',
                    title: 'MacBook Pro',
                    description:
                        "Apple's high-end laptop features a 16-inch Retina display, powerful M1 Pro or M1 Max chip, and up to 64GB of RAM.",
                    isHot: true,
                    isNew: false,
                },
                {
                    image: 'https://picsum.photos/400/200',
                    title: 'AirPods Pro',
                    description:
                        "Apple's premium wireless earbuds feature active noise cancellation, a customizable fit, and up to 4.5 hours of listening time.",
                    isHot: false,
                    isNew: false,
                },
                {
                    image: 'https://picsum.photos/400/200',
                    title: 'Sony Bravia XR A90J',
                    description:
                        'This OLED TV boasts a 4K resolution, HDR support, and a high refresh rate for smooth motion handling.',
                    isHot: false,
                    isNew: true,
                },
                {
                    image: 'https://picsum.photos/400/200',
                    title: 'Nintendo Switch OLED Model',
                    description:
                        'The latest iteration of the popular gaming console features a larger OLED screen and improved audio quality.',
                    isHot: false,
                    isNew: false,
                },
                {
                    image: 'https://picsum.photos/400/200',
                    title: 'Bose SoundLink Revolve+',
                    description:
                        'This portable Bluetooth speaker features 360-degree sound, water-resistant construction, and up to 16 hours of battery life.',
                    isHot: true,
                    isNew: true,
                },
            ],
        },
        subscribe: {
            header: 'Unlock Premium Content',
            description:
                'Subscribe to access exclusive content and features.',
            buttons: [
                {
                    text: 'Register Now',
                    link: 'https://www.youtube.com/',
                },
                {
                    text: 'Buy Subscription',
                    link: 'https://www.youtube.com/',
                },
            ],
        },
        service: {
            title: 'Our Services',
            description:
                'We offer a variety of services to meet your needs, including web design, content creation, and social media management.',
            buttons: [
                {
                    text: 'Show More',
                    link: 'https://www.youtube.com/',
                },
            ],
        },

        footer: [
            [
                {
                    text: 'Home',
                    link: 'https://www.youtube.com/',
                },
                {
                    text: 'Trending',
                    link: 'https://www.youtube.com/feed/trending',
                },
                {
                    text: 'Subscriptions',
                    link: 'https://www.youtube.com/feed/subscriptions',
                },
                {
                    text: 'Library',
                    link: 'https://www.youtube.com/feed/library',
                },
            ],
            [
                {
                    text: 'History',
                    link: 'https://www.youtube.com/feed/history',
                },
                {
                    text: 'Your Videos',
                    link: 'https://www.youtube.com/feed/my_videos',
                },
                {
                    text: 'Live',
                    link: 'https://www.youtube.com/live',
                },
                {
                    text: 'Settings',
                    link: 'https://www.youtube.com/account',
                },
            ],
            [
                {
                    text: 'Watch Later',
                    link: 'https://www.youtube.com/playlist?list=WL',
                },
                {
                    text: 'Liked Videos',
                    link: 'https://www.youtube.com/playlist?list=LL',
                },
                {
                    text: 'Music',
                    link: 'https://www.youtube.com/music',
                },
                {
                    text: 'Gaming',
                    link: 'https://www.youtube.com/gaming',
                },
            ],
            [
                {
                    text: 'Sports',
                    link: 'https://www.youtube.com/channel/UCo_q6aOlvPH7M-j_XGWVgXg',
                },
                {
                    text: 'News',
                    link: 'https://www.youtube.com/news',
                },
                {
                    text: 'Fashion & Beauty',
                    link: 'https://www.youtube.com/channel/UC1x8rV_f-2yPpzlN0JWZXIQ',
                },
                {
                    text: 'Learning',
                    link: 'https://www.youtube.com/learning',
                },
            ],
            [
                {
                    text: 'Report History',
                    link: 'https://www.youtube.com/feed/history/report_history',
                },
                {
                    text: 'Help',
                    link: 'https://support.google.com/youtube/?hl=en',
                },
                {
                    text: 'Send Feedback',
                    link: 'https://support.google.com/youtube/answer/4347644?hl=en',
                },
                {
                    text: 'About',
                    link: 'https://www.youtube.com/about/',
                },
            ],
        ],
    })
    //                  ↑↑ сюди вводимо JSON дані
})
// ================================================================
// Підключаємо роутер до бек-енду
module.exports = router