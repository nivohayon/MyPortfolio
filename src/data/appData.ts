import { baseURL } from '../api/instance';

export const appData = {
  // Profile
  nameProfile: 'Niv Ohayon',
  subtitleProfile: 'Fullstack Developer at ',
  workPlaceName: 'MSAPPS',
  workPlaceLink: 'https://msapps.mobi/',
  descriptionProfile: 'I Build applications for web and mobile from scratch ',
  viewFullResumeText: 'View Full Resumé',
  viewFullResumeLink:
    'https://drive.google.com/file/d/1CzqmKvHHFfM5zRVztqrG65kTg5QlxlRM/view?usp=sharing',

  // About
  about_title: 'About',
  text1_1About:
    'Ever since I can remember myself, I was always curious about how things work behind the scenes.',
  text1_2About: 'My passion for programming started after watching some',
  about_youtube_link_text: 'YouTubers',
  about_youtube_link: 'https://www.youtube.com/@MichaelReeves',
  text1_3About: 'who used programming to build amazing things.',
  text1_4About:
    'Fast-forward to 2019, I started learning Software Engineering at',
  about_ruppin_link_text: 'Ruppin Technological College.',
  about_ruppin_link: 'https://mtr.ruppin.tech/megamot/computers/',
  text1_5About: 'In 2021 I graduated with an average grade of 90 and got my',
  about_diploma_link_text: 'Diploma.',
  about_diploma_link:
    'https://drive.google.com/file/d/1CKVcYDICAYFC7d5oJwUTsZPLLkGpb6DY/view?usp=sharing',
  text2_1About:
    'My main focus these days is learning embedded and electronics. In my free time, I am learning new technologies, and working on new projects.',
  text3About:
    "When I'm not at the computer, I'm usually hanging out with my girlfriend, working out at the gym, watching TV, or meeting with friends.",

  // Links
  github_link: 'https://github.com/nivohayon',
  instagram_link: 'https://instagram.com/nivohayon1582',
  linkedin_link: 'https://www.linkedin.com/in/nivohayon',
  resume_link:
    'https://drive.google.com/file/d/1CzqmKvHHFfM5zRVztqrG65kTg5QlxlRM/view?usp=drive_link',

  // Experience
  titleExperience: 'Experience',
  experiences: [
    {
      id: 1,
      from: 'Jan 2022',
      until: 'Present',
      title: 'Fullstack Developer at MSAPPS',
      description:
        "As a full stack developer, I specialize in creating mobile and web applications using technologies like React, React Native, Node.js, Express, MySQL, and MongoDB. I've undertaken projects in the IoT and blockchain domains, though my expertise is primarily in application development. I also have some experience with AWS cloud services.",
      mainLink: 'https://msapps.mobi/',
      skills: [
        'React',
        'React Native',
        'Node.js',
        'Express.js',
        'MySQL',
        'MongoDB',
        'Typescript',
        'AWS',
        'Solidity',
        'Git',
      ],
    },
  ],

  // Education
  titleEducation: 'Education',
  educations: [
    {
      id: 1,
      from: '2019',
      until: '2021',
      title: 'Software Engineering at Ruppin',
      description:
        'I Majored in Software Engineering with an average grade of 90. Here is my syllabus: Front end technologies: React, JavaScript, HTML, and CSS. Back end technologies: Express.js and C# Web API. Object-oriented programming, Data structures, Algorithms and Secured development, using C#. Mobile apps development using React Native and Java in Android Studio. Databases technologies: MSSQL, MongoDB, and Firebase Firestore. Other technologies: Python, Cyber, System analysis.',
      mainLink: 'https://mtr.ruppin.tech/megamot/computers/',
      skills: [
        'React',
        'React Native',
        'Javascript',
        'Express.js',
        'C# Web API',
        'MongoDB',
        'MSSQL',
        'Python',
        'Java',
        'Firebase',
        'HTML',
        'CSS',
      ],
    },
  ],

  // Projects
  titleProjects: 'Projects',
  installsCountText: 'Installs',
  viewFullProjectsArchiveText: 'View Full Project Archive',
  projects: [
    {
      id: 1,
      previewImgName: `${baseURL}ProjectsPreviews/tappster.webp`,
      title: 'Tappster',
      description:
        'An app that allows you to scan a barcode and start to pour beer. the app communicates with an IoT device using AWS and if authorized the user can pour beer.',
      skills: ['React', 'React Native', 'AWS', 'MySQL', 'SCSS'],
      links: [
        {
          title: 'Android - Tappster',
          url: 'https://play.google.com/store/apps/details?id=com.beerastation',
        },
        {
          title: 'IOS - Tappster',
          url: 'https://apps.apple.com/tr/app/tappster/id1639085750',
        },
      ],
      installCount: '1200+',
      mainLink: 'https://www.linkedin.com/company/tappster/',
      year: 2022,
      madeAt: 'MSAPPS',
    },
    {
      id: 2,
      previewImgName: `${baseURL}ProjectsPreviews/hypersloths.jpeg`,
      title: 'HyperSloths',
      description:
        'An NFT project that I built from scratch using Web 3 technologies, I developed the smart contract and a react web app for analytics. Deployed to the Ethereum blockchain.',
      skills: ['Solidity', 'React', 'Web3'],
      links: [
        {
          title: 'OpenSea',
          url: 'https://opensea.io/collection/hypersloths-rdy-labs',
        },
      ],
      mainLink: 'https://hypersloths.com/',
      year: 2022,
      madeAt: 'MSAPPS',
    },
    {
      id: 3,
      previewImgName: `${baseURL}ProjectsPreviews/my-store.jpeg`,
      title: 'My Store',
      description: 'A website for posting second hand products for sale.',
      skills: ['React', 'C# .NET WEB API', 'MSSQL', 'SCSS'],
      allImagesProjectName: 'MyStore',
      year: 2021,
      madeAt: 'Ruppin',
    },
    {
      id: 4,
      previewImgName: `${baseURL}ProjectsPreviews/pantry-recipes.jpeg`,
      title: 'Pantry Recipes',
      description:
        'Find recipes based on what you have in the kitchen. I built the same app in two different technologies, one by using Java and Firebase, the other by using React Native and C# Web API.',
      skills: [
        'React Native',
        'C# .NET WEB API',
        'MSSQL',
        'Java For Android',
        'Firebase',
      ],
      allImagesProjectName: 'PantryRecipes',
      year: 2021,
      madeAt: 'Ruppin',
    },
  ],

  // Archive
  yearArchive: 'Year',
  projectArchive: 'Project',
  madeAtArchive: 'Made at',
  builtWithArchive: 'Built with',
  linkArchive: 'Link',
  backToHomeLinkText: 'Back Home',
  archiveTitle: 'All Projects',

  // Footer
  inspiredByFooter: 'Inspired by ',
  inspiredByText: "Brittany Chiang's Website ",
  inspiredByLink: 'https://brittanychiang.com/',
  andCodedInFooter: 'and coded in ',
  vscodeText: 'Visual Studio Code ',
  vscodeLink: 'https://code.visualstudio.com/',
  byYoursFooter: 'by yours truly. Built with ',
  reactText: 'React ',
  andFooter: 'and ',
  reactLink: 'https://react.dev/',
  tsText: 'Typescript ',
  tsLink: 'https://www.typescriptlang.org/',
  usingFooter: 'using ',
  viteText: 'Vite',
  viteLink: 'https://vitejs.dev/',
  deployedWithFooter: ', deployed with ',
  vercelText: 'Vercel. ',
  vercelLink: 'https://vercel.com/',
  fontUsedFooter: 'The font family used is ',
  interText: 'Inter.',
  interLink: 'https://fonts.google.com/specimen/Inter',

  // Not Found
  docTitleNotFound: '404 Not Found',
  numberNotFound: '404',
  textNotFound: 'This page could not be found.',

  // Coming Soon
  textComingSoon: 'Coming Soon',
};
