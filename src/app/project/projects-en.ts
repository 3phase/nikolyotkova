import { IProject } from "./project.component"

export const PROJECTS_EN: IProject[] = [
    {
        id: 1,
        title: "Landscaping by Kiril Y",
        description: '"Landscaping by Kiril Y" is a brand new business for afforestation, construction of irrigation systems and lawn maintenance',
        customer: {
            label: 'Client',
            text: ' Kiril Yotkov<br><br><br><strong>Project objective:</strong> Creating a brand identity'
        },
        challenge: {
            label: 'Challenge',
            text: 'the area in which the business operates can be definied as a small market with the presence of several competing companies. Also, the people who live there carry out all the landscaping activities on their properties themselves.'
        },
        aim: {
            label: 'Project objective',
            text: 'Creating a simple and minimalistic design, which differs from those of the competing companies.',
        },
        feedback: {
            label: 'Feedback from the client',
            text: '"I like how my initials are displayed in the logo as my prospective clients know me and appreciate my personal qualities and work. The look is neat, clear and very nice."'
        },
        heroImg: '/assets/project-assets/kiril-hero.png',
        logosDescImg: '/assets/project-assets/kiril-logos.jpg',
        logoDesc: 'The logo is made of a visual sign - a leaf and displays the initials of the founder of the company - Kiril Yotkov. This visual element is used in order to be associated with one of the main activities of the company - landscaping. The composition also reflects the letters "P" and "C" which are the initials for the bulgarian word phrase "поливни системи", meaning irrigation systems - their layout is the other main activity of the brand.',
        colorPalette: ['#f04770', '#ffd167', '#06d7a0', '#108ab1', '#073a4b'],
        font: 'Fester Extralight, Source Sans Pro ExtraLight',
        projectDate: '04.2022',
        usedPrograms: ['/assets/programs/illustrator-icon.png'],
        endImage: '/assets/project-assets/kiril-endimg.jpg'
    },
    {
        id: 2,
        title: "Private kindergarten<br>\"Land of the children\"",
        description: "Client: \"Land of the children\" Ltd",
        customer: {
            label: 'The challenge',
            text: ' The brand has already a visual identity that is incomplete. The logo is composed of too many elements, one of which is the original name of the business, which is no longer used - Kinderland. There are two channels of communication - a personal profile on Facebook and a Facebook business page. What is needed is a social media redesign, an Instagram account and an integrated brand design.'
        },
        briefProblem: {
            label: 'Overview',
            text: ' The kindergarten expands its scope of operation and therefore its target audience with whom it wants to communicate, so it needs a vision that corresponds with this audience.'
        },
        // challenge: {
        //     label: 'The challenge',
        //     text: 'The brand has already a visual identity that is incomplete. The logo is composed of too many elements, one of which is the original name of the business, which is no longer used - Kinderland. There are two channels of communication - a personal profile on Facebook and a Facebook business page. What is needed is a social media redesign, an Instagram account and an integrated brand design.'
        // },
        feedback: {
            label: 'Feedback from the client',
            text: '"The logo is simple, modern and made with beautiful colours. I like that now the kindergarten has a clear concept for all the promotional materials and social media channels, as we have made many improvements over the last few years and this design certainly suits our new look."'
        },
        heroImg: '/assets/project-assets/kinderland-hero.jpg',
        logosDescImg: '/assets/project-assets/kinderland-logos.jpg',
        colorPalette: ['#00baad', '#5fe0b7', '#aee8e9', '#ffeb68', '#ffac2a', '#e9506d', '#f06ab7'],
        font: 'Montserrat',
        projectDate: '05.2022',
        usedPrograms: ['/assets/programs/illustrator-icon.png'],
        endImage: '/assets/project-assets/kindergarten-endimg.jpg'
    },
    {
        id: 3,
        title: 'Social media and website design',
        customer: {
            label: 'Client',
            text: ' "Land of the children" Ltd'
        },
        briefProblem: {
            label: 'The result',
            text: ' <a href="https://zemianadecata.com" target="_blank">https://zemianadecata.com</a>'
        },
        challenge: {
            label: 'Overview',
            text: 'The kindergarten\'s website has been disabled for several months.A new website design is needed to correspond visually with the brand identity of the business, as well as a new social media design with the creation of an Instagram account which is an appropriate channel to communicate with the target audience.'
        },
        feedback: {
            label: 'Project objective',
            text: 'Creating a new brand design that at the same time uses the current design elements, but also creating new ones that match the brand\'s mission.'
        },
        heroImg: '/assets/project-assets/social-network-design-hero.png',
        endImage: '/assets/project-assets/social-network-design-endimg.jpg'
    },
    {
        id: 4,
        title: "Printed ads",
        customer: {
            label: 'The assignment',
            text: ' A student project for the new series of peanuts "Hrrupss" of the brand ROIS.'
        },
        briefProblem: {
            label: 'Overview',
            text: ' Not enough sufficient information for the brand; the products are not being chosen by target consumers.'
        },
        aim: {
            label: 'Project objective',
            text: 'Increased brand awareness among the target audience by 70%.'
        },
        heroImg: '/assets/project-assets/interactive-campaigns-hero.jpg'
    },
    {
        id: 5,
        title: "Editorials",
        customer: {
            label: 'The assignment',
            text: 'Creating a calendar for 2021 using the tool Adobe InDesign'
        },
        challenge: {
            label: 'The concept',
            text: 'The title of the calendar is "Time to travel" as 2020 was a year of lockdowns and restrictions. 2021 is a time for journeys and new adventures, so each month features different capitals of countries around the world.'
        },
        heroImg: '/assets/project-assets/print-hero.jpg',
        endImage: '/assets/project-assets/print-endimg.jpg'
    },
    {
        id: 6,
        title: "Out of home design",
        customer: {
            label: 'The assignment',
            text: ' Startup branding'
        },
        briefProblem: {
            label: 'Contributors to the project',
            text: ' Ekaterina Angelova - brand manager'
        },
        aim: {
            label: 'The concept',
            text: 'Creating the creatives for a campaign with objective awareness.'
        },
        heroImg: '/assets/project-assets/external-ad-hero.jpg',
    },
    {
        id: 7,
        title: "Illustrations and photography",
        description: '<b>The illustrations</b> are part of other projects, which I created for branding and children\'s hall decoration<br><br> Part of the <b>photographs</b> are captured for a subject at university - Photography in advertising, by using basic compositional principles such as the \'Rule of Thirds\', \'Placement of the horizon line in the composition\' and the principle of \'Leading Lines\'',
        heroImg: '/assets/project-assets/illustrations-photography-hero.jpg',
        logosDescImg: '/assets/project-assets/illustrations-photography-logos.jpg',
        endImage: '/assets/project-assets/illustrations-photography-endimg.jpg',
    },
    {
        id: 8,
        title: "Personal branding",
        customer: {
            label: 'Project objective',
            text: ' creating a custom logo to match my personality.'
        },
        challenge: {
            label: 'The concept',
            text: 'The logo is composed of two elements, one is typographic - the small letter "ni" from the Greek alphabet, and the other is a visual one - the " Thornbird" from the "Sparrow-like" species. The shapes are solid and oval to imply on stability and completeness as well as flexibility.'
        },
        heroImg: '/assets/project-assets/personal-branding-hero.jpg',
        logosDescImg: '/assets/project-assets/personal-branding-logos.jpg',
        colorPalette: ['#f16331', '#bd2393', '#0091bd', '#59c2f1', '#3ef7e9'],
        font: 'Liberal, Montserrat ExtraLight',
        projectDate: '04.2022',
        usedPrograms: ['/assets/programs/illustrator-icon.png'],
    }
];