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
} from "react-icons/si";
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
// import iPlayMusic4 from "../img/mockupiplaymusic/iPlayMusic4.png";
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

const projects = [
  {
    id: 1,
    title: "CPH Night Club",
    head: "Final Exam - simple website with focus on animations",
    desc: "Final Exam at school, a simple website for a night club with lots of animations. Users can see many relevant details regarding the clubs offer, see the gallery, testimonials as well as the newest blogposts and collaborate on that with other users. Besides, the contact info (and contact formular) are provided. Not deployed at it was only working locally with school-provided API.",
    stack: [<FaReact />, <SiStyledcomponents />, <SiReactrouter />],
    stackTxt: "React, Styled Components, React Router",
    github: "#",
    date: "March 2022",
    meta: "School project",
    img: CPHNightClub,
    mockups: [CPHNightClub1, CPHNightClub2, CPHNightClub3],
    headimg: CPHNightClubMix,
  },
  {
    id: 2,
    title: "Landrup Dans",
    head: "(Pre-final) Exam, an app for a dance school",
    desc: "Pre-exam (final), an app for a dance school (school project). The app is supposed to give users and teachers overview at activities at school and all important details. It gives possibility to sign for activities. Not deployed at it was only working locally with school-provided API.",
    stack: [<FaReact />, <SiStyledcomponents />, <SiReactrouter />],
    stackTxt: "React, Styled Components, React Router",
    github: "#",
    date: "March 2022",
    meta: "School project",
    img: LandrupDans,
    mockups: [LandrupDans1, LandrupDans2, LandrupDans3],
    headimg: LandrupDansHead,
  },
  {
    id: 3,
    title: "Smart Lights (Hue)",
    head: "Smartlights App based on Philips Hue API (school project)",
    desc: "This app is a school project - where focus was on object oriented programming. Its purpose was to communicate with the physical lamps provided by school (Philips Hue bulbs) via the bridge and Philips Hue API for developers. Not deployed as it is only working on the local bridge and its API.",
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
    head: "Small progressive web app with COVID-19 numbers (school project)",
    desc: "The Proud Tracker progressive web app is a small school project. This tracker gives users overview over the newest COVID-19 numbers worldwide and comes with push notifications.",
    stack: [<FaReact />, <GiWomanElfFace />, <SiReactrouter />],
    stackTxt: "React, Emotion, React Router",
    link: "https://proud-tracker.netlify.app/",
    github: "#",
    date: "January 2022",
    meta: "School project",
    img: TheProudTracker,
    mockups: [PWA1, PWA2, PWA3],
    headimg: TheProudTracker,
  },
  {
    id: 5,
    title: "iPlayMusic",
    head: "Music Player App based on Spotify API (school-project)",
    desc: "A music app, that uses Spotify API to give user overview at their favorite music: playlists, albums, songs. Provided with light and dark theme, you must login with your Spotify account to access full functionality.",
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
    head: "News Box with Ny Times API (school project)",
    desc: "A news app, that uses New York Times API to give user overview at the news.",
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
    title: "Portfolio 2020",
    head: "My first portfolio from 2020",
    desc: "This portfolio was made using HTML, CSS and basic JavaScript only. It was when I just started on Web developer education at Roskilde Technical College.",
    stack: [<FaHtml5 />, <FaCss3Alt />, <FaJsSquare />],
    stackTxt: "HTML, CSS, JavaScript",
    link: "https://paulineholm.netlify.app",
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
    desc: "Simple website made for a school project - focus on Gatsby and Styled Components, as well as color theory.",
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
    head: "Mapcy - Sustainable Tourist Guide (school project)",
    desc: "Mock-up for a school project, where we were asked to improve an existing concept of Mapcy. Based on conducted research, we have decided to add 'Fun facts' and 'Green events', which have met a positive feedback from our Stakeholder Oana.",
    stack: [<SiFigma />],
    stackTxt: "Figma",
    link: "#",
    github: "#",
    date: "October 2022",
    meta: "Uni project",
    img: Mapcy,
    mockups: [Mapcy3, Mapcy2, Mapcy1],
    headimg: Mapcy,
  },
  {
    id: 10,
    title: "Cloud Migration",
    head: "Mapcy - Sustainable Tourist Guide (school project)",
    desc: "Mock-up for a school project, where we were asked to improve an existing concept of Mapcy. Based on conducted research, we have decided to add 'Fun facts' and 'Green events', which have met a positive feedback from our Stakeholder Oana.",
    stack: [<SiFigma />],
    stackTxt: "Figma",
    link: "#",
    github: "#",
    date: "October 2022",
    meta: "Work project",
    img: Mapcy,
    mockups: [Mapcy3, Mapcy2, Mapcy1],
    headimg: Mapcy,
  },
  {
    id: 11,
    title: "GHA Automatisations",
    head: "Cloud Migration (school project)",
    desc: "Mock-up for a school project, where we were asked to improve an existing concept of Cloud Migration. Based on conducted research, we have decided to add 'Fun facts' and 'Green events', which have met a positive feedback from our Stakeholder Oana.",
    stack: [<SiFigma />],
    stackTxt: "Figma",
    link: "#",
    github: "#",
    date: "October 2022",
    meta: "Work project",
    img: Mapcy,
    mockups: [Mapcy3, Mapcy2, Mapcy1],
    headimg: Mapcy,
  },
];

export default projects;
