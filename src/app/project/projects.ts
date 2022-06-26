import { IProject } from "./project.component";

export const PROJECTS: IProject[] = [
    {
        id: 1,
        title: "Озеленяване Кирил Й",
        description: '"Озеленяване Кирил Й" е нова фирма за залесяване, изграждане на поливни системи и поддръжка на тревни площи',
        customer: {
            label: 'Клиент',
            text: ' Кирил Йотков<br><br><strong>Цел на брифа:</strong> нов бранд'
        },
        challenge: {
            label: 'Предизвикателство',
            text: 'районът, в който оперира фирмата, се характеризира с малък пазар и наличие на няколко конкурентни фирми. Също така хората, които го населяват извършват сами всички дейности, свързани с ландшафта на имотите им.'
        },
        aim: {
            label: 'Цел',
            text: 'създаване на изчистена и минималистична визия, която се откроява от тази на конкурентните фирми.',
        },
        feedback: {
            label: 'Обратна връзка',
            text: '“Харесва ми как са изобразени инициалите им, тъй като хората, които ще ми бъдат клиенти ме познават и ценят качествата и работата ми. Визията е изчистена, ясна и много приятна”'
        },
        heroImg: '/assets/project-assets/kiril-hero.png',
        logosDescImg: '/assets/project-assets/kiril-logos.jpg',
        logoDesc: 'Логото е изградено от визуален знак - листо и изобразява инициалите на създателя на фирмата - Кирил Йотков. Използван е този визуален елемент, за да се асоциира с една от основните дейности на фирмата - озеленяването. Композицията отразява и буквите "П" и "С" - поливни системи. Поставянето им е другата основна дейност на бранда.',
        colorPalette: ['#f04770', '#ffd167', '#06d7a0', '#108ab1', '#073a4b'],
        font: 'Fester Extralight',
        projectDate: '04.2022',
        usedPrograms: ['/assets/programs/illustrator-icon.png'],
        endImage: '/assets/project-assets/kiril-endimg.jpg'
    },
    {
        id: 2,
        title: "Частна детска градина \"Земя на децата\"",
        customer: {
            label: 'Клиент',
            text: 'ЧДГ "Земя на децата" ЕООД'
        },
        briefProblem: {
            label: 'Проблем по бриф',
            text: ' Детската градина разширява дейността си и съответно своята таргет аудитория, с която иска да комуникира, затова се нуждае от визия, която да кореспондира с тази аудитория'
        },
        challenge: {
            label: 'Предизвикателство',
            text: 'Брандът има изградена визуална идентичност, която е непълна. Логото е съставено от твърде много елементи, един от които е първоначалното име на бизнеса, което вече не се използва - Киндерланд. Съществуват два канала на комуникация - личен профил и страница на бизнеса във Facebook. Необходим е нов дизайн на социалните мрежи, създаване на акаунт в Instagram и изготвяне на цялостен дизайн на бранда.'
        },
        feedback: {
            label: 'Обратна връзка',
            text: '“Логото е изчистено, модерно и с хубави цветове. Харесва ми, че детската градина има вече ясна концепция за всички рекламни материали и социални мрежи, тъй като през последните няколко години направихме много подобрения и тази визия със сигурност отговаря на новия ни облик”'
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
        title: 'Дизайн на социални мрежи и уебсайт',
        customer: {
            label: 'Клиент',
            text: 'ЧДГ "Земя на децата" ЕООД'
        },
        briefProblem: {
            label: 'Резултат',
            text: ' <a href="https://zemianadecata.com" target="_blank">https://zemianadecata.com</a>'
        },
        challenge: {
            label: 'Проблем по бриф',
            text: 'Сайтът на детската градина е невалиден от няколко месеца. Нужен е нов дизайн на уебсайта, който да кореспондира визуално с бранд идентичността на бизнеса. Необходим е нов дизайн на социалните мрежи и създаване на акаунт в Instagram, който е подходящ канал за комуникация с таргет аудиторията.'
        },
        feedback: {
            label: 'Решение',
            text: 'Създаване на нов дизайн на бранда, който същевременно използва налични дизайн елементи, но се създават и нови такива, които да отговарят на мисията на бранда'
        },
        heroImg: '/assets/project-assets/social-network-design-hero.jpg',
        endImage: '/assets/project-assets/social-network-design-endimg.jpg'
    },
    {
        id: 4,
        title: "Интерактивни кампании",
        customer: {
            label: 'Клиент',
            text: 'Студентски проект за новата серия фъстъци “Hrrupss” на бранда ROIS'
        },
        briefProblem: {
            label: 'Проблем по бриф',
            text: ' Недостатъчно информация за бранда, не се избира от таргет потребителите'
        },
        aim: {
            label: 'Цел',
            text: 'Повишаване на разпознаваемостта на бранда сред таргет аудиторията със 70%.'
        },
        heroImg: '/assets/project-assets/interactive-campaigns-hero.jpg'
    },
    {
        id: 5,
        title: "Визии за печатни издания",
        customer: {
            label: 'Задание',
            text: 'Изготвяне на календар за 2021 на Adobe InDesign'
        },
        challenge: {
            label: 'Концепция',
            text: 'Заглавието на календара е “Time to travel”, тъй като 2020г. беше година на локдауни и рестрикции. 2021 г. е време за пътешествия и нови приключения, затова всеки месец изобразява различни столици на държави от целия свят.'
        },
        heroImg: '/assets/project-assets/print-hero.jpg',
        endImage: '/assets/project-assets/print-endimg.jpg'
    },
    {
        id: 6,
        title: "Дизайн на външна реклама",
        customer: {
            label: 'Задание',
            text: 'Брандинг на стартъп'
        },
        briefProblem: {
            label: 'Концепция',
            text: ' Изготвяне на криейтив за рекламна кампания с цел осведоменост'
        },
        aim: {
            label: 'Сътрудници',
            text: 'Екатерина Ангелова - бранд мениджър'
        },
        heroImg: '/assets/project-assets/external-ad-hero.jpg',
    },
    {
        id: 7,
        title: "Илюстрации и фотографии",
        description: '<b>Илюстрациите</b> са част от други проекти, които съм разработвала, първият - дизайн на уебсайт за ЧДГ ‘Земя на децата”, а вторият - Личен брандинг.<br><br>Част от <b>фотографиите</b> са направени за курсът “Фотографията в рекламата”, воден от Енчо Найденов, използвайки основни композиционни принципи като “Правилото на третините”, “Разполагане на линията на хоризонта в композицията” и принципът на ‘Водещите линии”',
        heroImg: '/assets/project-assets/illustrations-photography-hero.jpg',
        logosDescImg: '/assets/project-assets/illustrations-photography-logos.jpg',
        endImage: '/assets/project-assets/illustrations-photography-endimg.jpg',
    },
    {
        id: 8,
        title: "Личен брандинг",
        customer: {
            label: 'Задание',
            text: 'създаване на лично лого, което да отговаря на личността ми'
        },
        challenge: {
            label: 'Концепция',
            text: 'логото е изградено от два елемента, единият е типографски - малката буква "ни" от гръцката азбука, а другият е визуален - птицата "Трънковче" от разред "Врабчоподобни". Формите са плътни и овални, за да внушават стабилност и завършеност, както и гъвкавост.'
        },
        heroImg: '/assets/project-assets/personal-branding-hero.jpg',
        logosDescImg: '/assets/project-assets/personal-branding-logos.jpg',
        colorPalette: ['#f16331', '#bd2393', '#0091bd', '#59c2f1', '#3ef7e9'],
        font: 'Liberal',
        projectDate: '04.2022',
        usedPrograms: ['/assets/programs/illustrator-icon.png'],
    }
];