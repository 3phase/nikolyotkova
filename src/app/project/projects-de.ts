import { IProject } from "./project.component";

export const PROJECTS_DE: IProject[] = [
    {
        id: 1,
        title: "Privater Kindergarten<br>\"Land der Kinder\"",
        description: "Kunde: \"Land der Kinder\" GmbH",
        challenge: {
            label: "Projektziel",
            text: "Erstellung eines neuen Markendesigns, das gleichzeitig die aktuellen Designelemente verwendet, aber auch neue Elemente schafft, die zur Mission der Marke passen."
        },
        aim: {
            label: 'Die Herausforderung',
            text: ' Die Marke hat bereits eine visuelle Identität, die unvollständig ist. Das Logo besteht aus zu vielen Elementen, eines davon ist der ursprüngliche Name des Unternehmens, der nicht mehr verwendet wird - Kinderland. Es gibt zwei Kommunikationskanäle - ein persönliches Profil auf Facebook und eine Facebook-Geschäftsseite. Benötigt werden ein Redesign der sozialen Medien, ein Instagram-Konto und ein integriertes Markendesign.'
        },
        customer: {
            label: 'Überblick',
            text: ' Der Kindergarten erweitert seinen Tätigkeitsbereich und damit seine Zielgruppe, mit der er kommunizieren möchte, daher benötigt er eine Vision, die mit diesem Publikum übereinstimmt.'
        },
        feedback: {
            label: 'Feedback vom Kunden',
            text: '"Das Logo ist einfach, modern und in schönen Farben gehalten. Mir gefällt, dass der Kindergarten jetzt ein klares Konzept für alle Werbematerialien und sozialen Medien hat, da wir in den letzten Jahren viele Verbesserungen vorgenommen haben und dieses Design sicherlich zu unserem neuen Look passt."'
        },
        briefProblem: {
            label: 'Das Ergebnis',
            text: ' <a href="https://zemianadecata.com" target="_blank">https://zemianadecata.com</a>'
        },
        heroImg: '/assets/project-assets/kinderland-hero.jpg',
        logosDescImg: '/assets/project-assets/kinderland-logos.jpg',
        colorPalette: ['#00baad', '#5fe0b7', '#aee8e9', '#ffeb68', '#ffac2a', '#e9506d', '#f06ab7'],
        font: 'Montserrat',
        projectDate: '05.2022',
        usedPrograms: ['/assets/programs/illustrator-icon.png'],
        endImage: '/assets/project-assets/kindergarten-endimg.jpg',
        fourthImage: '/assets/project-assets/social-network-design-hero.png',
        fifthImage: '/assets/project-assets/social-network-design-endimg.jpg'
    },
    {
        id: 2,
        title: "Logo-Design",
        description: 'Erstellung von Logos für verschiedene Kunden, Start-ups und Universitätsprojekte.',
        heroImg: '/assets/project-assets/kiril-hero.png',
        logosDescImg: '/assets/project-assets/kiril-logos.jpg',
        logoDesc: 'Das Logo besteht aus einem visuellen Zeichen - einem Blatt und zeigt die Initialen des Firmengründers - Kiril Yotkov. Dieses visuelle Element wird verwendet, um mit einer der Hauptaktivitäten des Unternehmens - Landschaftsbau - in Verbindung gebracht zu werden. Die Komposition spiegelt auch die Buchstaben "P" und "C" wider, die die Initialen für das bulgarische Wort "поливни системи" sind, was Bewässerungssysteme bedeutet - deren Layout ist die andere Hauptaktivität der Marke.',
        colorPalette: ['#f04770', '#ffd167', '#06d7a0', '#108ab1', '#073a4b'],
        font: 'Fester Extralight, Source Sans Pro ExtraLight',
        projectDate: '04.2022',
        usedPrograms: ['/assets/programs/illustrator-icon.png'],
        endImage: '/assets/project-assets/kiril-endimg.jpg',
        fourthImage: '/assets/project-assets/xplicity.png',
        fifthImage: '/assets/project-assets/logo_sf_1.png',
        sixthImage: '/assets/project-assets/logo_sf_2.png',
        seventhImage: '/assets/project-assets/logo_sf_3.png',
        eighthImage: '/assets/project-assets/logo_sf_4.png',
    },
    {
        id: 3,
        title: 'Gedruckte Anzeigen & Redaktionelles',
        description: 'Studentenprojekte für Werbekampagnen mit dem Ziel der Sensibilisierung und Erstellung eines Kalenders für 2021.',
        logosDescImg: '/assets/project-assets/print-hero.jpg',
        heroImg: '/assets/project-assets/print-endimg.jpg',
        endImage: '/assets/project-assets/external-ad-hero.jpg',
        fourthImage: '/assets/project-assets/interactive-campaigns-hero.jpg'
    },
    {
        id: 4,
        title: "Illustrationen & Fotografie",
        description: '<b>Die Illustrationen</b> sind Teil anderer Projekte, die ich für Branding und Kinderzimmerdekoration erstellt habe<br><br> Ein Teil der <b>Fotografien</b> wurde für ein Fach an der Universität aufgenommen - Fotografie in der Werbung, unter Verwendung grundlegender kompositorischer Prinzipien wie der \'Regel der Drittel\', \'Platzierung der Horizontlinie in der Komposition\' und dem Prinzip der \'Führenden Linien\'',
        heroImg: '/assets/project-assets/illustrations-photography-hero.jpg',
        logosDescImg: '/assets/project-assets/illustrations-photography-logos.jpg',
        endImage: '/assets/project-assets/illustrations-photography-endimg.jpg',
    },
    {
        id: 5,
        title: "Persönliche Markenbildung",
        customer: {
            label: 'Projektziel',
            text: ' Erstellung eines individuellen Logos, das zu meiner Persönlichkeit passt.'
        },
        challenge: {
            label: 'Das Konzept',
            text: 'Das Logo besteht aus zwei Elementen, einem typografischen - dem kleinen Buchstaben "ni" aus dem griechischen Alphabet, und einem visuellen - dem "Dornenvogel" aus der "Sperlingsartigen" Art. Die Formen sind solide und oval, um Stabilität und Vollständigkeit sowie Flexibilität zu implizieren.'
        },
        heroImg: '/assets/project-assets/personal-branding-hero.jpg',
        logosDescImg: '/assets/project-assets/personal-branding-logos.jpg',
        colorPalette: ['#f16331', '#bd2393', '#0091bd', '#59c2f1', '#3ef7e9'],
        font: 'Liberal, Montserrat ExtraLight',
        projectDate: '04.2022',
        usedPrograms: ['/assets/programs/illustrator-icon.png'],
    },
];
