import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGulp,
  FaSass,
} from "react-icons/fa";
import {
  SiStyledcomponents,
  SiReactrouter,
  SiGatsby,
  SiFigma,
  SiVite,
} from "react-icons/si";
import { BiLogoTailwindCss } from "react-icons/bi";
import { GiWomanElfFace } from "react-icons/gi";
import CPHNightClub from "../img/CPHNightClub.png";
import CPHNightClub1 from "../img/mockupcphnightclub/nightclub1.png";
import CPHNightClub2 from "../img/mockupcphnightclub/nightclub2.png";
import CPHNightClub3 from "../img/mockupcphnightclub/nightclub3.png";
import CPHNightClubMix from "../img/mockupcphnightclub/nightclubmix.png";
import LandrupDans from "../img/LandrupDans.png";
import LandrupDans1 from "../img/mockupslandrup/landrup1.png";
import LandrupDans2 from "../img/mockupslandrup/landrup2.png";
import LandrupDans3 from "../img/mockupslandrup/landrup3.png";
import LandrupDansHead from "../img/mockupslandrup/landrupdancehead.png";
import SmartLights from "../img/SmartLights.png";
import SmartLights1 from "../img/mockupsmartlights/smartlights1.png";
import SmartLights2 from "../img/mockupsmartlights/smartlights2.png";
import SmartLights3 from "../img/mockupsmartlights/smartlights3.png";
import SmartLightsHead from "../img/mockupsmartlights/smartlightshead.png";
import TheProudTracker from "../img/mockuppwa/proudtrackerhead.png";
import PWA1 from "../img/mockuppwa/tracker1.png";
import PWA2 from "../img/mockuppwa/tracker2.png";
import PWA3 from "../img/mockuppwa/tracker3.png";
import iPlayMusic from "../img/iPlayMusic.png";
import iPlayMusic1 from "../img/mockupiplaymusic/iPlayMusic1.png";
import iPlayMusic2 from "../img/mockupiplaymusic/iPlayMusic2.png";
import iPlayMusic3 from "../img/mockupiplaymusic/iPlayMusic3.png";
import iPlayMusicHead from "../img/mockupiplaymusic/iplaymusichead.png";
import NewsBox from "../img/NewsBox.png";
import NewsBox1 from "../img/mockupnewsbox/newsbox1.png";
import NewsBox2 from "../img/mockupnewsbox/newsbox2.png";
import NewsBox3 from "../img/mockupnewsbox/newsbox3.png";
import NewsBoxHead from "../img/mockupnewsbox/newsboxhead.png";
import Portfolio from "../img/PHolm.png";
import portfolio1 from "../img/mockupspholm/pholm1.png";
import portfolio2 from "../img/mockupspholm/pholm2.png";
import portfolio3 from "../img/mockupspholm/pholm3.png";
import portfoliomix from "../img/mockupspholm/pholmmix.png";
import GatsbyAndStyle from "../img/GatsbyAndStyle.png";
import Tefer1 from "../img/mockupgatsby/tefer1.png";
import Tefer2 from "../img/mockupgatsby/tefer2.png";
import Tefer3 from "../img/mockupgatsby/tefer3.png";
import TeferMix from "../img/mockupgatsby/tefermix.png";
import Mapcy from "../img/mockupmapcy/mapcy.png";
import Mapcy1 from "../img/mockupmapcy/mapcy1.png";
import Mapcy2 from "../img/mockupmapcy/mapcy2.png";
import Mapcy3 from "../img/mockupmapcy/mapcy3.png";
import Portfoliov11 from "../img/mockupportfoliov1/portfoliov11.png";
import Portfoliov12 from "../img/mockupportfoliov1/portfoliov12.png";
import Portfoliov13 from "../img/mockupportfoliov1/portfoliov13.png";
import Portfoliov14 from "../img/mockupportfoliov1/portfoliov14.png";
import Portfoliov21 from "../img/mockupportfoliov2/portfoliov21.png";
import Portfoliov22 from "../img/mockupportfoliov2/portfoliov22.png";

