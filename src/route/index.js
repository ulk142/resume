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
// Підключаємо роутер до бек-енду
module.exports = router