const projects = [
  {
    id: 1,
    title: "CPH Night Club",
    head: "EUD Final Exam - simple website with focus on animations",
    desc: "A concept website for a fictional nightclub, designed with rich animations. The site showcases key information such as the club’s offerings, a gallery, customer testimonials, and the latest blog posts. Users can also interact and collaborate with each other on the platform. Additionally, the website includes contact details along with a contact form. Note that the project was not deployed online, as it relied on a school-provided API and ran only in a local environment.",
    stack: [<FaReact />, <SiStyledcomponents />, <SiReactrouter />],
    stackTxt: "React, Styled Components, React Router",
    github: "https://github.com/paulineholm/CPHNightClub/tree/main/nightclub",
    date: "March 2022",
    meta: "School project",
    img: CPHNightClub,
    mockups: [CPHNightClub1, CPHNightClub2, CPHNightClub3],
    headimg: CPHNightClubMix,
  },
  {
    id: 2,
    title: "Landrup Dans",
    head: "EUD (Pre-final) Exam - a dance school app",
    desc: "A prototype app for a fictional dance school, created as a school project. The app provides both students and teachers with an overview of school activities and key information. It also includes functionality for users to sign up for activities. Note that the project was not deployed online, as it relied on a school-provided API and ran only in a local environment.",
    stack: [<FaReact />, <SiStyledcomponents />, <SiReactrouter />],
    stackTxt: "React, Styled Components, React Router",
    github: "https://github.com/paulineholm/LandrupDans/tree/main/landrup-dans",
    date: "March 2022",
    meta: "School project",
    img: LandrupDans,
    mockups: [LandrupDans1, LandrupDans2, LandrupDans3],
    headimg: LandrupDansHead,
  },
  {
    id: 3,
    title: "Smart Lights (Hue)",
    head: "Smartlights App - Philips Hue API (school project)",
    desc: "An application built during web developer education in order to demonstrate object-oriented programming principles. The app communicates with physical Philips Hue bulbs provided by the school, using the Hue Bridge and the official Philips Hue Developer API. Note that the project was not deployed online, as it relied on a school-provided API and ran only in a local environment.",
    stack: [<FaReact />, <GiWomanElfFace />, <SiReactrouter />],
    stackTxt: "React, Emotion, React Router",
    github: "https://github.com/paulineholm/smartlights-hue",
    date: "February 2022",
    meta: "School project",
    img: SmartLights,
    mockups: [SmartLights1, SmartLights2, SmartLights3],
    headimg: SmartLightsHead,
  },
  {
    id: 4,
    title: "The Proud Tracker",
    head: "Mini progressive web app with COVID-19 numbers (school project)",
    desc: "A lightweight progressive web app developed as a school project. Proud Tracker provides users with up-to-date global COVID-19 statistics in a clear overview. It also features push notifications to keep users informed about the latest numbers.",
    stack: [<FaReact />, <GiWomanElfFace />, <SiReactrouter />],
    stackTxt: "React, Emotion, React Router",
    link: "https://proud-tracker.netlify.app/",
    github: "https://github.com/paulineholm/TheProudTracker",
    date: "January 2022",
    meta: "School project",
    img: TheProudTracker,
    mockups: [PWA1, PWA2, PWA3],
    headimg: TheProudTracker,
  },
  {
    id: 5,
    title: "iPlayMusic",
    head: "Music Player App - Spotify API (school project)",
    desc: "A music application that connects to the Spotify API to give users an overview of their favorite content, including playlists, albums, and songs. The app supports both light and dark themes, and requires users to log in with their Spotify account to unlock full functionality.",
    stack: [<FaReact />, <GiWomanElfFace />, <SiReactrouter />],
    stackTxt: "React, Emotion, React Router",
    link: "https://iplaymusic-pholm.netlify.app/",
    github: "https://github.com/paulineholm/iplaymusic-paulineholm",
    date: "December 2021",
    meta: "School project",
    img: iPlayMusic,
    mockups: [iPlayMusic1, iPlayMusic2, iPlayMusic3],
    headimg: iPlayMusicHead,
  },
  {
    id: 6,
    title: "News Box",
    head: "News Box - NY Times API (school project)",
    desc: "A news application that integrates the New York Times API to provide users with an up-to-date overview of current articles and headlines.",
    stack: [<FaHtml5 />, <FaSass />, <FaJsSquare />, <FaGulp />],
    stackTxt: "HTML, SASS, JavaScript, Gulp",
    link: "https://newsbox-pholm.netlify.app/",
    github: "https://github.com/paulineholm/newbox-project",
    date: "May 2021",
    meta: "School project",
    img: NewsBox,
    mockups: [NewsBox1, NewsBox2, NewsBox3],
    headimg: NewsBoxHead,
  },
  {
    id: 7,
    title: "Portfolio 2020 (v0)",
    head: "Pauline Holm portfolio v0",
    desc: "A simple portfolio built utilizing only HTML, CSS, and basic JavaScript. Created at the very beginning of my Web Developer education at Roskilde Technical College, it served as an introduction to fundamental web development concepts.",
    stack: [<FaHtml5 />, <FaCss3Alt />, <FaJsSquare />],
    stackTxt: "HTML, CSS, JavaScript",
    link: "https://pholm.netlify.app",
    github: "https://github.com/paulineholm/holmpauline",
    date: "November 2020",
    meta: "School project",
    img: Portfolio,
    mockups: [portfolio1, portfolio2, portfolio3],
    headimg: portfoliomix,
  },
  {
    id: 8,
    title: "Gatsby and Style",
    head: "Simple website made with Gatsby (school project)",
    desc: "A simple website developed as a school project, focusing on Gatsby and Styled Components. The project also emphasized applying color theory and design principles to create a visually balanced and engaging user experience.",
    stack: [<SiGatsby />, <SiStyledcomponents />],
    stackTxt: "Gatsby, Styled Components",
    link: "https://gatsbyandstyle.gatsbyjs.io",
    github: "https://github.com/paulineholm/gatsbyandstyle",
    date: "November 2021",
    meta: "School project",
    img: GatsbyAndStyle,
    mockups: [Tefer1, Tefer2, Tefer3],
    headimg: TeferMix,
  },
  {
    id: 9,
    title: "Mapcy",
    head: "Mapcy - Sustainable Tourist Guide (uni project)",
    desc: "A mock-up developed as part of a university project, where the task was to improve upon the existing Mapcy concept. Based on user research and stakeholder discussions, the team introduced two new features: “Fun Facts” and “Green Events.” Both additions received highly positive feedback from our stakeholder, Oana. The project was carried out within the framework of the IT, Learning and Organizational Change master’s program at Aalborg University.",
    stack: [<SiFigma />],
    stackTxt: "Figma",
    link: "https://www.figma.com/proto/UQvEnVt3PrlhVH9vGAwzXI/Mapcyfinal?node-id=0-1&t=k7cunj4pa5J2UMFs-1",
    github: "#",
    date: "October 2022",
    meta: "Uni project",
    img: Mapcy,
    mockups: [Mapcy3, Mapcy2, Mapcy1],
    headimg: Mapcy,
  },
  {
    id: 10,
    title: "Portfolio 2022 (v1)",
    head: "Pauline Holm portfolio v1",
    desc: "The first professional version of my portfolio, created after completing my Web Developer education at Roskilde Technical College. Built with React, Styled Components, Framer Motion and React Router, it presented my skills and projects in a modern, interactive and animated format. This portfolio played a key role in securing my first real-world programming positions and served as the foundation for my updated 2025 portfolio.",
    stack: [<FaReact />, <SiStyledcomponents />, <SiReactrouter />],
    stackTxt: "React, Styled Components, React Router",
    link: "https://pholmv1.netlify.app",
    github: "https://github.com/paulineholm/portfolio2022",
    date: "August 2022",
    meta: "Portfolio",
    img: Portfoliov14,
    mockups: [Portfoliov11, Portfoliov12, Portfoliov13],
    headimg: Portfoliov14,
  },
  {
    id: 11,
    title: "Portfolio 2025 (v2)",
    head: "Pauline Holm portfolio v2",
    desc: "The latest version of my portfolio, showcasing my growth and development as a frontend developer since 2022. This iteration features a complete redesign and rebuild using React, Styled Components, and React Router. The updated portfolio highlights my most recent projects, skills, and experiences, reflecting my current capabilities and aspirations in the tech industry. In this project, I have incorporated beautiful fonts from https://www.fontshare.com",
    stack: [<FaReact />, <SiVite />, <BiLogoTailwindCss />, <SiReactrouter />],
    stackTxt: "React, Vite, Tailwind, React Router",
    link: "https://paulineholm.netlify.app/",
    github: "https://github.com/paulineholm/portfolio2025",
    date: "September 2025",
    meta: "Portfolio",
    img: Portfoliov21,
    mockups: [Portfoliov21, Portfoliov22],
    headimg: Portfoliov21,
  },
];

export default projects;
